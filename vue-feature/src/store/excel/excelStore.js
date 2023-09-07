const state = {
    isGuestWindows: false,
};

const mutations = {
    /**
     * @param { NetworkState } state
     */
    initialize(state) {
        state.isGuestWindows = undefined;
        state.vmwareToolsVersionStatus = {};
        state.controllerKeyForNic = undefined;
        state.portgroups = [];
        state.networkAdapters = [];
        state.networkAdapterAdditions = [];
        state.ipv4Assignment = {
            hostName: undefined,
            domainName: undefined
        };
    },

    /**
     * @typedef { object } Template
     * @property { string } guestOs
     * @property { VmwareToolsVersionStatus } vmwareToolsVersionStatus
     * @property { string } hostName
     * @property { string } domainName
     * @property { Hardware } hardware
     */
    /**
     * @typedef { object } VmwareToolsVersionStatus
     * @property { string } value
     * @property { boolean } compatible
     */
    /**
     * @typedef { object } Hardware
     * @property { Controller[] } controllers
     * @property { NetworkAdapter[] } networkAdapters
     */
    /**
     * @typedef { object } Controller
     * @property { number } key
     * @property { DeviceInfo } deviceInfo
     */
    /**
     * @typedef { object } DeviceInfo
     * @property { string } label
     */
    /**
     * @typedef { object } AdapterMapping
     * @property { boolean } dhcp
     * @property { string } [ipv4Address]
     * @property { string } [subnetMask]
     * @property { string } [gateway]
     */
    /**
     * @typedef { object } NetworkAdapter
     * @property { number } key
     * @property { string } portgroupId
     * @property { string } portgroupName
     * @property { boolean } isConnectedToStandardPortgroup
     * @property { VirtualEthernetCard } virtualEthernetCard
     */
    /**
     * @typedef { object } VirtualEthernetCard
     * @property { number } key
     * @property { number } controllerKey
     * @property { number } unitNumber
     * @property { Backing } backing
     * @property { Port } port
     */
    /**
     * @typedef { object } Backing
     * @property { string } [deviceName]
     * @property { ManagedObjectReference } [network]
     */
    /**
     * @typedef { object } ManagedObjectReference
     * @property { string } type
     * @property { string } value
     */
    /**
     * @typedef { object } Port
     * @property { string } switchUuid
     * @property { string } portgroupKey
     */
    /**
     * @param { NetworkState } state
     * @param { NetworkAdapter[] } networkAdapters sorted by the device key
     */
    /**
     * @param { NetworkState } state
     * @param { Template } template
     */
    updateTemplateInformation(state, template) {
        state.isGuestWindows = /\bWindows\b/i.test(template.guestOs);
        state.vmwareToolsVersionStatus = template.vmwareToolsVersionStatus;
        const isVmwareToolsAvailable = template.vmwareToolsVersionStatus.compatible;

        const pciController = template.hardware.controllers.find(controller => /PCI controller [0-9]+/i.test(controller.deviceInfo.label));

        // The fallback value of 100 is the default key of the PCI controller 🙄
        state.controllerKeyForNic = pciController?.key ?? 100;

        state.ipv4Assignment.hostName = template.hostName;
        state.ipv4Assignment.domainName = template.domainName;

        state.networkAdapters = template.hardware.networkAdapters.map(networkAdapter => {
            return {
                key: networkAdapter.key,
                portgroupId: networkAdapter.portgroupId,
                portgroupName: networkAdapter.portgroupName,
                adapterMapping: {
                    dhcp: !isVmwareToolsAvailable,
                    ipv4Address: undefined,
                    subnetMask: undefined,
                    gateway: undefined
                }
            };
        });
    },

    /**
     * @param { NetworkState } state
     * @param { portgroup: Portgroup[] } portgroups
     */
    updatePortgroups(state, portgroups) {
        state.portgroups = portgroups;
    },

    /**
     * @param { NetworkState } state
     * @param { MutableNetworkAdapter } networkAdapter
     */
    addNetworkAdapter(state, networkAdapter) {
        state.networkAdapterAdditions.push(networkAdapter);
    },

    /**
     * @param { NetworkState } state
     * @param { number } networkAdapterKey
     */
    undoAddingNetworkAdapter(state, networkAdapterKey) {
        state.networkAdapterAdditions = state.networkAdapterAdditions.filter(item => item.key !== networkAdapterKey);
    }
};

const actions = {
    /**
     * @param { function } commit
     */
    initialize({ commit }) {
        commit("initialize");
    },

    /**
     * @param { function } commit
     * @param { Portgroup[] } portgroups
     */
    updatePortgroups({ commit }, portgroups) {
        commit("updatePortgroups", portgroups);
    },

    /**
     * @param { function } commit
     * @param { Template } template
     */
    updateTemplateInformation({ commit }, template) {
        commit("updateTemplateInformation", template);
    },

    /**
     * @param { Function } commit
     * @param { MutableNetworkAdapter } networkAdapter
     */
    addNetworkAdapter({ commit }, networkAdapter) {
        commit("addNetworkAdapter", networkAdapter);
    },

    /**
     * @param { Function } commit
     * @param { number } networkAdapter
     */
    undoAddingNetworkAdapter({ commit }, networkAdapter) {
        commit("undoAddingNetworkAdapter", networkAdapter);
    }
};

const getters = {
    /**
     * @param { NetworkState } state
     */
    isVmwareToolsAvailable(state) {
        return state.vmwareToolsVersionStatus.compatible;
    },

    /**
     * @param { NetworkState } state
     * @return { AdapterMapping[] }
     */
    adapterMappings(state) {
        return state.networkAdapters.concat(state.networkAdapterAdditions).map(networkAdapter => {
            let adapterMapping;
            if (networkAdapter.dhcp) {
                adapterMapping = { dhcp: true, ipv4Address: undefined, subnetMask: undefined, gateway: undefined };
            } else {
                adapterMapping = { dhcp: false, ...networkAdapter.adapterMapping };
            }

            return adapterMapping;
        });
    },

    /**
     * @param { NetworkState } state
     * @return { boolean }
     */
    hasNonDhcp(state) {
        const nonDhcpExists = state.networkAdapters.some(networkAdapter => !networkAdapter.adapterMapping.dhcp);
        if (nonDhcpExists) {
            return true;
        }

        return state.networkAdapterAdditions.some(networkAdapter => !networkAdapter.adapterMapping.dhcp);
    },

    /**
     * @typedef { object } EthernetAdapterUpdateRequest
     * @property { number } key
     * @property { number } controllerKey
     * @property { boolean } isStandardPortgroup
     * @property { string } portgroupId
     * @property { string } portgroupName
     * @property { string } distributedSwitchUuid
     */
    /**
     * @param { NetworkState } state
     * @return { EthernetAdapterUpdateRequest[] }
     */
    ethernetAdapterUpdateRequests(state) {
        return state.networkAdapters.map(networkAdapter => {
            const portgroup = state.portgroups.find(item => item.id === networkAdapter.portgroupId);
            const isStandardPortgroup = portgroup.type === "STANDARD";

            return {
                key: networkAdapter.key,
                controllerKey: state.controllerKeyForNic,
                isStandardPortgroup,
                portgroupId: portgroup.id,
                portgroupName: portgroup.name,
                distributedSwitchUuid: portgroup.distributedSwitchUuid
            };
        });
    },

    /**
     * @typedef { object } EthernetAdapterCreationRequest
     * @property { number } controllerKey
     * @property { boolean } isStandardPortgroup
     * @property { string } portgroupId
     * @property { string } portgroupName
     * @property { string } distributedSwitchUuid
     */
    /**
     * @param { NetworkState } state
     * @return { EthernetAdapterCreationRequest[] }
     */
    ethernetAdapterCreationRequests(state) {
        return state.networkAdapterAdditions.map(networkAdapter => {
            const portgroup = state.portgroups.find(item => item.id === networkAdapter.portgroupId);
            const isStandardPortgroup = portgroup.type === "STANDARD";

            return {
                controllerKey: state.controllerKeyForNic,
                isStandardPortgroup,
                portgroupId: portgroup.id,
                portgroupName: portgroup.name,
                distributedSwitchUuid: portgroup.distributedSwitchUuid
            };
        });
    },

    /**
     * @param { NetworkState } state
     * @return { number }
     */
    nextDeviceKey(state) {
        let array;
        if (state.networkAdapterAdditions.length > 0) {
            array = state.networkAdapterAdditions;
        } else {
            array = state.networkAdapters;
        }

        return Math.max(...array.map(networkAdapter => networkAdapter.key)) + 1;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

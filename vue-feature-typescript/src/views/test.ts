import axios, {AxiosRequestConfig} from "axios";

export default {
    mounted() {
        axios.get('https://api.example.com/data')
            .then(response => {
                // 응답 데이터 처리
                console.log(response.data);
            })
            .catch(error => {
                // 에러 처리
                console.error(error);
            });
    }
}

export interface ReceiveAxiosType<T> {
    data: T | T[];
    dataSize: number;
    dataType: string;
    message: string;
}

export const vmwareApi = {
    /**
     * HTTP GET Method
     * <pre>
     *   - RequestURL   : ${serverUrl}/${baseUrl}/${pathVariable}?${config.params}
     *   - Content-type : application/json
     * </pre>
     * @param baseUrl endpoint
     * @param pathVariable path
     * @param config
     * @return {ReceiveAxiosType<T>} AxiosResponse.data
     */
    get: async <T>(
        baseUrl: string,
    ): Promise<ReceiveAxiosType<T>> => {
        const response = await axios.get<ReceiveAxiosType<T>>("1");
        return response.data;
    },
    asyncMethod2: async <T>(): Promise<any> => {
        // 비동기적인 작업을 수행하는 메서드의 로직을 작성합니다.
    },
}
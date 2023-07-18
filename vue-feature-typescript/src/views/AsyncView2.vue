<template>
  <div></div>
</template>
<script lang="ts" setup>
import axios, { AxiosError, AxiosRequestConfig } from "axios";

/* props */
const props = defineProps({
  isManagedList: Boolean,
});
/* data */
/* eslint-disable */
const test = {
  get: async <T>(
      baseUrl: string,
      pathVariable?: string,
  ) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  },
}

</script>

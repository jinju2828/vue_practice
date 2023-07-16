import axios from "axios";

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
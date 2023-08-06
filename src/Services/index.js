import axios from "axios";

const apiData = axios.create({
	baseURL: 'http://localhost:3000',
    withCredentials:false,
    headers: {
        Accept:'application/json',
        ContentType:"application/json"
    }
});

export default {
    getMenWatchList(){
        return apiData.get('/mens-watch')
    },
    getMenWatchDetails(id){
        return apiData.get(`/mens-watch/${id}`)
    }
    
}
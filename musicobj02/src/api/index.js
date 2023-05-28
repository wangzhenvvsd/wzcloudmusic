import axios from 'axios'

const baseUrl = "http://localhost:3000";

//封装获取轮播图的api  调用例子：/banner ,/banner?type=2
export  function getBanner(type=0){
    return axios.get(`${baseUrl}/banner?type=${type}`);

}
export function getMusic(limit=10){
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}
export function getPlaylist(id){
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

export default {getBanner,getMusic,getPlaylist}
import axios from "../utils/request";
import {md5} from 'md5'
//登录
export const $login = async (params)=>{
    params.password = md5(md5(params.password).split('').reverse().join())
    let {data} = axios.get('Admin/login',{params})
    console.log(data);
}
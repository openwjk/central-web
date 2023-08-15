import React,{useEffect} from "react";
import {notification} from 'antd'

export default function CommonNotification(type='info',message='系统通知',description){
    const [api, contextHolder] = notification.useNotification();
    useEffect(()=>{
        api[type]({
            message,
            description,
        })
    },[]);
    return(
        <>{contextHolder}</>
    )
}
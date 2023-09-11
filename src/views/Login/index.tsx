import {ChangeEvent, useEffect, useState} from "react";
import { Input, Space, Button, message } from 'antd';
import styles from "./index.module.scss"
import "./login.less"
import initLoginBg from "./init.ts"

const View = () => {

    // 加载完这个组件之后,加载背景
    useEffect(() => {
        initLoginBg();
        window.onresize = function () {
            initLoginBg();
        }
    }, [])
    // 获取用户输入 的信息
    const [usernameVal, setUsernameVal] = useState("")
    const [passwordVal, setPasswordVal] = useState("")
    const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setUsernameVal(e.target.value)
    }
    const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value)
    }

    // 点击登录按钮的事件
    const gotoLogin = async () => {
        console.log(usernameVal)
        console.log(passwordVal)
        // if (!usrenameVal.trim() || !passwordVal.trim()) {
        //     message.warning("请输入完整信息!")
        //     return
        // }
        // // 发起登录请求
        // let loginAPIRes = await LoginAPI({
        //     username: usrenameVal,
        //     password: passwordVal,
        //     uuid: localStorage.getItem("uuid") as string
        // })
        //
        // if (loginAPIRes.code === 200) {
        //     message.success("登录成功")
        //     localStorage.setItem("lege-token", loginAPIRes.token)
        //     navigateTo("/page1")
        //     localStorage.removeItem("uuid")
        //
        // }
    }

    return (
        <div className={styles.loginPage}>
            {/*存放背景*/}
            <canvas id="canvas" style={{display: "block"}}></canvas>
            {/*登录盒子*/}
            <div className={styles.loginBox+ " loginbox"}>
                {/*标题部分*/}
                <div className={styles.title}>
                    <h1>中台</h1>
                    <p>Strive Everyday</p>
                </div>
                {/*表单部分*/}
                <div className="form">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" onChange={usernameChange}/>
                        <Input.Password placeholder="密码" onChange={passwordChange}/>
                        {/*<div className="captchaBox">*/}
                        {/*    <Input placeholder="验证码 " />*/}
                        {/*    <div className="captchaImg">*/}
                        {/*        <img height="38"  alt="" />*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <Button type="primary" block onClick={gotoLogin}> 登录 </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View
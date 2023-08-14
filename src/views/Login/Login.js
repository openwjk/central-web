import React from "react";
import { Button, Form, Input } from 'antd';
import {$login} from '../../api/adminApi'
import './Login.css'


export default function Login(){
    let [form] = Form.useForm();
    //表单成功提交方法
    const onFinish = (values) => {
        console.log('Success:', values);
        $login(values)
      };
    const cancle = () => {
        form.resetFields();
      };
    return (
        <div className="login">
            <div className="content">
            <h2 className="center">控制中台</h2>
           
            <Form
                name="basic"
                form={form}
                labelCol={{
                span: 4,
                }}
                wrapperCol={{
                span: 18,
                }}
                initialValues={{
                    account:'',
                    password:''
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                
                <Form.Item
                label="账号"
                name="account"
                rules={[
                    {
                    required: true,
                    message: '请输入账号!',
                    },
                ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                    required: true,
                    message: '请输入密码!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 16,
                }}
                >
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
                <Button style={{marginLeft:'10px'}} onClick={cancle}>
                    取消
                </Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    )
}
import React, {useState} from 'react';
import {Breadcrumb, Layout, theme} from 'antd';
import {Outlet} from 'react-router-dom'
import MainMenu from "@/components/MainMenu";

const {Header, Content, Footer, Sider} = Layout;

const breadcrumbItems = [
    {title: 'User2'},
    {title: 'Bill2'}
]


const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    // const navigateTo = useNavigate();

    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* 左边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical">wjk</div>
                <MainMenu></MainMenu>
            </Sider>
            {/* 右边栏 */}
            <Layout>
                {/* 右边头部 */}
                <Header style={{paddingLeft: '16px', background: colorBgContainer}}>
                    <Breadcrumb style={{lineHeight: '64px'}} items={breadcrumbItems}/>
                </Header>

                {/* 右边内容 */}
                <Content style={{margin: '16px 16px 0'}} className='site-layout-background'>
                    {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div> */}
                    <Outlet></Outlet>
                </Content>
                {/* 右边底部 */}
                <Footer style={{textAlign: 'center', padding: 0, lineHeight: '48px'}}>central ©2023 Created by
                    openwjk</Footer>
            </Layout>
        </Layout>
    );
};

export default View;
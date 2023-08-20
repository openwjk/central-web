import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const breadcrumbItems = [
  { title: 'User2' },
  { title: 'Bill2' }
]



const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key)
    //点击跳转到对应路由  编程式导航跳转
    navigateTo(e.key)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" >openwjk</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
      </Sider>
      {/* 右边栏 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }} >
          <Breadcrumb style={{ lineHeight: '64px' }} items={breadcrumbItems} />
        </Header>

        {/* 右边内容 */}
        <Content style={{ margin: '16px 16px 0' }} className='site-layout-background'>
          {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div> */}
          <Outlet></Outlet>
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>central ©2023 Created by openwjk</Footer>
      </Layout>
    </Layout>
  );
};

export default View;
import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate, useLocation} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];
//登录请求到数据周，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
    {
        key: '/page1',
        icon: <PieChartOutlined/>,
        label: '栏目1'
    }, {
        key: '/page2',
        icon: <DesktopOutlined/>,
        label: '栏目2'
    }, {
        key: '/page3',
        icon: <UserOutlined/>,
        label: '栏目3',
        children: [
            {
                label: '栏目301',
                key: '/page3/page301'
            }, {
                label: '栏目302',
                key: '/page3/page302'
            }, {
                label: '栏目302',
                key: '/page3/page303'
            }
        ]
    }, {
        key: '/page4',
        icon: <TeamOutlined/>,
        label: '栏目4',
        children: [
            {
                label: '栏目401',
                key: '/page4/page401'
            }, {
                label: '栏目402',
                key: '/page4/page402'
            }
        ]
    }, {
        key: '/page5',
        icon: <FileOutlined/>,
        label: '栏目5'
    }
]
const Comp: React.FC = () => {
    const navigateTo = useNavigate();
    const currentRoute = useLocation();
    const menuClick = (e: { key: string }) => {
        console.log("点击了菜单", e.key)
        //点击跳转到对应路由  编程式导航跳转
        navigateTo(e.key)
    }
    // 拿着currentRoute.pathname跟items数组的每一项的children的key值进行对比，如果找到了相等了，就要他上一级的key
    //这个key给到openKeys数组的元素，作为初始值
    let firstOpenKey: string = ""

    //在这里进行对比
    function findKey(obj: { key: string }) {
        return obj.key === currentRoute.pathname
    }

    //多对比的是多个children
    for (const element of items) {
        //判断是否找到
        if (element!['children'] && element!['children'].length > 0 && element!['children'].find(findKey)) {
            firstOpenKey = element!.key as string;
            break;
        }

    }


    //设置展开项的初始值
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const handleOpenChange = (keys: string[]) => {
        console.log(keys)
        //把这个数组修改成最后一项
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            //某项菜单展开和回收的事件
            onOpenChange={handleOpenChange}
            //当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )
}

export default Comp;
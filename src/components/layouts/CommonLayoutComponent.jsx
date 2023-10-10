import React, { useState } from 'react'

import { Breadcrumb, Layout, Menu, theme, Button, Drawer, Space } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    HistoryOutlined,
    CalendarOutlined,
    SettingOutlined
} from '@ant-design/icons';
import HeaderComponent from './HeaderComponent';
import ContentComponent from './ContentComponent';
import reactLogo from '../../assets/react.svg'
import { Link, useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<Link to={"/dashboard"}>Dashboard</Link>, 'dashboard', <PieChartOutlined />),
    // getItem(<Link to={"/unit"}>Unit</Link>, '/unit', <DesktopOutlined />),
    getItem(<Link to={"/item"}>Item</Link>, 'item', <ShopOutlined />),
    getItem(<Link to={"/order"}>Pesanan</Link>, 'order', <ShoppingCartOutlined />),
    getItem(<Link to={"/history"}>Riwayat</Link>, 'history', <HistoryOutlined />),
    // getItem(<Link to={"/summary"}>Ringkasan</Link>, '/summary', <CalendarOutlined />),

    getItem('Ringkasan', 'summary', <CalendarOutlined />, [
        getItem(<Link to={"/summary-data"}>Data</Link>, 'summary-data'),
        getItem(<Link to={"/summary-chart"}>Chart</Link>, 'summary-chart'),
        // getItem('Bill', '4'),
        // getItem('Alex', '5'),
    ]),
    getItem(<Link to={"/config"}>Konfigurasi</Link>, 'config', <SettingOutlined />),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
];
function CommonLayoutComponent() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation()
    var activeMenu = location.pathname.split('/')[1]
    return (
        <>

            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >

                <Sider theme='dark' className='sider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    <div className="demo-logo-vertical">
                        <Space>
                            <img src={reactLogo} alt="" />
                            <span className={collapsed ? 'logo-text-1' : 'logo-text-2'} style={{ color: 'white', fontSize: '16px' }}>An-Nidzom</span>

                        </Space>
                    </div>
                    <Menu theme="dark" selectedKeys={activeMenu} mode="inline" items={items} />
                </Sider>
                <Layout className={collapsed ? 'layout-1' : 'layout-2'}>
                    <HeaderComponent />
                    <ContentComponent/>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2023 Created by Ant UED

                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default CommonLayoutComponent
import React, { useState } from 'react'
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
import { Breadcrumb, Layout, Menu, theme, Button, Drawer, Space } from 'antd';
import './layouts.css'
import reactLogo from '../../assets/react.svg'
import { Link, useLocation } from 'react-router-dom';

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

function DrawerComponent() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const location = useLocation()
    var activeMenu = location.pathname.split('/')[1]
    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}>
            </Button>
            <Drawer title={
                <div className='demo-logo-vertical'>
                    <Space>
                        <img src={reactLogo} alt="" />
                        <span style={{ fontSize: '16px', color: 'white' }}>An-Nidzom</span>
                    </Space>
                </div>
            } placement="left" closable={false} onClose={onClose} open={open} width={200}>
                <Menu theme="dark" selectedKeys={activeMenu} mode="inline" onSelect={() => { setOpen(false) }} items={items} />
            </Drawer>
        </>
    )
}

export default DrawerComponent
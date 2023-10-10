import React from 'react'
import DrawerComponent from './DrawerComponent'
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Drawer, Dropdown } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];

function HeaderComponent() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    background: colorBgContainer,
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className='header'>
                    <div>
                        <div className='drawer-component'>
                            <DrawerComponent />
                            <span style={{ paddingLeft: '10px' }}>An-Nidzom</span>
                        </div>

                    </div>
                    <div>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            {/* <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Click me
                                    <DownOutlined />
                                </Space>
                            </a> */}
                            <Button type="primary" shape="circle" icon={<UserOutlined />} size='middle' />
                        </Dropdown>
                    </div>

                </div>
            </Header>
        </>
    )
}

export default HeaderComponent
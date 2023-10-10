import React from 'react'
import { Table, Divider, Pagination, Button, Input, Space, Typography, Tag, DatePicker } from 'antd';
import { EyeOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './history_pages.css'

const { Search } = Input;

const { Title } = Typography

const { RangePicker } = DatePicker;

function HistoryPages() {
    const onSearch = (value) => console.log(value);
    return (
        <>
            <div className='table-header'>
                <Title level={3}>Daftar Riwayat</Title>
                <Space className='table-menu'>
                    <RangePicker showTime />
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Space>

            </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} scroll={{
                x: 1300,
            }}/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    total={85}
                    showSizeChanger
                    showQuickJumper
                    showTotal={(total) => `Total ${total} items`}
                    responsive={true}
                    style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}
                />

            </div>
        </>
    )
}

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
        width: 40,
        fixed: 'left'
    },
    {
        title: 'Nama Pemesan',
        dataIndex: 'name',
    },
    {
        title: 'Pesanan',
        dataIndex: 'items',
        render: (_, record) =>
            <>
                {
                    record.items.map((item, index) => {
                        return <Tag key={index}>{item}</Tag>
                    })
                }
            </>
    },
    {
        title: 'Waktu Pesan',
        dataIndex: 'order_at',
        render: (_, record) =>
            <>
                {new Date(record.order_at * 1000).toLocaleString("id-ID")}
            </>
    },
    {
        title: 'Waktu Bayar',
        dataIndex: 'pay_at',
        render: (_, record) =>
            <>
                {new Date(record.pay_at * 1000).toLocaleString("id-ID")}
            </>
    },
    {
        title: 'Total',
        dataIndex: 'total',
    },
    {
        title: 'Action',
        dataIndex: 'age',
        render: (_, record) =>
            <>
                <Space>
                    <Link to={`/history/detail/${record.age}`}>
                        <EyeOutlined />
                    </Link>
                </Space>
            </>
    },
];
const data = [

    {
        key: '1',
        name: 'Manun',
        age: 42,
        order_at: 1693231805,
        pay_at: 1693231842,
        items: ['Thai Tea Latte'],
        total: 30000,
    },
    {
        key: '2',
        name: 'Hunun',
        age: 32,
        order_at: 1693231743,
        pay_at: 1693231816,
        items: ['Solo Espresso', 'Macciato/Conpanna'],
        total: 27000,
    },
    {
        key: '3',
        name: 'Ramdan',
        age: 32,
        order_at: 1693231816,
        pay_at: 1693231842,
        items: ['Mickey Latte'],
        total: 31000,
    },
];

export default HistoryPages
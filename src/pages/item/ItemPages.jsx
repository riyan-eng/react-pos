import React from 'react'
import { Table, Popconfirm, Select, Pagination, Button, Input, Space, Typography } from 'antd';
import { EyeOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './item_pages.css'

const { Search } = Input;

const { Title } = Typography

function ItemPages() {
    const onSearch = (value) => console.log(value);
    return (
        <>
            <div className='table-header'>
                <Title level={3}>Daftar Item</Title>
                <Space className='table-menu'>
                    <span>Diskon Global: 5%</span>
                    <Select
                        placeholder="Pilih salah satu kategori"
                        allowClear
                    >
                        <Option value="male">Coffee</Option>
                        <Option value="female">Non Coffee</Option>
                        <Option value="other">Other</Option>
                    </Select>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <Link to={`/item/create`}>
                        <Button type="primary" icon={<PlusOutlined />} size='middle'>Tambah</Button>
                    </Link>
                </Space>

            </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false}
                scroll={{
                    x: 1300,
                }} />
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
        title: 'Nama',
        dataIndex: 'name',
        // width: 150,
        // fixed: 'left'
    },
    {
        title: 'Kategori',
        dataIndex: 'category',
        // width: 100
    },
    {
        title: 'Harga Dasar',
        dataIndex: 'base_price',
        // width: 60,
    },
    {
        title: 'Total Diskon',
        dataIndex: 'total_discount',
        // width: 90
    },
    {
        title: 'Harga',
        dataIndex: 'price',
        // width: 60
    },
    {
        title: 'Action',
        dataIndex: 'age',
        width: 90,
        render: (_, record) =>
            <>
                <Space>
                    <Link to={`/item/detail/${record.age}`}>
                        <EyeOutlined />
                    </Link>
                    <Link to={`/item/update/${record.age}`}>
                        <EditOutlined />
                    </Link>
                    <Popconfirm title="Sure to delete?" onConfirm={() => console.log("delete")}>
                        <DeleteOutlined />
                    </Popconfirm>
                </Space>
            </>
    },
];
const data = [
    {
        key: '1',
        name: 'Solo Espresso',
        age: 32,
        category: 'Coffee',
        base_price: 17000,
        total_discount: 0,
        price: 17000,
    },
    {
        key: '2',
        name: 'Macciato/Conpanna',
        age: 42,
        category: 'Coffee',
        base_price: 20000,
        total_discount: 0,
        price: 20000,
    },
    {
        key: '3',
        name: 'Signature Affogato',
        age: 32,
        category: 'Coffee',
        base_price: 20000,
        total_discount: 0,
        price: 20000,
    },
    {
        key: '4',
        name: 'Thai Tea Latte',
        age: 32,
        category: 'Non Coffee',
        base_price: 30000,
        total_discount: 0,
        price: 30000,
    },
    {
        key: '5',
        name: 'Mickey Latte',
        age: 42,
        category: 'Non Coffee',
        base_price: 31000,
        total_discount: 0,
        price: 31000,
    },
    {
        key: '6',
        name: 'Smurf Latte',
        age: 32,
        category: 'Non Coffee',
        base_price: 31000,
        total_discount: 0,
        price: 31000,
    },
];

export default ItemPages
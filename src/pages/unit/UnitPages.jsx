import React from 'react'
import { Table, Divider, Pagination, Button, Input, Space, Typography } from 'antd';
import { EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './unit_pages.css'

const { Search } = Input;

const { Title } = Typography

const columns = [
    {
        title: 'No',
        dataIndex: 'key',
    },
    {
        title: 'Nama',
        dataIndex: 'name',
    },
    {
        title: 'Alamat',
        dataIndex: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'age',
        render: (_, record) =>
            <>
                <Link to={`/unit/${record.age}`}>
                    <EyeOutlined />
                </Link>
            </>
    },
];
const data = [
    {
        key: '1',
        name: 'MDA Nurul Huda',
        age: 32,
        address: 'Ds. Kluwih, Kec. Bandar, Kab. Batang, Jawa Tegah',
    },
    {
        key: '2',
        name: 'MTS Technonatura',
        age: 42,
        address: 'Jl. Pakem-Kalasan, Kalibulus, Area Sawah, Bimomartani, Kec. Ngemplak, Kabupaten Sleman, Daerah Istimewa Yogyakarta',
    },
    {
        key: '3',
        name: 'MA Darussalam',
        age: 32,
        address: 'Kemiri Utara, Kemiri Bar., Kec. Subah, Kabupaten Batang, Jawa Tengah',
    },
];

function UnitPages() {
    const onSearch = (value) => console.log(value);
    return (
        <>
            <div className='table-header'>
                <Title level={3}>Daftar Unit</Title>
                <Space>
                    <Search placeholder="input search text" onSearch={onSearch} enterButton/>
                    <Button type="primary" icon={<PlusOutlined />} size='middle'>Tambah</Button>
                </Space>

            </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} />
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

export default UnitPages
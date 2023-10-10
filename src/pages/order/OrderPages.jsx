import React, { useState } from 'react'
import { Table, Popconfirm, Pagination, Button, Input, Space, Typography, Tag, DatePicker, Modal, message, Steps, theme } from 'antd';
import { EyeOutlined, PlusOutlined, DeleteOutlined, EditOutlined, DollarCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './order_pages.css'

const { Search } = Input;

const { Title } = Typography
const { RangePicker } = DatePicker;



function OrderPages() {
    const onSearch = (value) => console.log(value);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // step 
    const steps = [
        {
            title: 'First',
            content: <>
                <table>
                    <thead>
                        <th>Item</th>
                        <th>Harga</th>
                        <th>Kuantitas</th>
                        <th>Jumlah</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Solo Expresso</td>
                            <td>17000</td>
                            <td>1</td>
                            <td>17000</td>
                        </tr>
                        <tr>
                            <td>Macciato/Conpanna</td>
                            <td>20000</td>
                            <td>1</td>
                            <td>20000</td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </>,
        },
        {
            title: 'Last',
            content: <>
                <p>Status pembayaran: Dibayar <Button>Refresh</Button></p>
                <Button>Cetak Struk</Button>
            </>,
        },
    ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        // lineHeight: '260px',
        // textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        minHeight: '260px'
    };

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
            title: 'Ruangan',
            dataIndex: 'room',
        },
        {
            title: 'Nomor Meja',
            dataIndex: 'table',
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
            title: 'Total',
            dataIndex: 'total',
        },
        {
            title: 'Action',
            dataIndex: 'age',
            render: (_, record) =>
                <>
                    <Space>
                        <Link to={`/order/detail/${record.age}/`}>
                            <EyeOutlined />
                        </Link>
                        <Link to={`/order/update/${record.age}/`}>
                            <EditOutlined />
                        </Link>
                        <Popconfirm title="Sure to delete?" onConfirm={() => console.log("delete")}>
                            <DeleteOutlined />
                        </Popconfirm>
                    </Space>
                </>
        },
        {
            title: '',
            dataIndex: 'total',
            width: 80,
            fixed: 'right',
            render: (_, record) =>
                <>
                    <Button onClick={showModal}>Bayar</Button>
                    <Modal title="Basic Modal" open={isModalOpen} footer={false} onCancel={handleCancel}>
                        <Steps current={current} items={items} />
                        <div style={contentStyle}>{steps[current].content}</div>
                        <div
                            style={{
                                marginTop: 24,
                            }}
                        >
                            {current < steps.length - 1 && (
                                <Button type="primary" onClick={() => next()}>
                                    Bayar
                                </Button>
                            )}
                            {current === steps.length - 1 && (
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                    Done
                                </Button>
                            )}
                            {current > 0 && (
                                <Button
                                    style={{
                                        margin: '0 8px',
                                    }}
                                    onClick={() => prev()}
                                >
                                    Previous
                                </Button>
                            )}
                        </div>
                    </Modal>

                </>
        },
    ];


    return (
        <>
            <div className='table-header'>
                <Title level={3}>Daftar Order</Title>
                <Space className='table-menu'>
                    <RangePicker showTime />
                    <Search placeholder="input search text" onSearch={onSearch} enterButton />
                    <Link to={"/order/create"}>
                        <Button type="primary" icon={<PlusOutlined />} size='middle'>Tambah</Button>
                    </Link>
                </Space>

            </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} scroll={{
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

const data = [
    {
        key: '1',
        name: 'Ari',
        age: 32,
        room: '1',
        table: 23,
        items: ['Solo Espresso', 'Macciato/Conpanna'],
        order_at: 1693232506,
        total: 27000,
    },
    {
        key: '2',
        name: 'Danang',
        age: 42,
        room: '2',
        table: 65,
        items: ['Thai Tea Latte'],
        order_at: 1693232494,
        total: 30000,
    },
    {
        key: '3',
        name: 'Mulyadi',
        age: 32,
        room: '1',
        table: 7,
        items: ['Mickey Latte'],
        order_at: 1693232485,
        total: 31000,
    },
];

export default OrderPages
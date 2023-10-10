import React, { useState } from 'react'
import { Table, Divider, Pagination, Button, Input, Space, Typography, Tag, DatePicker, Select } from 'antd';
import { EyeOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './summary_data_pages.css'

const { Search } = Input;

const { Title } = Typography

const { RangePicker } = DatePicker;

function SummaryDataPages() {
  const [period, setPeriod] = useState('day')
  const handleChange = (value) => {
    setPeriod(value)
  }
  var filterComponent
  if (period == 'day') {
    filterComponent = <RangePicker />
  } else {
    filterComponent = <RangePicker picker="month" />
  }
  return (
    <>
      <div className='table-header'>
        <Title level={3}>Daftar Ringkasan</Title>
        <Space className='table-menu'>
          {filterComponent}
          <Select
            onChange={handleChange}
            defaultValue="day"
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'day',
                label: 'Harian',
              },
              {
                value: 'month',
                label: 'Bulanan',
              },
            ]}
          />
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

const columns = [
  {
    title: 'No',
    dataIndex: 'key',
  },
  {
    title: 'Waktu',
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

export default SummaryDataPages
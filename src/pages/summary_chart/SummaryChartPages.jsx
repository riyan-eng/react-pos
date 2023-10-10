import React, { useState } from 'react'
import { Table, Divider, Pagination, Button, Input, Space, Typography, Tag, DatePicker, Select } from 'antd';
import { EyeOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './summary_chart_pages.css'

const { Search } = Input;

const { Title } = Typography

const { RangePicker } = DatePicker;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartTitle,
  Tooltip,
  Legend
);

function SummaryChartPages() {
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
        <Title level={3}>Chart Ringkasan</Title>
        <Space>
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
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oke', 'Nov', 'Des'],
          datasets: [
            {
              id: 1,
              label: 'a',
              data: [2100000, 1900000, 3000000, 2900000, 2500000, 3100000, 3200000, 3500000, 3150000, 3100000, 2700000, 2800000],
            },
            // {
            //   id: 2,
            //   label: 'b',
            //   data: [3, 2, 1],
            // },
          ],
        }}
      />
    </>
  )
}

export default SummaryChartPages
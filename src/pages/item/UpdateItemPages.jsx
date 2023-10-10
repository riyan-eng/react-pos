import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Select, InputNumber, Typography, Checkbox } from 'antd';
import { PercentageOutlined } from '@ant-design/icons';

const { Title } = Typography

const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
    );
};

function UpdateItemPages() {
    const [form] = Form.useForm();
    return (
        <>
            <Title level={3}>Update Item</Title>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item
                    name="name"
                    label="Nama"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Kategori"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Pilih salah satu kategori"

                        allowClear
                    >
                        <Option value="male">Coffee</Option>
                        <Option value="female">Non Coffee</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="base_price"
                    label="Harga Dasar"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        addonBefore="Rp"
                    />
                </Form.Item>
                <Form.Item
                    name="discount"
                    label="Diskon"
                >
                    <InputNumber
                        style={{
                            width: '100%',
                        }}
                        addonAfter={<PercentageOutlined />}
                    />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Harga"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <InputNumber
                        addonBefore="Rp"
                        readOnly={true}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="item_discount"
                    valuePropName="checked"
                >
                    <Checkbox>Gunakan diskon per item</Checkbox>
                </Form.Item>
                <Form.Item
                    name="global_discount"
                    valuePropName="checked"
                >
                    <Checkbox>Gunakan diskon global</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <SubmitButton form={form} />
                        <Button htmlType="reset">Reset</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
}

export default UpdateItemPages

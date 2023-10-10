import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Space, Select, InputNumber, Typography, Checkbox } from 'antd';
// import { PercentageOutlined } from '@ant-design/icons';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


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

function DetailOrderPages() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <>
            <Title level={3}>Detail Pesanan</Title>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                <Form.Item
                    name="name"
                    label="Nama Pemesan"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="room"
                    label="Ruangan"

                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Select a person"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: '1',
                            },
                            {
                                value: '2',
                                label: '2',
                            },
                            {
                                value: '3',
                                label: '3',
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    name="table"
                    label="Meja"

                >
                    <Select
                        showSearch
                        allowClear
                        placeholder="Select a person"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: '1',
                            },
                            {
                                value: '2',
                                label: '2',
                            },
                            {
                                value: '3',
                                label: '3',
                            },
                        ]}
                    />
                </Form.Item>
                <p>Items</p>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    style={{
                                        display: 'flex',
                                        marginBottom: 8,
                                    }}
                                    align="baseline"
                                >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'first']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing first name',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            allowClear
                                            placeholder="Select a person"
                                            optionFilterProp="children"
                                            // onChange={onChange}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                                {
                                                    value: '1',
                                                    label: 'Solo Espresso',
                                                },
                                                {
                                                    value: '2',
                                                    label: 'Macciato/Conpanna',
                                                },
                                                {
                                                    value: '3',
                                                    label: 'Signature Affogato',
                                                },
                                                {
                                                    value: '4',
                                                    label: 'Thai Tea Latte',
                                                },
                                                {
                                                    value: '5',
                                                    label: 'Mickey Latte',
                                                },
                                                {
                                                    value: '6',
                                                    label: 'Smurf Latte',
                                                },
                                            ]}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Harga" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Kuantitas" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Diskon" />
                                    </Form.Item>
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'last']}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Missing last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Jumlah" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                            ))}
                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Tambah Item
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item
                    name="total"
                    label="Total"
                >
                    <Input />
                </Form.Item>
            </Form>
        </>
    )
}

export default DetailOrderPages
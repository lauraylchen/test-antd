import React, { useState } from 'react';
import './Form.less';

import { PlusOutlined } from '@ant-design/icons';
import { Content } from "antd/lib/layout/layout";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  InputNumber,
  Checkbox,
  Upload,
  Col,
  Row,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDemo = () => {
    return(
        <Content>
            <div className="site-layout-content form">
                <h1>Book Trip</h1>
                <Form
                   layout='vertical'
                >
                    <Row gutter={6}>
                        <Col span={12}>
                            <Form.Item label="First Name">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Last Name">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Age">
                        <InputNumber min={18} />
                    </Form.Item>
                    <Form.Item label="Team">
                        <Radio.Group buttonStyle='solid'>
                            <Radio.Button className='red' value="red"> Red </Radio.Button>
                            <Radio.Button className='blue' value="blue"> Blue </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Country">
                        <Select>
                            <Select.Option value="canada">Canada</Select.Option>
                            <Select.Option value="usa">United States</Select.Option>
                            <Select.Option value="france">France</Select.Option>
                            <Select.Option value="australia">Australia</Select.Option>
                            <Select.Option value="china">China</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Trip Dates">
                        <RangePicker />
                    </Form.Item>
                    <Form.Item label="About you">
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item label="Profile Picture" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item valuePropName="checked">
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </Content>
    )
}

export default FormDemo;
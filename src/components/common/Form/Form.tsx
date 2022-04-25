import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import style from './Form.module.scss';

const { Option } = Select;

const RegistrationForm = () => {
  const [form] = Form.useForm();
  return (
    <Form>
      <Form.Item
        className={style.content}
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: '',
          },
        ]}>
        <Input className={style.input} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Введённые пароли должны совпадать'));
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;

import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import RegForm from '../../common/RegForm/RegForm';
import 'antd/dist/antd.css';
import Button from '../../common/Button/Button';

const AuthPage = () => (
  <RegForm title="Hello, World" subTitle="Пройдите авторизацию">
    <Form.Item
      name="email"
      rules={[
        {
          type: 'email',
          message: 'Введите правильный Email',
        },
        {
          required: true,
        },
      ]}>
      <Input placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback>
      <Input.Password placeholder="Пароль" />
    </Form.Item>
    <Button title="Войти" />
  </RegForm>
);

export default AuthPage;

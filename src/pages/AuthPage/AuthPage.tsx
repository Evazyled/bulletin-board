import React from 'react';
import { Form, Input } from 'antd';
import RegForm from '../../components/common/RegForm/RegForm';

import Button from '../../components/common/Button/Button';

const AuthPage = () => (
  <RegForm title="Hello, World" subTitle="Пройдите авторизацию">
    <Form>
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
    </Form>
  </RegForm>
);

export default AuthPage;

import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import Button from '../../common/Button/Button';
import RegForm from '../../common/RegForm/RegForm';

const RegistrationPage = () => (
  <RegForm title="Hello, World" subTitle="Создайте аккаунт">
    <Form>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Поле Имя обязательно',
          },
        ]}>
        <Input placeholder="Имя" />
      </Form.Item>
      <Form.Item
        name="usersurname"
        rules={[
          {
            required: true,
            message: 'Поле Фамилия не может быть пустым',
          },
        ]}>
        <Input placeholder="Фамилия" />
      </Form.Item>
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
      <Form.Item
        name="confirm"
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
        <Input.Password placeholder="Повторите пароль" />
      </Form.Item>
      <Checkbox>Checkbox</Checkbox>
      <Button title="Создать аккаунт" />
    </Form>
  </RegForm>
);

export default RegistrationPage;

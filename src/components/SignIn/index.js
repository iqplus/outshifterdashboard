import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = { 
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

 
 
function SignIn(){

        const onFinish = values => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };
   

    return (
        <Form
      {...layout}
      name="basic"
      style={{width: 500, backgroundColor: 'white', position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'}}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        style={{}}
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    );
}
 
export default SignIn;
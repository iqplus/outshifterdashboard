import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import firebase from '../firebase'; 
import { useHistory, Redirect } from 'react-router-dom';
import Admin from '../Admin';
import { wait } from '@testing-library/react';


const layout = { 
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}; 
 
function SignIn(){

        const [loggedIn, setLoggedIn] = useState(false);

        const log = () => setLoggedIn(true);

        async function onFinish(values) {
          try {
            await firebase.login(values.username, values.password)
            log();
            wait(1000);
            console.log(loggedIn)
            //protect admin route
            if (loggedIn){
              console.log('loging in - success')
              return <Redirect to='admin'/>;
            } else {
              return <Redirect to='/' />;
            } 
            console.log(values.username, values.password)
            
          } catch (error) {
            alert(error.message)
          }
        };
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };

        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('') 
   

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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
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
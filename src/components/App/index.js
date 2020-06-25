import React from 'react';
import {
        BrowserRouter as Router,
        Route, Link,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import AdminPage from '../Admin';
import { Button } from 'antd';

import * as ROUTES from '../../constants/routes';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';



function App() {

        const { SubMenu } = Menu;
        const { Header, Content, Sider } = Layout;
        return (
                

        <Layout>
                <Header className="header">
                        <div className="logo" />
                        <Router>
                                <div>
                                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                                <Menu.Item key="1"><Link to={ROUTES.LANDING}>Landing</Link></Menu.Item>
                                                <Menu.Item key="2"><Link to={ROUTES.SIGN_IN}>Sign In</Link></Menu.Item>
                                                <Menu.Item key="3"><Link to={ROUTES.ADMIN}>Admin</Link></Menu.Item>
                                        </Menu>
                                        <Route exact path ={ROUTES.LANDING} component={LandingPage} />
                                        <Route path = {ROUTES.SIGN_IN} component={SignInPage} />
                                        <Route path = {ROUTES.ADMIN} component={AdminPage} />
                                </div>                   
                        </Router>       
                </Header>
                <Layout>
                        <Sider width={200} className="site-layout-background">
                                <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                >
                                        <Menu.Item key="sub1" icon={<UserOutlined />} title="subnav 1">Users</Menu.Item>
                                        <Menu.Item key="sub2" icon={<LaptopOutlined />} title="subnav 1">Listings</Menu.Item>
                                </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item>Home</Breadcrumb.Item>                                        
                                </Breadcrumb>
                                <Content className="site-layout-background"
                                style={{
                                                padding: 24,
                                                margin: 0,
                                                minHeight: 280,
                                                }}
                                        >                                        
                                        
                                </Content>
                        </Layout>
                </Layout>
        </Layout>
    );
}

export default App;
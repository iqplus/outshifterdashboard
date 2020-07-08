import React from 'react';
import { Layout } from 'antd';


const { Header, Content, Footer } = Layout;

function Navigation(){
    return (
        <Layout>
            <Header>
                <h2 style={{color: 'white'}}>Outshifter Admin</h2>
            </Header>
    
        </Layout>

    )

}

export default Navigation;
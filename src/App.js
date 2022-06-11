import React from 'react'
import './assets/base.less'
import { Layout } from 'antd';
import WalkingLantern from './components/WalkingLantern'
import Search from './components/Search'
import Top from './components/Top';


const { Header, Sider, Content } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
      <Header className='header'>
        <Top/>
        <Search/>
        <WalkingLantern/>
      </Header>
      <Layout>
        <Content className='content'>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
    </Layout>
    </div>
  )
}

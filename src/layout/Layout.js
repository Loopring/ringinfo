import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'
import GlobalFooter from './Footer'
import Navbar from './Navbar'
const { Header, Content, Footer } = Layout


export default function MainLayout(props){
  const { children } = props
  return (
    <Layout className="layout">
      <Header className="bg-grey-900">
        <Navbar />
      </Header>
      <Content className="p50">
        <div className="bg-white">
          {children}
        </div>
      </Content>
      <Footer className="">
        <GlobalFooter />
      </Footer>
    </Layout>
  )
}
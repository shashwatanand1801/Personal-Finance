import Heading from './components/Header'
import Table from './components/Table'
import Bar from './components/Bar'
import Pie from './components/Pie'
import Balance from './components/Balance'
import { Col, Divider, Row } from 'antd';

// import { Layout } from 'antd';
import React from 'react';
import './App.css'


import 'antd/dist/antd.css';


// const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div>

      {/* <Layout>
          <Header><Heading /></Header>
          <Layout>
            <Content><Table /></Content>
            <Sider>
              <Bar />
              <Pie />
            </Sider>
          </Layout>
          <Footer><Balance /></Footer>
        </Layout> */}


        <Heading />

      {/* <Row>
      <Col flex={3}><Table /></Col>
      <Col flex={2}>
        <Pie />
        <Bar />
      </Col>
      </Row> */}

      <div className='main-body'>


      <Row>
      <Col flex="3 1 "><Table /></Col>
      <Col flex="1 1 ">
      <div className='charts'>
      <div className='flex-Column'>
        <div className='pie'>
          <Pie />
        </div>

        <div className='bar'>
          <Bar />
        </div>
      
      </div>
        
      </div>
      </Col>
      </Row>


       
      {/* <Table />
      <Pie />
      <Bar /> */}
      <Balance />

      </div>

    </div>
  );
}

export default App;

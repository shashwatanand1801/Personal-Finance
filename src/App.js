import Heading from './components/Header'
import Table from './components/Table'
import Bar from './components/Bar'
import Pie from './components/Pie'
import Balance from './components/Balance'
import { Col, Switch, Row } from 'antd';

// import { Layout } from 'antd';
import React, { useState, useEffect  } from 'react';
import './App.css'


import 'antd/dist/antd.css';


// const { Header, Footer, Sider, Content } = Layout;


function App() {

  const [visible, setvisible] = useState(true);
  useEffect(()=>{},[visible])


  return (
    <div>


        <Heading />

      <div className='main-body'>


      <Row>
      <Col flex="3 1 "><Table /></Col>
      <Col flex="1 1 ">
      <div className='charts'>

      <div className='toggle-switch'>
      <Switch defaultChecked visible onChange={()=>setvisible(!visible)} />

      <h5>VIEW GRAPHS</h5>
      </div>

      
        {visible? (


          <div className='flex-Column'>
        <div className='pie'>
          <Pie />
        </div>

        <div className='bar'>
          <Bar />
        </div>
      
      </div>


          ):null}

      
        


      </div>
      </Col>
      </Row>


      <Balance />

      </div>

    </div>
  );
}

export default App;

// import { Row, Statistic } from 'antd';
import React from 'react';
import '../style/Balance.css';
import { amtVal } from './GenerateData';

const App = () => (
<div className='balance'>
  {/* <Row>
  <Statistic title="Total Expenditure" value={112893} />
  </Row>
  <Row>
  <Statistic title="Total Earning" value={112893} />
  </Row>
  <Row>
  <Statistic title="Net Total" value={112893} />
  </Row> */}
  <h3 className='text'>Total Expenditure : {amtVal.expenditure}</h3>
  <h3 className='text'>Total Earning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {amtVal.earning}</h3>
  <h3 className='text'>Net Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {amtVal.earning-amtVal.expenditure}</h3>
</div>
);

export default App;
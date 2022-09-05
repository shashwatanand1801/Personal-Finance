// import { Row, Statistic } from 'antd';
import React from 'react';
import '../style/Balance.css';

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
  <h3 className='text'>Total Expenditure : {123456}</h3>
  <h3 className='text'>Total Earning : {123456}</h3>
  <h3 className='text'>Net Total : {0}</h3>
</div>
);

export default App;
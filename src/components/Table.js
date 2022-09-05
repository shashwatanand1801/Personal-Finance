import { Table } from 'antd';
import React from 'react';
import {data} from './GenerateData'


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'FROM',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'TO',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'DATA',
    dataIndex: 'data',
    key: 'data',
  },
  {
    title: 'TYPE',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'TAG',
    dataIndex: 'tag',
    key: 'tag',
  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    key: 'amount',
  },
  // {
  //   title: 'Action',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => <a>Delete</a>,
  // },
];


console.log(data)

const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{ pageSize: 10 }} 
    scroll={{ y: 400 }}
  />
);

export default App;
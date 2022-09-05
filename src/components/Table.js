import { Table } from 'antd';
import React from 'react';
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
const data = [
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
  {
    id: 1,
    from : '1-2-22',
    to : '2-2-22',
    data: 'butter',
    type: 'food',
    tag: 'grocery',
    amount: 300,
  },
];

const App = () => (
  <Table
    columns={columns}
    dataSource={data}
  />
);

export default App;
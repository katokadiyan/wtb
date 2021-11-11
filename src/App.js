import React, { Fragment } from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Headings from './components/Headings/Heading';
import Desc from './components/HeadDesc/Desc';
import Footer from './components/Footer/Footer';

const tableData = [
  {
    number: 44,
    name: 'Lewis HamiltonHOME DEPOT #7001',
    address: '428 ELLESMERE ROAD SCARBOROUGH, ON, M1R 4E7 416.609.1800',
    distance: '1.1 mi Get Directions ',
  },
  {
    number: 44,
    name: 'Lewis HamiltonHOME DEPOT #7001',
    address: '428 ELLESMERE ROAD SCARBOROUGH, ON, M1R 4E7 416.609.1800',
    distance: '1.1 mi Get Directions ',
  },
  {
    number: 44,
    name: 'Lewis HamiltonHOME DEPOT #7001',
    address: '428 ELLESMERE ROAD SCARBOROUGH, ON, M1R 4E7 416.609.1800',
    distance: '1.1 mi Get Directions ',
  },
  {
    number: 44,
    name: 'Lewis HamiltonHOME DEPOT #7001',
    address: '428 ELLESMERE ROAD SCARBOROUGH, ON, M1R 4E7 416.609.1800',
    distance: '1.1 mi Get Directions ',
  },
];


const App = () => {
  return (
    <Fragment>
      <Header />
      <Headings />
      <Desc />
      <Table 
        tableData={tableData}
        title="Lutron Providers"
      />
      <Footer />

    </Fragment>
  );
}

export default App;

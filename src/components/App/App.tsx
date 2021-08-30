import React from 'react';
import Header from '../Header';
import Container from '../shared/Container';
import Table from '../Table';
import { TableHeader } from '../Table';
import Products from '../Table/Table.mockdata';
import './App.css';

const headers: TableHeader[] = [
          { key: 'name', value: 'Product'},
          { key: 'price', value: 'Price', right: true},
          { key: 'stock', value: 'Available Stock', right: true},
        ]

function App() {
  
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
      <Table
        headers = {headers}
        data ={Products}
      >
      </Table>
      </Container>  
    </div>
  );
}

export default App;

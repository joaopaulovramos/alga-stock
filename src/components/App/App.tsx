import React, { useState } from 'react';
import Header from './Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import './App.css';
import ProductForm, { ProductCreator } from './Products/ProductForm';

const headers: TableHeader[] = [
          { key: 'name', value: 'Product'},
          { key: 'price', value: 'Price', right: true},
          { key: 'stock', value: 'Available Stock', right: true},
        ]

function App() {
  const [products, setProducts] = useState(Products)
  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length,
        ...product

      }
    ])
  }
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
      <Table
        headers = {headers}
        data ={products}
      >
      </Table>
      <ProductForm onSubmit={handleProductSubmit}/>
      </Container>  
    </div>
  );
}

export default App;

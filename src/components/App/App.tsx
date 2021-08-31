import React, { useState } from 'react';
import Header from './Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import { TableHeader } from '../../shared/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';
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
        id: products.length + 1,
        ...product

      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product =>
      product.id === newProduct.id
      ? newProduct
      : product  
    ))
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
      <ProductForm 
      form={products[0]}
      onSubmit={handleProductSubmit}
      onUpdate={handleProductUpdate}
      />
      </Container>  
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../Header';
import Container from '../shared/Container';
import Table from '../Table';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
      <Table
        
      ></Table>
      </Container>  
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Button from '../shared/Button';
import Header from '../Header';
import Container from '../shared/Container';
import './App.css';
import Input from '../Input';

function TestComponent() {
  return <i className="fas fa-search-plus"></i>
}


function App() {
  const [street, setStreet] = useState('')
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Button
          onClick={() => window.alert('Voce clicou no botão')}
          appendIcon={<TestComponent />}  
        >
          Search
        </Button>
      </Container>
      <Input 
      label="Street"
      placeholder="E.g: Avenida Castelo Branco"
      value={street}
      onChange={(event) => setStreet(event.target.value)}
      />
    </div>
  );
}

export default App;

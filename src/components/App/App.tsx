import React, { useEffect, useState } from 'react';
import Header from './Header';
import Container from '../../shared/Container';
import Table from '../../shared/Table';
import { TableHeader } from '../../shared/Table';
import './App.css';
import ProductForm, { ProductCreator } from './Products/ProductForm';
import Swal from 'sweetalert2';
import { 
  createSingleProduct, 
  deleteSingleProduct, 
  getAllProducts, 
  updateSingleProduct 
} from '../../services/Products.service';
import { Product } from '../../shared/Table/Table.mockdata';

const headers: TableHeader[] = [
  
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>()
  
  async function fetchData() {
      const _products = await getAllProducts()
      setProducts(_products)
    }
    
  useEffect(() => {
    fetchData()
  
  }, [])



  const handleProductSubmit = async (product: ProductCreator) => {
      try {
        await createSingleProduct(product)
        fetchData()
      } catch(err: any) {
        Swal.fire('Oops!!', err.message, 'error')
      }
      
  }
    
    
  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id)
      fetchData()
      Swal.fire('Uhull', 'Product successfuly deleted', 'success')
    } catch (err: any) {
      Swal.fire('Oops!!', err.message, 'error')
      
    }
  }
    
  const handleProductUpdate = async(newProduct: Product) => {
    try{
        await updateSingleProduct(newProduct)
        setUpdatingProduct(undefined)
        fetchData()
    } catch(err: any){
      Swal.fire('Oops!!', err.message, 'error')
        
    }
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#09f",
    cancelButtonColor: "#d33",
    confirmButtonText: `Yes, delete ${product.name}`,
  }).then((result) => {
    if (result.isConfirmed) {
      deleteProduct(product._id)
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });

}

  const handleProductDetail = (product: Product) => {
    const linha = '\n'
    Swal.fire(
      'Product Details',
      `${product.name}: ${linha} costs $ ${product.price} Stock: ${product.stock}`,
      'info'
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
      <Table
        headers = {headers}
        data ={products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={handleProductEdit}
      >
      </Table>
      <ProductForm 
      form={updatingProduct}
      onSubmit={handleProductSubmit}
      onUpdate={handleProductUpdate}
      />
      </Container>  
    </div>
  );
}

export default App;

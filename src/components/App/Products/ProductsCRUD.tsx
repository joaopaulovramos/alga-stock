import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Table, { TableHeader } from "../../../shared/Table";
import { Product } from "../../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "./ProductForm";
import { connect, useDispatch } from "react-redux";
import  * as ProductsAction from "../../../redux/Products/Products.actions";
import { RootState, ThunkDispatch } from "../../../redux";

const headers: TableHeader[] = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

const showAlert = (error: Error) => Swal.fire("Oops!!", error.message, "error")

declare interface ProductsCRUDProps{
  products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  const dispatch: ThunkDispatch = useDispatch()
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();
  
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  
  async function fetchData() {
    
    dispatch(ProductsAction.getProducts())
      .catch(showAlert)
  }

  

  const handleProductSubmit = async (product: ProductCreator) => {
    
      dispatch(ProductsAction.insertNewProduct(product)).catch(showAlert);
  }

  const deleteProduct = async (id: string) => {
      dispatch(ProductsAction.deleteProduct(id))
        .then(() => {
          Swal.fire("Uhull", "Product successfuly deleted", "success")
        })
        .catch(showAlert)
  }

  const handleProductUpdate = async (newProduct: Product) => {
    dispatch(ProductsAction.updateProducts(newProduct))
      .then(() => setUpdatingProduct(undefined))
      .catch(showAlert);
    
  }

  const handleProductDelete = (product: Product) => {
    Swal
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09f",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete ${product.name}`,
    })
    .then((result) => result.value && deleteProduct(product._id))
  }

  const handleProductDetail = (product: Product) => {
    const linha = "\n";
    Swal.fire(
      "Product Details",
      `${product.name}: ${linha} costs $ ${product.price} Stock: ${product.stock}`,
      "info"
    );
  };

  return (
    <>
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={setUpdatingProduct}
      ></Table>
      <ProductForm
        form={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)
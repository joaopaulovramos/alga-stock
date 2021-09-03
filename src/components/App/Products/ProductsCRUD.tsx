import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { 
  deleteSingleProduct,
  updateSingleProduct

} from "../../../services/Products.service";
import Table, { TableHeader } from "../../../shared/Table";
import { Product } from "../../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "./ProductForm";
import { connect, useDispatch } from "react-redux";
import { getProducts, insertNewProduct } from "../../../redux/Products/Products.actions";

const headers: TableHeader[] = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];


declare interface ProductsCRUDProps{
  products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  const dispatch = useDispatch()
  //const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();

  async function fetchData() {
    try {
      await dispatch(getProducts())
    } catch (error: any) {
      Swal.fire('Oops!', error.message, 'error')
    }
  }

  
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(insertNewProduct(product))
      fetchData();
    } catch (err: any) {
      Swal.fire("Oops!!", err.message, "error");
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id);
      fetchData();
      Swal.fire("Uhull", "Product successfuly deleted", "success");
    } catch (err: any) {
      Swal.fire("Oops!!", err.message, "error");
    }
  };

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct);
      setUpdatingProduct(undefined);
      fetchData();
    } catch (err: any) {
      Swal.fire("Oops!!", err.message, "error");
    }
  };

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
        deleteProduct(product._id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleProductDetail = (product: Product) => {
    const linha = "\n";
    Swal.fire(
      "Product Details",
      `${product.name}: ${linha} costs $ ${product.price} Stock: ${product.stock}`,
      "info"
    );
  };

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product);
  };
  return (
    <>
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onDelete={handleProductDelete}
        onDetail={handleProductDetail}
        onEdit={handleProductEdit}
      ></Table>
      <ProductForm
        form={updatingProduct}
        onSubmit={handleProductSubmit}
        onUpdate={handleProductUpdate}
      />
    </>
  );
}

const mapStateToProps = (state: any) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD)
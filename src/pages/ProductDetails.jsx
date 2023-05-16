import React,{useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const {id} =useParams()
  const {products} =useContext(ProductContext)
  const {addToCart} =useContext(CartContext)

  const product =products.find((item)=>{
    return item.id === parseInt(id)
  })

 console.log(product)
  return <div>Product Details Page</div>;
};

export default ProductDetails;

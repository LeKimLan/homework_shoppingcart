

import React from 'react'
import ProductList from './ProductList'
import Cart from './Cart';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react'

export default function Body() {
    const dispatch = useDispatch();

    const handleBuyProduct = (product) => {
        dispatch({
            type: "BUY_PRODUCT",
            payload: {
                ...product,
                quantity: 1,
            }
        })
    }
    const handleBuyExistProduct = (product) => {
        dispatch({
            type: "BUY_EXIST_PRODUCT",
            payload: product.id
        })
    }
    const handleDropProduct = (product) => {
        dispatch({
            type: "DROP_PRODUCT",
            payload: product.id
        })
    }
    const handleDeleteProduct = (product) => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: product
        })
    }

    const handleAddProduct = () => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                id: Date.now() * Math.random(),
                name: "SP test",
                price: 9999,
            }
        })
    }
    const handleRemoveProduct = (product) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: product,
        })
    }

    return (
        <>
            <button onClick={() => {
                handleAddProduct()
            }}>Add product</button>
            <div className='body_container'>
                <div className='product_list'>
                    <ProductList handleRemoveProduct={handleRemoveProduct} handleBuyProduct={handleBuyProduct} 
                    handleBuyExistProduct={handleBuyExistProduct} />
                </div>
                <div className='cart'>
                    <Cart handleDeleteProduct={handleDeleteProduct} handleDropProduct={handleDropProduct} />
                </div>
            </div>
        </>
    )
}

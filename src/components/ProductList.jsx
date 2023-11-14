

import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductList({handleRemoveProduct, handleBuyProduct, handleBuyExistProduct}) {
    const {productStore, cartStore} = useSelector(store => store)

    return (
        <div>
                <h2>ProductList</h2>
            <ul>
                {
                    productStore.data?.map((product, index) => 
                    <div key={Date.now() * Math.random()}><li >{index + 1} ProductName { product.name } Price: {product.price}</li> 
                    <button onClick={() => {
                        function getProduct(productID) {
                            let existProduct = cartStore.cart.find((item) => {return item.id === productID})
                            if(existProduct == undefined) {
                                handleBuyProduct(product)
                            } else {
                                handleBuyExistProduct(product)
                            }
                        }
                        getProduct(product.id)
                    }}>Mua</button> <button onClick={() => {
                        handleRemoveProduct(product)
                    }}>Xóa</button></div>)
                }
            </ul>
        </div>
    )
}

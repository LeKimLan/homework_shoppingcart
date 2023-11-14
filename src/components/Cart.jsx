

import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'

export default function Cart({handleDeleteProduct, handleDropProduct}) {
    const {countStore, cartStore} = useSelector(store => store)
    let totalItem = cartStore.cart?.reduce((value, currentItem) => {
        return value += currentItem.quantity
    }, 0);
    let cost = cartStore.cart?.reduce((value, currentItem) => {
        return value += currentItem.quantity * currentItem.price
    }, 0);
    

    return (
        <>
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartStore.cart?.map((product, index) => 
                            <tr key={Date.now() * Math.random()}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price * product.quantity}</td>
                                <td>
                                    <button onClick={() => {
                                        function dropProduct(productID) {
                                            let dropProduct = cartStore.cart.find((item) => {return item.id === productID});
                                            if(dropProduct.quantity == 1) {
                                                handleDeleteProduct(product)
                                            }
                                            handleDropProduct(product)
                                        }
                                        dropProduct(product.id)
                                    }}>Giảm</button>
                                    <button onClick={() => {
                                        handleDeleteProduct(product)
                                    }}>Xóa</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>Bạn đang có <span style={{fontWeight: "bold"}}>{totalItem}</span> sản phẩm trong giỏ hàng</div>
            <div>Total cost: <span style={{fontWeight: "bold"}}>{cost}</span></div>
        </>
    )
}

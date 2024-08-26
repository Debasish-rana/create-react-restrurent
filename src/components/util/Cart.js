import React from 'react'
import ItemList from '../ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, removeItems } from './cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const clickHandeler = ()=>{
    dispatch(clearItems())
  }
  const removeHandeler = ()=>{
    dispatch(removeItems())
  }
  const cartItems = useSelector((store)=>store.cart.items)
  return (
    <div>
      <h1 className='text-center p-2 m-4 text-2xl font-bold underline'>Cart Items</h1>
      <div className='w-6/12 m-auto'><ItemList items={cartItems}/></div>
      {cartItems.length === 0 ? <h1 className='text-center text-xl'>Your Cart is Empty Please make a cart</h1> : <div className='flex mt-3 m-40'> <button className='bg-black text-slate-200 m-auto p-4 rounded-2xl flex justify-center' onClick={clickHandeler}>ClearCart</button>
     <button className='bg-black text-slate-200 m-auto p-4 rounded-2xl flex justify-center' onClick={removeHandeler}>Remove Items</button>
     </div>}
    </div>
  )
}

export default Cart

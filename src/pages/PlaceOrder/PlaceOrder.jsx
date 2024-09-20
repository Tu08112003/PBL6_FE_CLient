import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import '../Cart/Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {

  const {getTotalCartAmount, token, food_list, cartItems, url} = useContext(StoreContext)

  const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async(event)=>{
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount:getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place", orderData,{headers:{token}})
    console.log(response.data)
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url)
    }else{
      alert("Error")
    }
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(!token || getTotalCartAmount() === 0){
      alert("Please Login")
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <h2 className='title'>Delivery Information</h2>
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.firstName} name='firstName' type="text" placeholder='First name' />
            <input required onChange={onChangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Last name' />
          </div>
          <input required onChange={onChangeHandler} value={data.email} name='email' type="text" placeholder='Email address' />
          <input required onChange={onChangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.city} name='city' type="text" placeholder='City' />
            <input required onChange={onChangeHandler} value={data.state} name='state' type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input required onChange={onChangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder='Zip Code' />
            <input required onChange={onChangeHandler} value={data.country} name='country' type="text" placeholder='Country' />
          </div>
          <input required onChange={onChangeHandler} value={data.phone} name='phone' type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>{getTotalCartAmount() === 0? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()===0?0: getTotalCartAmount()+2}</p>
            </div>
            <hr />
          </div>
          <button type='submit'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
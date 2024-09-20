import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
          <h2>Order your favorite Ice-Cream here</h2>
          <p>Explore our delightful menu of refreshing ice creams, crafted with the finest ingredients and a passion for perfection. Our mission is to satisfy your sweet cravings and elevate your dessert experience, one creamy scoop at a time.</p>
          <a href="#food-display"><button>View Menu</button></a>
      </div>
      <div className="header-image">
        <img src = {assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
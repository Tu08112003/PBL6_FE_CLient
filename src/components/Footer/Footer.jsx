import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='logo'>Batocom</h1>
                <p>Lorem Lpsum is simply text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever seence the 1500s, when an unknown printer took a galley of type and scramble to make a type specimen book</p> 
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+69 6969 6969</li>
                    <li>anbatocom@anhdaden.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Proplayer 2024 © Andaden.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
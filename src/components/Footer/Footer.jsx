import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
                {/* <img src={assets.logo} alt="Logo" /> */}
            </div>

            <ul className="footer-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.linkedin_icon} alt="LinkedIn" />
                <img src={assets.twitter_icon} alt="Twitter" />
            </div>
        </div>

        <p className="footer-copy">© 2025 GrubGo. All rights reserved.</p>
    </footer>
  )
}

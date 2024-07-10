import React from 'react'
import './Footer.css'
import { GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import useCursorHandlers from '../utils/hooks/useCursorHandlers'

const Footer = () => {
  const cursorHandlers = useCursorHandlers();

  return (
    <>
   
    <div className="footer-wrapper">
      <section className="footer-top">
        <div className="footer-headline">
          <h2>Subscribe to our newsletters</h2>
          <p>Stay informed about our latest updates and special offers.</p>
          <div className="footer-subscribe">
            <input type="text" placeholder="Enter your email address" />
            <button {...cursorHandlers}>Subscribe</button>
          </div>
        </div>
      </section>

      <div className="footer-columns">
        <section className="footer-logo">
          <h2>
            <svg width="1103" height="996" viewBox="0 0 1103 996" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#F4F5F6"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#F4F5F6"/>
            </svg>
          </h2>
        </section>

        <section>
          <h3>Products</h3>
          <ul>
            <li><a href='#' title='Pricing'>Pricing</a></li>
            <li><a href='#' title='Documentation'>Documentation</a></li>
            <li><a href='#' title='offers'>offers</a></li>
          </ul>
        </section>

        <section>
          <h3>Resources</h3>
          <ul>
            <li><a href='#' title='Support'>Support</a></li>
            <li><a href='#' title='Sitemap'>Sitemap</a></li>
            <li><a href='#' title='Help Center'>Help Center</a></li>
          </ul>
        </section>
        <section>
          <h3>Company</h3>
          <ul>
            <li><a href='#' title='Blog'>Blog</a></li>
            <li><a href='#' title='About Us'>About Us</a></li>
            <li><a href='#' title='Careers'>Careers</a></li>
            <li><a href='#' title='Contact'>Contact</a></li>
          </ul>
        </section>
        <section>
          <h3>Legal</h3>
          <ul>
            <li><a href='#' title='Terms and services'>Terms</a></li>
            <li><a href='#' title='Privacy policy'>Privacy</a></li>
            <li><a href='#' title='Licenses'>Licenses</a></li>
          </ul>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <ul>
            <li><a href="#" title='Instagram'><Instagram /></a></li>
            <li><a href="#" title='LinkedIn'><LinkedIn /></a></li>
            <li><a href="#" title='Twitter'><Twitter /></a></li>
            <li><a href="#" title='Youtube'><YouTube /></a></li>
            <li><a href="#" title='Github'><GitHub /></a></li>
          </ul>
        </div>
        <small>�� 2022 The Front. All rights reserved.</small>
      </div>
  
    </div>
    

    </>
  )
}

export default Footer
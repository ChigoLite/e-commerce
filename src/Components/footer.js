import { Box } from '@mui/material';
import React from 'react';
import {FaFacebook,FaWhatsapp, FaLinkedin}from 'react-icons/fa'

const Footer = () => {
  return (
  
      <>
          <div className="footer">
                <div className="footer-info">
<button>privacy and policy</button>
<button>settings</button>
<button>terms and services</button>
        
<button>visit us</button>
<button>our blog</button>
      </div>
      <div className="social">
        <a href="#"><FaFacebook className='fb'/></a>
        <a href="#"><FaWhatsapp className='gb'/></a>
        <a href="#"><FaLinkedin className='lin'/></a>
      
      </div>
      <h4 className='copyright'>&copy; nelsonLite</h4>
        </div>
      </>
  )
}

export default Footer;
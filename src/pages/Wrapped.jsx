import React from 'react'
import './wrapped.css'
import logo from '../assets/coming-soon/Frame_10.svg'
import { Link } from "react-router-dom";
import { div } from 'framer-motion/client';

export default function () {
  return (
    <div style={{height:"100%",width:"100%"}}>
    <div className='wrapped_container'>
    <div className="wrapped_logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
              </div>
    <div className='wrapped_box'>
        
        <div className='text_'>
        Prometeo’24 is wrapped <br /> we’re coming soon!
        </div>
    </div>
    </div>
    </div>
  )
}
 
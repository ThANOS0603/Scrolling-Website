"use client"
import React from 'react'
import './Background.css';
import ScrollAnimation from './script';


const Header = () => {
  return (
    <section className='parallax' > 
    {/* Render ScrollAnimation component */}
    <ScrollAnimation />
   
       
      <div id='text' className= 'text text-5xl font-extrabold text-[#181818]' >
            Parallax Website
         </div>      
         <img  src='/images/grass.png' id='grass'/>
         <img  src='/images/gate-left.png' id='gateleft'/>
         <img  src='/images/gate-right.png' id='gateright'/>
         <img  src='/images/tree-left.png' id='treeleft'/>
         <img  src='/images/tree-right.png' id='treeright'/>
      
      
     </section> 
     
  )
}

export default Header

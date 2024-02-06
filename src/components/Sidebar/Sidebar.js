import React from 'react'
import Categories from './Categories/Categories'; 
import Price from './Price/Price'; 
import Colors from './Colors/Colors'; 
import "./Sidebar.css"

function Sidebar({  }) {
  return (
    <section className="sidebar">
    <div className='logo-container'>
     <h1>🛒</h1>
      </div>
      <Categories/>
      <Price/>
      <Colors/>
    </section>
  )
}

export default Sidebar
import React from 'react'
import './Categories.css'

function Categories({handleChange}) {
  return (
    <div>
     <h2 className="sidebar-title">Category</h2>
    <div>
        <label htmlFor="" className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All 
        </label>
        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Sneakers 
        </label>
        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Flats 
        </label>
        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Sandals 
        </label>
        <label htmlFor="" className="sidebar-label-container">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Heels 
        </label>
    </div>
    </div>
  )
}

export default Categories
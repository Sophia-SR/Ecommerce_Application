import React from 'react'; 
import Input from '../../Input'; 
import './Colors.css';

function Colors({handleChange}) {
  return (
    <>
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value="" name="test1"/>
      <span className="checkmark-all"></span>
      All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
          color="black"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="black"
        title="black"
        name="test1"
        color="white"
      />
      <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
            ></span>
            White
        </label>
    </div>
    </>
  )
}

export default Colors
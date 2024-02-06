import React from 'react'
import Input from '../../Input'
import './Price.css';

function Price({handleChange}) {
  return (
    <>
    <div className='ml'>
        <h2 className='sidebar-title price-title'/>

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

    </div>
    </>
  )
}

export default Price
import React from 'react'


const Footer = (props) => {
    
  return (
    <>
      <div className='footer'> 
      <button onClick={props.incrementCount}> Increment </button>
      <p> Counter: {props.counter}</p>
      </div>
    </>
  )
}

export default Footer

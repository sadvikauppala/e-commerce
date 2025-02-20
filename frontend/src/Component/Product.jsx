import React from 'react'

function Product({name,image,description,price}) {
  return (
    <div>
        <img src={image} alt={name} />
        <div >
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
        <div>
        <p>{description}</p>

        </div>
    </div>
  )
}

export default Product
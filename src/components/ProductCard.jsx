import React from 'react'

const ProductCard = ({product}) => {
    const {title,price,image} = product;
  return (
    <div className='product-card'>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p className="price">${price}</p>
   
    </div>
  )
}

export default ProductCard;
import React from 'react'
import { Link } from 'react-router-dom'
function Products(props) {
    console.log(props)
    return (
        <div className='row'>
            {props.products.map(product => (
                <div className="blog-preview col-md-4" key={product.id} >
                    <Link to={`/product/${product.id}`}>
                        <img alt="" width="100" height="100" src={product.image} />
                        <h2>{product.title}</h2>
                        <p>{product.category}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Products


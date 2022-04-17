import React from 'react'       
function Products(props) {
    console.log(props)
    return (
        <div className='container-fluid justify-content-center row'>
            {props.products.map(product => (
                <div className="card col-md-3 m-2" style={{height:"35vh"}}  key={product.id}>
                    <img src={product.image} class="card-img-top mx-auto" style={{width:'10em',height:"10em"}} alt="..." />
                    <div class="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.category}</p>
                        <a href={`/product/${product.id}`} class="btn btn-primary">Show Product</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products


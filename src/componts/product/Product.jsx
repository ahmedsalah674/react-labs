import React from 'react'
import { useParams } from 'react-router-dom'
// import useFetch from '../use-fetch/useFetch';
import { useState, useEffect } from 'react'
import Spin from '../spin/Spin';


function Product() {
  const { id } = useParams();
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)

      .then(res => {
        if (!res.ok) // for check the response is full with data or not 
        { throw Error("There is no data (couldnt fetch the data)"); }
        return res.json();
      })

      .then(data => {
        setLoading(false)
        setData(data)
        setErr(null)
      })

      .catch((error) => {
        setLoading(false)
        setData(null)
        setErr(error.message)
      }) // for  connection failed
  });
  return (
    <div className="blog-details">
      {loading && <Spin />}
      {err && <div>{err}</div>}
      {data && (
        <article>
          <img alt="" width="200" height="200" src={data.image} />
          <h2>{data.title}</h2>
          <p>{data.category}</p>
          <div>{data.description}</div>
        </article>
      )}
    </div>
  )
}

export default Product

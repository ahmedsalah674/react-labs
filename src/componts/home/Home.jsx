//import React ,{useState , useEffect} from 'react'
import Products from '../products/Products';
// import useFetch from '../use-fetch/useFetch';
import { useState, useEffect } from 'react'
import Spin from '../spin/Spin';

function Home() {
    // const { data, err, loading } = useFetch('https://fakestoreapi.com/products');
    const [data, setData] = useState(null)
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
  
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
  
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
    console.log(data)
    return (
        <div className='home'>
            {loading && <Spin/>}
            {err && <div>{err}</div>}
            {data && <Products products={data} />}
        </div>
    )
}


export default Home

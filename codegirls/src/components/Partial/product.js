import {useEffect, useState} from 'react';
import axios from 'axios';
const Product = () => {
  let [data,setData] = useState([]);
  const getProduct = () => {
    
}
useEffect(()=>{
  axios.get('http://localhost:8000/view')
    .then(function (response) {
      console.log(response)
      setData(response.data)
    })
  getProduct();
},[])


return (
    
  <>
  <h1>aABDD</h1> {data && data && data.map((e,index)=>{
    
    return(
      <h2>{e.name}</h2>
    )
  })}
  </>
);
  };


export default Product;
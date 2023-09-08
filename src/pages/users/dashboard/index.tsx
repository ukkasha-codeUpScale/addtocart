import React,{useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function Dashboard() {

  const router = useRouter()
  const [orders, setOrders] = useState([]);
  const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjk0MDg0MzIwLCJleHAiOjE2OTY2NzYzMjB9.dZUi0IXzwisW1PxOlajhFFv7o4TYdaFSFTKTFnk5iUM';

  useEffect(() => {
    const apiUrl = 'http://localhost:1337/api/orders';

    axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(response => {
      const data = response.data;
      setOrders(data);
      console.log("Orders from Strapi",data)
    })
    .catch(error => {
      console.error('Error fetching orders:', error);
    });
  }, []);


  
  
  
  
  
  useEffect(() =>{
      try {
        const token = localStorage.getItem("Token")  
        console.log("JWT token  ========",token) 
        if(!token)
        {
          router.push('/login')
        }
      } catch (error) {
          console.log(error,"Error while verifying the jwt")
      }

  },[])





  return (
    <div className='text-black'>Dashboard</div>
  )
}

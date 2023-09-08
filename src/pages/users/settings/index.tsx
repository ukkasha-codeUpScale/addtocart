import React, { useEffect } from 'react'
import { useRouter } from 'next/router';


export default function AccountSettings() {
  const router = useRouter()

  useEffect(() =>{
      try {
        const token = localStorage.getItem("Token")   
      
        if(!token)
        {
          router.push('/login')
        }
      } catch (error) {
          console.log(error,"Error while verifying the jwt")
      }

  },[])

  return (
    <div>AccountSettings</div>
  )
}

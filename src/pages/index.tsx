import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Grid from '@/pages/postsGrid'
import { ApiDataEntity } from '@/models/data/apidata.entity' 
import { useEffect } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }:{data:ApiDataEntity}) {




  console.log(data,"============")
  return (
   <div> 
    <Grid items={data}/>
   </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://fakestoreapi.com/products/`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}


// export async function getServerSideProps() {
//   // Retrieve data from the database
//   const data = await new Promise((resolve, reject) => {
//     db.all('SELECT * FROM users', (err:any, rows:any) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(rows);
//     });
//   });
// console.log(data)
//   return {
//     props: {
//       data,
//     },
//   };
// }
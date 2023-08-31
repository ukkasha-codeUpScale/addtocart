import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Grid from '@/pages/postsGrid'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }:any) {
  console.log(data,"============")
  return (
   <div>
    <h4>All items</h4>
    <hr className='w-20 bg-gray-600'/>
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

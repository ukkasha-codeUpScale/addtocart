import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Grid from '@/pages/postsGrid'
import { ApiDataEntity } from '@/models/data/apidata.entity' 


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

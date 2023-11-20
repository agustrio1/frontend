
import { Inter } from 'next/font/google'
import Product from './products'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Head>Home</Head>
    <Product/>
   </div>
  )
}

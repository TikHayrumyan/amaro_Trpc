import {Header} from "./Header"
import { Inter } from 'next/font/google'
import Head from "next/head"
import React, { ReactNode } from 'react'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children ,title } : {
  children : ReactNode,
  title : string
}) {
  return (
    <>
        <Head>
        <title>{`Amaro ${title}`}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className={inter.className} suppressHydrationWarning={true} >
        <Header/>
        {children}
      </div>
    </>
  )
}

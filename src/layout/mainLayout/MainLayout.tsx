import { HeadHtml, Header } from '@/components'
import React from 'react'

type Prop = {
    title?:string,
    children: React.ReactNode
}

function MainLayout({title,children}:Prop) {
  return (
    <>
        <HeadHtml title={title} />
        <Header />
        {children}
    </>
  )
}

export default MainLayout
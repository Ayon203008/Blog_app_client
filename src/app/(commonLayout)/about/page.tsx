"use client"
import { getBlogs } from '@/actions/blog.action'
import React, { useEffect, useState } from 'react'

export default function AboutPage() {

  const [data, setData] = useState<unknown>(null)

  console.log(data)
  useEffect(()=>{
    (async()=>{
      const {data}= await getBlogs()
      setData(data)
    })()
  },[])
  return (
    <div> This is about page </div>
  )
}

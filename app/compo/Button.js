"use client"

import { useRouter } from 'next/navigation';

import React from 'react'

function Button({children}) {
    let router = useRouter();
    function handleClick(){
        router.push("/products/featured")
    }
  return (
    <button onClick={handleClick} className='bg-yellow-400 p-3'>{children}</button>
  )
}

export default Button

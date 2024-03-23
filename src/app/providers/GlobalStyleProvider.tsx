"use client";

import React from 'react'

interface Props
{
    children: React.ReactNode;
}

function GlobalStyleProvider({children} : Props) {
  return (
    <div className='bg-red-100 p-10 flex gap-2.5 '>
    {children}
    </div>
  )
}

export default GlobalStyleProvider
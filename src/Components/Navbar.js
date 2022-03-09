import React from 'react'

export default function Navbar() {
  return (
    <nav className='Flex justify-between items-center h-16 bg-green text-white relative shadow-sm'> 
    <link to="/" className='p1-8'> DOTER LOGO </link>

<div className='px-4 cursor-pointer md:hideen'></div>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
    </nav>
  )
}
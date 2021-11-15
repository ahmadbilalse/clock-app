import React from 'react'

export default function Clock() {
  return (
    <div>
      <p className="tracking-widest flex">
        <span className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg></span>
        GOOD MORNING, IT'S</p>
      <p className="font-semibold text-7xl my-2 sm:text-big lg:text-biggest">11:23<span className="font-normal text-base align-baseline ml-2 sm:text-4xl">BST</span></p>
      <p className="font-semibold tracking-widest">IN LONDON, UK</p>
    </div>
  )
}

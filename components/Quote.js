import React from 'react'

export default function Quote() {
  return (
    <div className="flex items-start max-w-xl">
      <div>
        <p className="leading-loose">"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value."</p>
        <p className="mt-2 font-bold">Ada Lovelace</p>
        <button></button>
      </div>
      <button className="animate-reverse-spin ml-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg></button>
    </div>
  )
}

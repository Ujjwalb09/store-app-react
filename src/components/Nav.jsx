import React from 'react'

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center p-5">
    <a
      className="py-2 border rounded border-blue-200 px-5 text-blue-500"
      href="/create"
    >
      Add new product
    </a>
    <hr className="w-[80%] m-5" />
    <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
    <ul className="w-[80%]">
      <li className="mb-3 flex items-center">
        <span className="bg-blue-200 w-[15px] h-[15px] mr-2 rounded-full"></span>
        cat 1
      </li>
      <li className="mb-3 flex items-center">
        <span className="bg-red-200 w-[15px] h-[15px] mr-2 rounded-full"></span>
        cat 1
      </li>
      <li className="mb-3 flex items-center">
        <span className="bg-green-200 w-[15px] h-[15px] mr-2 rounded-full"></span>
        cat 1
      </li>
    </ul>
  </nav>
  )
}

export default Nav
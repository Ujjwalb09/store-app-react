import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [categories, setcategories] = useState([]);

  const [products] = useContext(ProductContext);

 useEffect(()=>{

  const uniqueCategories = products
      ? products.reduce((acc, product) => {
          if(!acc.includes(product.category)){
            acc.push(product.category)
          }
          return acc;
        }, []) : []

    setcategories(uniqueCategories);

 }, [products])


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
        {categories.map((category, index) => (
          <li key={index} className="mb-3 flex items-center">
            <span className="bg-blue-200 w-[15px] h-[15px] mr-2 rounded-full"></span>
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

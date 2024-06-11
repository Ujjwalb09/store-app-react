import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [categories, setcategories] = useState([]);

  const [products] = useContext(ProductContext);

  useEffect(() => {
    const uniqueCategories = products
      ? products.reduce((acc, product) => {
          if (!acc.includes(product.category)) {
            acc.push(product.category);
          }
          return acc;
        }, [])
      : [];

    setcategories(uniqueCategories);
  }, [products]);

  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.4)`;
  }

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
          <NavLink
            className={(e) => {
              return [
                e.isActive ? "text-red-400 font-bold" : "",
                "mb-3",
                "flex",
                "items-center",
                "hover:text-red-400",
              ].join(" ");
            }}
            key={index}
            to={`/home/${category}`}
          >
            <span style={{
              background: color()
            }} className="} w-[15px] h-[15px] mr-2 rounded-full"></span>
            {category}
          </NavLink>
        ))}
      </ul>

      <Link to="/" className="bg-blue-500 rounded-md px-3 py-2 text-white mt-5">
        Remove Filter
      </Link>
    </nav>
  );
}

export default Nav;

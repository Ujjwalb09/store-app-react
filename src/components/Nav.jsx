import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav({ category }) {
  const [categories, setcategories] = useState([]);

  // const [products] = useContext(ProductContext);

  const products = useSelector((state) => state.products.value);

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
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center p-5">
      <Link
        to="/create"
        className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-700 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <span>Add a new product</span>
      </Link>

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
            <span
              style={{
                background: color(),
              }}
              className="} w-[15px] h-[15px] mr-2 rounded-full"
            ></span>
            {category}
          </NavLink>
        ))}
      </ul>

      {category && (
        <Link
          to="/"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
        >
          Remove Filter
        </Link>
      )}
    </nav>
  );
}

export default Nav;

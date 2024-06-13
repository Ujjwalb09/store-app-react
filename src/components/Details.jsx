import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [products] = useContext(ProductContext);

  const product = products
    ? products.find((product) => product.id == id)
    : null;

  return !product ? (
    <Loading />
  ) : (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%] relative">
      <Link
        onClick={() => navigate(-1)}
        className="absolute left-1 top-20 w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-700 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </Link>

      <img
        className="object-contain h-[80%]  w-[40%]"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[50%]">
        <h1 className="text-4xl mb-3">{product.title}</h1>
        <h3 className="text-zinc-400 mb-3">{product.category}</h3>
        <h2 className="text-red-300 mb-3">{`$ ${product.price}`}</h2>
        <p className="mb-6">{product.description}</p>
        <Link className="mr-5 py-2 border rounded border-blue-200 px-5 text-blue-500">
          Edit
        </Link>
        <Link className="py-2 border rounded border-red-200 px-5 text-red-500">
          Delete
        </Link>
      </div>
    </div>
  );
}

export default Details;

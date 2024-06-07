import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();

  const [products] = useContext(ProductContext);

  console.log(products);

  const product = products ? products.find((product) => product.id == id) : null;

  return !product ? <Loading/> : (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
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

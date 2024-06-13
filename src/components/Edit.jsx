import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);

  const { id } = useParams();

  //   const [product, setProduct] = useState();

  const product = products && products.find((product) => product.id == id);

  const navigate = useNavigate();

  const [title, setTitle] = useState(product.title);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const saveProduct = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.toString().trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Cannot save an empty field");
      return;
    }

    const updatedProduct = {
      id,
      title,
      image,
      category,
      price,
      description,
    };

    const updatedProducts = products.map((p) =>
      p.id === product.id ? updatedProduct : p
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate(-1);
  };

  return (
    <form
      onSubmit={(e) => {
        saveProduct(e);
      }}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <Link
        onClick={() => navigate(-1)}
        className="absolute left-40 top-12 w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-700 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
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

      <h1 className="mb-5 w-1/2 text-3xl">Edit product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="enter product description here..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows={10}
      ></textarea>

      <button className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-700 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 mt-6">
        Save
      </button>
    </form>
  );
};

export default Edit;

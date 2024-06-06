import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products, setProduct] = useContext(ProductContext);

  return (
    <>
      {!products ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-6 overflow-x-hidden overflow-y-auto">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/details/${product.id}`}
                className="card p-3 border shadow rounded w-[18%] h-[30vh] flex-col flex justify-center items-center"
              >
                <div
                  className="hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>
                <h1 className="hover:text-red-400">{product.title}</h1>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;

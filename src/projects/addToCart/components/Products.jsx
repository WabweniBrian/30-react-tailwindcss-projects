import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { addToCart, rateProduct } from "../features/cartSlice";

const Products = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRating = (id, rating) => {
    dispatch(rateProduct({ id, rating }));
  };

  return (
    <div className="product-grid mt-4 grid grid-cols-minmax-uto gap-4 p-6">
      {products.map((product) => {
        const { id, name, price, img, rating } = product;
        return (
          <div
            className="card shadow-normal rounded-lg bg-white height-350 p-2"
            key={id}
          >
            <div className="cursor-pointer h-[200px] overflow-hidden group">
              <img
                src={img}
                alt={name}
                className="object-cover w-full h-full group-hover:scale-110 transition-a "
              />
            </div>
            <div className="text-center mt-2">
              <h1 className="text-lg capitalize">{name}</h1>
              <div className="flex justify-center gap-2 mt-2 text-slate-500 sm:cursor-pointer">
                {Array.apply(null, { length: 5 }).map((element, i) => (
                  <FaStar
                    onClick={() => handleRating(id, i + 1)}
                    key={i + 1}
                    className={`${rating > i && "text-yellow-500"}`}
                  />
                ))}
              </div>
              <h1 className="text-xl my-2 text-yellow-500">${price}</h1>
              <button
                className="px-5 py-1 bg-yellow-500 text-white rounded-full transition-a hover:bg-yellow-600"
                onClick={() => dispatch(addToCart(product))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;

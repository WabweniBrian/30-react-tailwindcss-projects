import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  closenModal,
  removeItem,
  toggleAmount,
} from "../features/cartSlice";

const Cart = () => {
  const { totalAmount, cartItems, isModalOpen } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div
      className={`cart-modal fixed w-screen h-screen top-0 left-0 bottom-0 right-0 z-50 bg-black/50 opacity-0 pointer-events-none transition-a ${
        isModalOpen && "open"
      }`}
      onClick={(e) => {
        if (e.target.classList.contains("cart-modal")) dispatch(closenModal());
      }}
    >
      <div
        className={`cart-dialog p-4 max-w-[400px] h-full w-full bg-white absolute right-0 top-0 translate-x-[120%] transition-a ${
          isModalOpen && "open"
        }`}
      >
        <div className="flex-center-between px-4 border-b">
          <div
            className="close-icon cursor-pointer"
            onClick={() => dispatch(closenModal())}
          >
            <i className="feather-arrow-left"></i>
          </div>
          <h1 className="text-muted text-lg pr-4">
            Subtotal:{" "}
            <span className="text-25 text-yellow-500">
              ${totalAmount.toFixed(2)}
            </span>
          </h1>
        </div>

        {cartItems.length <= 0 && (
          <div className="flex flex-col h-full">
            <img
              src="/images/products/market.png"
              alt=""
              className="opacity-80"
            />
            <h1 className="text-3xl opacity-60 capitalize text-center">
              your cart is empty
            </h1>
          </div>
        )}

        {/* <!-- CART ITEM LIST --> */}
        <div className="cart-items-list mt-8 h-[80vh] overflow-auto">
          {cartItems.map((cartItem) => {
            const { id, name, price, img, quantity } = cartItem;
            return (
              <div
                className="cart-item flex-center-between gap-4 px-4 py-2 overflow-hidden cursor-pointer relative border-b"
                key={id}
              >
                <div className="h-20 w-20">
                  <img
                    src={img}
                    alt={name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-muted capitalize">{name}</h1>
                  <h1 className="warning-color text-20 mt-1">${price}</h1>
                  <p
                    className="text-yellow-500 hover:text-yellow-600 transition-a"
                    onClick={() => dispatch(removeItem(id))}
                  >
                    Remove
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    className="btn-circle"
                    onClick={() =>
                      dispatch(toggleAmount({ id, type: "increase" }))
                    }
                  >
                    <i className="feather-chevron-up"></i>
                  </button>
                  <button className="btn-circle">{quantity}</button>
                  <button
                    className=" btn-circle"
                    onClick={() =>
                      dispatch(toggleAmount({ id, type: "decrease" }))
                    }
                  >
                    <i className="feather-chevron-down"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* <!-- Clear Cart Items --> */}
        {cartItems.length && (
          <div className="text-center absolute bottom-0 border-t w-full left-0 px-4 pt-2 pb-2">
            <button
              className="px-5 py-1 bg-yellow-500 hover:bg-yellow-600 transition-a text-white rounded-md"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

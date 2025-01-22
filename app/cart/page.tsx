"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CartItemComponent from "../components/CartItem";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector((state: RootState) => state.cart); 

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <>
          <CartItemComponent /> 
          
          <div className="flex justify-end mt-4">
            <div className="text-xl font-semibold">
              <p className="mb-2">Total: <span className="text-orange-600">{totalPrice}</span></p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
          <p className="border-[1px] border-orange-600 w-full p-2 text-center">
            Your cart is currently empty
          </p>
          <Link href="/">
            <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
              Return to Shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

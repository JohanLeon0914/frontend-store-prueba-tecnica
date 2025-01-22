"use client";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";  
import toast, { Toaster } from "react-hot-toast";
import { Product } from "../types/product";

interface ProductProps {
  product: Product;  
}

const SingleProduct = ({ product }: ProductProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));  
    toast.success(`${product?.name.substring(0, 15)} added successfully!`);  
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div>
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{product?.name}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={product?.price} />
          </p>
        </div>
        <p>{product?.detail}</p> 
        <div 
          onClick={handleAddToCart}
          className="flex items-center cursor-pointer group"
        >
          <button className="bg-slate-800 text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            add to cart
          </button>
          <span className="bg-slate-800 text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;

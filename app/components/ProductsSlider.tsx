/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Slider from "react-slick";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import ProductData from "./ProductData";
import { Product } from "../types/product";

interface Props {
  products: Product[];
}

const ProductsSlider = ({ products }: Props) => {

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {products.map((product: Product) => (
          <div key={product.id}>
            <ProductData item={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsSlider;

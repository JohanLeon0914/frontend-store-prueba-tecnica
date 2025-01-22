"use client";
import {
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 text-slate-100">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            This is a technical test of an online store that consumes an nodejs
            express api.
          </p>
          <div className="flex items-center gap-x-4">
            <a href="https://github.com/JohanLeon0914" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/johan-alberto-leon-18b688229/"
              target="_blank"
            >
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg">Laset posts</p>
          <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
            <li className="flex flex-col">
              <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">
                Look at our new products
              </span>
              <span className="text-orange-600">January 22, 2025</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg">Links</p>
          <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
            <Link href={"/"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Home
              </li>
            </Link>
            <Link href={"/cart"}>
              <li className="hover:text-orange-500 cursor-pointer duration-200">
                Cart
              </li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

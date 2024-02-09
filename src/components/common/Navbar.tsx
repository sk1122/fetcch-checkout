import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full items-center h-16 justify-between mx-auto bg-white max-w-7xl container px-4">
      <Link href="/">
        <img src={"/logo.svg"} className="w-20 h-fit" alt="site_logo" />
      </Link>
      <ul className="hidden md:flex items-center space-x-8">
        <li className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
          <a href="/about-us">About Us</a>
        </li>
        <li className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
          <a href="https://docs.fetcch.xyz" target="_blank">
            Integrate
          </a>
        </li>

        <li
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text"
        >
          <a href="#">Resources</a>
        </li>

        <div
          id="dropdownHover"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="https://writings.fetcch.xyz"
                target="_blank"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Writings
              </a>
            </li>
            <li>
              <a
                href="/report-with-anq"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Reports
              </a>
            </li>
            <li>
              <a
                href="https://docs.fetcch.xyz/faqs/faqs"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </ul>
      <div></div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";

export default function Navbar() {
  return (
    <div className="flex w-full items-center h-16 justify-between mx-auto bg-white max-w-7xl container px-4">
      <Link href="/">
        <img src={"/logo.svg"} className="w-20 h-fit" alt="site_logo" />
      </Link>
      <ul className="hidden md:flex items-center space-x-8">
        <li className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
          <Link href="https://fetcch.xyz/about-us" target="_blank">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
          <Link href="https://docs.fetcch.xyz" target="_blank">
            Integrate
          </Link>
        </li>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
              Resources
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href={"https://checkout.fetcch.xyz"} target="_blank">Writings</Link>
                </Menubar.Item>
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href="https://fetcch.xyz/report-with-anq" target="_blank">Reports</Link>
                </Menubar.Item>
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href="https://docs.fetcch.xyz/faqs/faqs" target="_blank">FAQs</Link>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
        <Menubar.Root>
          <Menubar.Menu>
            <Menubar.Trigger className="cursor-pointer hover:text-primary duration-300 font-medium text-neutral_text">
              Products
            </Menubar.Trigger>
            <Menubar.Portal>
              <Menubar.Content
                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
                align="start"
                sideOffset={5}
                alignOffset={-3}
              >
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href={"https://t.me/fetcch_request_bot"} target="_blank">
                    Fetcch request bot
                  </Link>
                </Menubar.Item>
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href="https://cctpbridge.io/" target="_blank">CCTP bridge</Link>
                </Menubar.Item>
                <Menubar.Item className="block px-4 py-2 hover:bg-gray-100 cursor-pointer outline-none">
                  <Link href="https://checkout.fetcch.xyz" target="_blank">Checkout</Link>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </ul>
      <div></div>
    </div>
  );
}

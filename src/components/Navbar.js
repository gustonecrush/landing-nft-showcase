import Image from "next/image";
import Link from "next/link";
import React from "react";

const menus = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Browse", href: "/browse" },
  { id: 3, name: "Creators", href: "/creators" },
  { id: 4, name: "Story", href: "/story" },
  { id: 5, name: "Projects", href: "/projects" },
];

function Navbar() {
  return (
    <div className="w-full font-raleway">
      <div className="max-w-7xl mx-auto py-8 px-20 flex justify-between items-center">
        <Image
          src="/logo_nft_showcase.png"
          width={150}
          height={50}
          alt="NFT Showcase's Logo"
        />

        <div className="flex items-center space-x-12">
          <ul className="list-none flex font-[400] space-x-12 items-center">
            {menus.map((menu, index) => (
              <li key={index} className="text-text">
                <Link href={menu.href}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src="/icons/ic_search.svg"
                width={45}
                height={45}
                alt="NFT Showcase's Logo"
              />
            </Link>

            <Link
              href="/"
              className="bg-btn_primary rounded-full text-text_btn_primary py-[13px] w-[130px] text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

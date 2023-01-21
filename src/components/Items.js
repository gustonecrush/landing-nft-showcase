import Image from "next/image";
import Link from "next/link";
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const items = [
  { id: 1, name: "Lego Super", et: 69, creator: "@domo", img: "nft_1.png" },
  { id: 2, name: "Tiger Scout", et: 12, creator: "@shadam", img: "nft_2.png" },
  { id: 3, name: "Dota State", et: 51, creator: "@goben", img: "nft_3.png" },
  { id: 4, name: "Mega Crypto", et: 88, creator: "@ethe", img: "nft_4.png" },
];

function Items() {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 800,
    });
  });

  return (
    <div className="w-full mb-28">
      <div class="max-w-7xl mx-40 flex flex-col">
        <article class="flex flex-col mb-8">
          <h1 className="font-badScript font-[400] text-[25px] text-heading_decoration">
            Collect Now
          </h1>
          <p className="text-heading font-raleway text-[26px] font-bold">
            Similar Items
          </p>
        </article>
        <div class="max-w-7xl space-x-14 text-text flex flex-row items-center justify-evenly">
          {items.map((item, index) => (
            <Link
              href={`/${item.name}`}
              key={index}
              className="flex flex-col space-y-6 group"
              data-aos="zoom-in-up"
              data-aos-duration={500 * item.id}
            >
              <span className="">
                <Image
                  className="rounded-[24px] group-hover:scale-105 transition-all z-100"
                  src={`/nfts/${item.img}`}
                  width={295}
                  height={438}
                  alt={item.name}
                />
              </span>
              <article className="flex flex-col group-hover:animate-pulse">
                <h1 className="font-raleway text-sub_heading font-[600] text-[20px]">
                  {item.name}
                </h1>
                <p className="font-poppins text-text font-[400] text-base">
                  {item.creator}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Items;

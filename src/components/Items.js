import Image from "next/image";
import Link from "next/link";
import React from "react";

const items = [
  { name: "Lego Super", et: 69, creator: "@domo", img: "nft_1.png" },
  { name: "Tiger Scout", et: 12, creator: "@shadam", img: "nft_2.png" },
  { name: "Dota State", et: 51, creator: "@goben", img: "nft_3.png" },
  { name: "Mega Crypto", et: 88, creator: "@ethe", img: "nft_4.png" },
];

function Items() {
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
              className="flex flex-col space-y-6"
            >
              <span>
                <Image
                  className="rounded-[24px]"
                  src={`/nfts/${item.img}`}
                  width={295}
                  height={438}
                  alt={item.name}
                />
              </span>
              <article className="flex flex-col">
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

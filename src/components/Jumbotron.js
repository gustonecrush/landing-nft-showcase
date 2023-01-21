import Image from "next/image";
import Link from "next/link";
import React from "react";

function Jumbotron() {
  return (
    <div class="w-full relative z-20">
      <div className="bg-background text-red-300 mt-[25vh] pb-52">
        <div class="mx-40 max-w-7xl flex items-center justify-between flex-row font-raleway">
          <div class="flex flex-col space-y-11 w-5/12 leading-[32px]">
            <h1 className="text-heading text-[55px] font-bold">Space Time</h1>
            <p class="text-text font-poppins">
              Projek yang dibangun untuk memberikan sebuah motivasi kuat kepada
              manusia dalam proses tercapainya antar galaxy multi univ.
            </p>
            <article className="flex flex-row items-center space-x-3 text-text font-poppins">
              <p>Latest Price: </p>
              <span className="bg-label rounded-full py-[7px] px-6 flex flex-row space-x-1 text-text_label font-bold">
                <Image
                  src="/icons/ic_nft.svg"
                  width={13}
                  height={19.49}
                  alt="NFT's Icon"
                />
                <p>52</p>
              </span>
            </article>
            <Link href="/" className="flex flex-row items-center space-x-4">
              <span className="rounded-full border-text border p-2">
                <Image
                  src="/user.png"
                  width={60}
                  height={60}
                  alt="The Creators's Image"
                  className="rounded-full object-cover"
                />
              </span>

              <article className="flex flex-col">
                <h1 className="font-raleway text-[20px] text-sub_heading font-[600]">
                  Farhan Augustiansyah
                </h1>
                <p className="font-poppins text-text text-[16px] font-[400]">
                  @farhantsyh
                </p>
              </article>
            </Link>

            <span className="flex flex-col relative">
              <Link
                href="/"
                className="w-fit hover:scale-105 transition-all rounded-full bg-btn_secondary z-20 text-text_btn_secondary font-raleway font-bold text-[20.36px] py-[17px] px-16"
              >
                Bid Now
              </Link>
              <span className="bg-btn_secondary absolute top-3 left-3 z-10 w-[190.91px] h-[57.27px] blur-[19.0909px] rounded-full opacity-[0.5]"></span>
            </span>
          </div>

          <span className="flex flex-col relative">
            <Image
              src="/hero_image.png"
              width={596}
              height={690}
              alt="Hero's Image"
              className="rounded-[60px] z-10"
            />
            <span className="bg-[#194F9B] absolute -bottom-4 left-3 z-10 w-[510px] h-[57.27px] blur-[50px] rounded-full opacity-[0.5]"></span>
          </span>
        </div>

        <Image
          src={"/hero_decoration.png"}
          height={1406.97}
          width={934.22}
          alt="Hero's Decoration"
          className="absolute right-0 top-60 animate-pulse"
        />
      </div>
    </div>
  );
}

export default Jumbotron;

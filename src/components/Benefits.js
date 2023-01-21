import Image from "next/image";
import React from "react";

const benefits = [
  {
    name: "Huge Traffic",
    desc: "We provide millions visitor only for your great art",
    icon: "/icons/ic_traffic.svg",
  },
  {
    name: "Cheap Price",
    desc: "Listing your artwork with our friendly pricing",
    icon: "/icons/ic_cheap.svg",
  },
  {
    name: "No Limits",
    desc: "Your artwork always available forever",
    icon: "/icons/ic_limit.svg",
  },
];

function Benefits() {
  return (
    <div className="w-full mb-28">
      <div class="flex mx-40 flex-col justify-center items-center">
        <h1 className="font-poppins font-[400] text-[25px] ml-16 text-heading_decoration mb-16">
          Boosting Your Collection
        </h1>
        <div class="max-w-7xl space-x-40 text-text flex flex-row items-center justify-center">
          {benefits.map((benefit, index) => (
            <div class="flex flex-col space-y-6 items-center justify-center">
              <Image
                src={benefit.icon}
                alt={benefit.name}
                width={70}
                height={70}
              />

              <article className="flex flex-col items-center justify-center">
                <h1 className="font-raleway text-sub_heading font-[600] text-[20px]">
                  {benefit.name}
                </h1>
                <p className="font-poppins text-center text-text font-[400] text-base">
                  {benefit.desc}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;

import React from "react";

export default function Partners() {
  return (
    <>
      <div className=" w-full h-[200px] border-2 my-[800px]">
        <h2 className="text-3xl font-bold text-zinc-600 text-center">
          Our Partners
        </h2>

        <img
          className="w-[1500px] m-auto"
          src={require("../Assets/Images/partner.PNG")}
        ></img>
      </div>
    </>
  );
}

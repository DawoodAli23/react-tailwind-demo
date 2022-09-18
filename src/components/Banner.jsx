import React from "react";

export default function Banner() {
  return (
    <>
      <div className="w-full bg-[#222222b2] h-[757px]  absolute flex flex-row justify-around items-center">
        <div className="h-[650px] w-[700px] ">
          <h1 className="text-white mx-[100px] my-[100px]">
            Home <span>></span> SEO <span>></span> SERVICES
          </h1>
          <h1 className="text-5xl w-[500px] font-bold text-white mx-[100px]">
            Get a Complete Audit and Action Plan with SEO Audit Services.
          </h1>
          <p className="w-[460px] text-white my-[20px] mx-[100px]">
            A thorough SEO audit is the quickest and most efficient way to
            figure out why your website isn't ranking as high as it should. Our
            SEO audit services are entirely transparent and analyze the
            technical, on-page, and off-page SEO of your website. Scroll down
            for more information, or contact us for a personalized proposal!
          </p>

          <form className="flex w-[900px] h-[50px]">
            <input
              placeholder="Enter your website Link"
              className="border-2 w-[350px] h-[50px] mx-[100px] placeholder:text-gray-500 pl-[14px] "
            ></input>
            <button className="border-2 w-[200px] h-[50px] mx-[-80px] bg-black rounded-md">
              <span className="text-white">Send Proposal</span>
            </button>
          </form>
        </div>
        <div className="h-[600px] w-[600px]  inline-block">
          <img src={require("../Assets/Images/Banner-IMG.png")}></img>
        </div>
      </div>
    </>
  );
}

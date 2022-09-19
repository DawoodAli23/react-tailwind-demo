import React from "react";

export default function Audit() {
  return (
    <>
      <div className="w-full h-[900px]">
        <h2 className="text-5xl font-bold text-black text-center my-[-800px]">
          Pricing and Services for SEO Audits
        </h2>
        <p className="text-2xl text-black text-center my-[820px] ">
          Examine our professional SEO audit plans right now. Have any
          questions? Contact us online and <br />a skilled strategist will
          assist you!
        </p>

        <div className="audit-frame h-[700px] w-[470px] m-auto my-[-700px]">
          <div className="audit-head">
            <img
              className="m-auto"
              src={require("../Assets/Images/Star.jpg")}
            ></img>

            <h1 className="text-2xl font-bold text-center my-[30px]">
              MARKETLEADERPLAN
            </h1>
            <h1 className="text-5xl font-bold text-center my-[30px] text-red-700">
              $8,000
            </h1>
            <div className="my-[70px]">
              <div className="h-[40px] flex flex-row">
                <img
                  className=" h-[30px] w-[30px] mx-[50px] "
                  src={require("../Assets/Images/tick.jpg")}
                ></img>
                <h1 className="mx-[-25px] text-xl text-zinc-800">
                  70 pages reviewed
                </h1>
              </div>

              <div className="h-[40px] flex flex-row  my-[10px]">
                <img
                  className=" h-[30px] w-[30px] mx-[50px] "
                  src={require("../Assets/Images/tick.jpg")}
                ></img>
                <h1 className="mx-[-25px] text-xl text-zinc-800">
                  Future site strategy
                </h1>
              </div>

              <div className="h-[40px] flex flex-row my-[10px]">
                <img
                  className=" h-[30px] w-[30px] mx-[50px]"
                  src={require("../Assets/Images/tick.jpg")}
                ></img>
                <h1 className="mx-[-25px] text-xl text-zinc-800">
                  Backlink report
                </h1>
              </div>

              <div className="h-[40px] flex flex-row  my-[10px]">
                <img
                  className=" h-[30px] w-[30px] mx-[50px] "
                  src={require("../Assets/Images/tick.jpg")}
                ></img>
                <h1 className="mx-[-25px] text-xl text-zinc-800">
                  Complete audit report upon completion
                </h1>
              </div>
            </div>

            <div className="bar w-[350px] h-[2px] bg-black m-auto"></div>

            <h1 className="text-2xl text-center my-[20px]">
              30 - Day Duration
            </h1>
            <button className="border-2 w-[230px] h-[73px] bg-black rounded-md mx-[115px]">
              <h2 className="text-white text-2xl font-semibold">
                Send Proposal
              </h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function App() {
  return (
    <>
      <div className="w-[100%] h-full from-[#0A5783] to-[#18A19A] bg-gradient-to-tr relative">
        <h1 className="text-3xl md:text-[3rem] font-[600] font-mono text-[#fff] text-center py-7">
          Check your financial health
        </h1>
        <p className="w-[90%] md:w-[25%] text-[1rem] font-extralight text-[#fff] text-center mx-auto">
          Use WeathoMeter to get a free report card for your finances- within
          minutes!{" "}
        </p>
        <div className="mx-auto w-fit my-3 flex">
          <Link
            href={"/codes"}
            className="bg-[#FB7306] mx-auto px-6 py-3 rounded-3xl text-white font-semibold shadow-md"
          >
            Get Started
          </Link>
        </div>
        <div className="w-full md:w-[80%] flex mx-auto justify-center relative">
          <div className="w-[30%] md:w-[30%] flex flex-col mt-[4rem] ml-2 md:ml-[4rem] align-middle">
            <div className="w-100 my-2 flex">
              <Image
                width={40}
                height={40}
                src="/tick.png"
                alt="aaa"
                className="w-[30px] h-[30px] aspect-square"
              ></Image>
              <div className="border-b-2 pb-6">
                <p className="text-[#fff] text-sm md:text-xl mx-2 font-semibold">
                  Expected Retirement Age
                </p>
              </div>
            </div>
            <div className="w-100 my-2 flex">
              <Image
                width={40}
                height={40}
                src="/tick.png"
                alt="aaa"
                className="w-[30px] h-[30px] aspect-square"
              ></Image>
              <div className="border-b-2 pb-6">
                <p className="text-[#fff] text-sm md:text-xl mx-2 font-semibold">
                  Identify Mistakes
                </p>
              </div>
            </div>
          </div>
          <Image
            width={40}
            height={40}
            src={"/Phone.svg"}
            alt="aaa"
            className="absolute top-20 md:top-[10vh] left-[35%] w-[50%] md:w-[40%]"
            quality={100}
          ></Image>
          <div className="w-[69%] flex flex-col mt-[4rem] align-bottom">
            <div className="ml-[50%]">
              <div className="w-100 my-2 flex">
                <Image
                  width={40}
                  height={40}
                  src="/tick.png"
                  alt="aaa"
                  className="w-[30px] h-[30px] aspect-square"
                ></Image>
                <div className="border-b-2 pb-6">
                  <p className="text-[#fff] text-sm md:text-xl mx-2 font-semibold">
                    Personalised Road Map
                  </p>
                </div>
              </div>
              <div className="w-100 my-2 flex">
                <Image
                  width={40}
                  height={40}
                  src="/tick.png"
                  alt="aaa"
                  className="w-[30px] h-[30px] aspect-square"
                ></Image>
                <div className="border-b-2 pb-6">
                  <p className="text-[#fff] text-sm md:text-xl mx-2 font-semibold">
                    Tips To Improve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          width={40}
          height={40}
          src="/Wave.svg"
          alt="aaa"
          className="w-[100vw] top-[70vh] md:top-[70vh] absolute"
        ></Image>
        <div className="w-[60%] mx-auto z-[10] md:mt-[50vh] relative">
          <h1 className="text-3xl md:text-[3rem] font-[600] font-mono text-[#fff] text-center py-7">
            How it works?
          </h1>
          <Image
            width={40}
            height={40}
            alt="Toolbox"
            src={"/Toolbox.svg"}
            className="w-[500px] md:w-[100%] top-10 md:top-0 absolute mx-auto"
          ></Image>
          <div className="w-[100%] text-center text-white mt-[30%] flex justify-between mx-auto">
            <p className="text-sm md:text-xl w-[32%]">Answer few questions</p>
            <p className="text-sm md:text-xl w-[32%]">
              Register using phone and OTP
            </p>
            <p className="text-sm md:text-xl w-[32%]">
              Get report and personal roadmap
            </p>
          </div>
          <div className="mx-auto z-[10] w-fit my-5 flex">
            <Link
              href={"/codes"}
              className="bg-[#FB7306] mx-auto px-6 py-3 rounded-3xl text-white font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useState } from "react";

export default function Codes() {
  const [code, setCode] = useState("");
  const [ccode, setCcode] = useState("");
  const [responce, setResponce] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const fetchData = async () => {
    try {
      const response2 = await fetch(
        "https://wealthupbackend.vercel.app/getCode",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data2 = await response2.json();
      setCode(data2.code);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkCode = async () => {
    if (ccode.length <= 0) {
      setResponce("Please enter the code");
      return;
    }
    try {
      setLoading(true);
      fetch("https://wealthupbackend.vercel.app/checkCode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: ccode }),
      }).then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
          setStatus("success");
          setLoading(false);
          setResponce(data.message);
        } else if (res.status === 201) {
          setStatus("fail");
          setLoading(true);
          setResponce(data.message);
        } else {
          setStatus("fail");
          setLoading(true);
          setResponce(data.message);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-white text-black h-screen w-full">
      <div className="py-14 px-2 w-full flex flex-col w-40">
        <div className="flex flex-row items-center justify-center">
          <div className="w-64 min-h-10 p-2 rounded-lg bg-gradient-to-tr bg-red-400 from-[#686868] to-[#18A19A] text-white text-2xl text-center">
            {code}
          </div>
          <button
            className="flex"
            style={{ margin: "2rem" }}
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Please enter above code"
            className="border border-gray-500 rounded-lg p-2 mr-2"
            value={ccode}
            onChange={(e) => {
              setCcode(e.target.value);
            }}
          ></input>
          <button
            onClick={() => checkCode()}
            className="bg-secondary hover:bg-[#18A19A] rounded-lg px-3 py-2 text-white"
          >
            Check code
          </button>
        </div>
        <div
          className={
            status === "success"
              ? "text-primary text-center"
              : "text-red-400 text-center"
          }
        >
          {loading ? "Loading..." : responce}
        </div>
      </div>
    </div>
  );
}
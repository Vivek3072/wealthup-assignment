"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Codes() {
  const [code, setCode] = useState("");
  const [ccode, setCcode] = useState("");
  const [responce, setResponce] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const fetchData = async () => {
    try {
      const response2 = await fetch("/api/code", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data2 = await response2.json();
      // console.log(data2, "data2");
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
      setStatus("fail");
      setResponce("Please enter the code");
      return;
    }
    try {
      setLoading(true);
      fetch("/api/codes/use", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: ccode }),
      }).then(async (res) => {
        const data = await res.json();
        // console.log(data);
        if (res.status === 200) {
          setStatus("success");
          setLoading(false);
          setResponce(data.message);
        } else if (res.status === 201) {
          setStatus("");
          setLoading(false);
          setResponce(data.message);
        } else {
          setStatus("");
          setLoading(false);
          setResponce(data.message);
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-white text-black h-screen w-full">
      <Link href="/" className="text-primary text-xl p-5 my-3">
        &larr; Home
      </Link>
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
              ? "text-green-500 text-center"
              : "text-red-400 text-center"
          }
        >
          {loading ? "Loading..." : responce}
        </div>
      </div>
    </div>
  );
}

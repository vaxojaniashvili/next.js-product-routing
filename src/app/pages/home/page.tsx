"use client";
import useFetch from "@/app/hooks/useFetch";
import { DataTypes } from "@/app/types/common";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  const { data: newData, loader } = useFetch(
    `https://fakestoreapi.com/products`
  );
  if (loader) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {newData &&
        newData.map((item: DataTypes) => {
          return (
            <div className="w-[200px]" key={item.id}>
              {loader}
              <h1>{item.title}</h1>
              <Link href={`/pages/home/${item.id}`}>
                <img src={item.image} alt={item.title} />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;

import React from "react";

const productsById = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

const page = async ({ params }: any) => {
  const products = await productsById(params.id);
  return (
    <div className="w-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1>{products.title}</h1>
      <img src={products.image} />
      <h1>{products.price}</h1>
    </div>
  );
};

export default page;

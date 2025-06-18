import React, { useState } from "react";
import products from "../Assets/Date";
import { Link } from "react-router-dom";

export default function Datet() {
  const [filter, setFilter] = useState("all");

  const product =
    filter === "all"
      ? products
      : products.filter((item) => item.category.includes(filter));
  return (
    <div className="mx-8 mt-20 ">
      <div className="flex flex-col sm:flex-row xl:flex-row justify-center gap-4 my-20   ">



         <button
          className=" bg-yellow-500 items-center justify-center rounded-xl border-2 border-yellow-500 px-8 py-3 text-sm font-medium transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center"
          onClick={() => setFilter("all")}
        >
          جميع المستويات
        </button>
        <button
          className="items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
          onClick={() => setFilter("المستوي المبتدئ")}
        >
          مبتدئ
        </button>
        <button
          className="x items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
        
          onClick={() => setFilter("المستوي المتوسط")}
        >
          متوسط
        </button>

        <button
          className="x items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-gray-800 transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 min-w-[200px] text-center border border-yellow-500"
      
          onClick={() => setFilter("المستوي المتقدم")}
        >
          متقدم
        </button>
       
      </div>



















      <div className=" flex flex-col  gap-8 md:grid md:grid-cols-2  xl:grid-cols-4 ">
        {product.map((product) => (
          <a href="#" class="relative block rounded-tr-3xl border border-gray-100 bg-gray-100">
  <span
    class="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-green-700 px-6 py-4 font-medium tracking-widest text-white uppercase"
  >
        {product.category}
  </span>

  <img
    src={product.image2}
    alt=""
    class="h-80 w-full rounded-tr-3xl object-cover"
  />

  <div class="p-4 text-center">
      <strong class="text-xl font-medium text-gray-900"> {product.name} </strong>
    
    <p class="mt-2 text-pretty text-gray-700">
     {product.title} 
    </p>
<Link to={`/courses/${product.id}`}>
    <span
      class="mt-4 block rounded-md border border-indigo-900 bg-yellow-500 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-indigo-900"
    >
      Learn More
    </span>
    </Link>
  </div>
</a>
        ))}
      </div>
    </div>
  );
}



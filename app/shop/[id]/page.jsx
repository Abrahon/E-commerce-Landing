"use client";

import { useState } from "react";
import Image from "next/image";
import Review from "@/Components/Review";
import RelatedProduct from "@/Components/RelatedProduct";
import { useEffect } from "react";
import axios from "axios";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Off White");
  const [data, setData] = useState(null);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Function to fetch data
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('/api/product', {
  //       params: { id:params.id } // Adjust if you're using different props
  //     });
  //     setData(response.data); // Update state with fetched data
  //     console.log(response.data); // Log the data to console

  //   } catch (error) {
  //     console.error("Error fetching data:", error); // Handle errors
  //   }
  // };

  // // Use useEffect to fetch data when component mounts or params change
  // useEffect(() => {
  //   fetchData();
  // }, [params.id]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section: Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative w-full h-96">
            <Image
              src={data?.image}
              alt="White Hoodie"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-4">
            {["/path-to-image1.jpg", "/path-to-image2.jpg", "/path-to-image3.jpg", "/path-to-image4.jpg"].map((src, idx) => (
              <div key={idx} className="relative w-24 h-24 cursor-pointer">
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border border-gray-200"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div>
          <p className="text-purple-600 uppercase font-bold">New Arrival</p>
          <h1 className="text-3xl font-semibold mt-2">White Hoodie</h1>
          <p className="text-xl font-bold text-gray-800 mt-4">BDT 2500</p>

          {/* Ratings */}
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.222 3.764a1 1 0 00.95.691h3.947a1 1 0 01.592 1.81l-3.199 2.323a1 1 0 00-.364 1.118l1.222 3.764a1 1 0 01-1.536 1.118L10 13.848l-3.199 2.323a1 1 0 01-1.536-1.118l1.222-3.764a1 1 0 00-.364-1.118L3.924 8.492a1 1 0 01.592-1.81h3.947a1 1 0 00.95-.691L9.049 2.927z" />
                </svg>
              ))}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.222 3.764a1 1 0 00.95.691h3.947a1 1 0 01.592 1.81l-3.199 2.323a1 1 0 00-.364 1.118l1.222 3.764a1 1 0 01-1.536 1.118L10 13.848l-3.199 2.323a1 1 0 01-1.536-1.118l1.222-3.764a1 1 0 00-.364-1.118L3.924 8.492a1 1 0 01.592-1.81h3.947a1 1 0 00.95-.691L9.049 2.927z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 ml-2">(121 reviews)</p>
          </div>

          {/* Sizes */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Available Size</p>
            <div className="flex gap-4 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border ${
                    selectedSize === size ? "border-purple-600 bg-purple-100" : "border-gray-300"
                  } rounded`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Available Color</p>
            <div className="flex gap-4 mt-2">
              <div
                onClick={() => setSelectedColor("Off White")}
                className={`w-6 h-6 rounded-full bg-gray-200 border ${
                  selectedColor === "Off White" ? "ring-2 ring-purple-600" : "border-gray-300"
                }`}
              ></div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Quantity</p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={handleDecrease}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="w-full bg-purple-600 text-white py-3 rounded">Buy Now</button>
            <button className="w-full border border-purple-600 text-purple-600 py-3 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      

      {/* Review Section */}
      <Review></Review>
      <RelatedProduct></RelatedProduct>
    </div>
  );
}

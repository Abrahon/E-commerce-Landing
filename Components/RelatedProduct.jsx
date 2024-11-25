"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import sharee from '../Assets/Assets/sharee.png'
import hoodie from '../Assets/Assets/hoodie.png'
import plazu from '../Assets/Assets/plazu.png'
import jacket from '../Assets/Assets/jacket.png'


export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      image: sharee, // Correct image path
      title: "Indian Saree",
      price: "BDT 2,300",
    },
    {
      id: 2,
      image: hoodie,
      title: "Hoodie",
      price: "BDT 2,300",
    },
    {
      id: 3,
      image: plazu,
      title: "Plazu",
      price: "BDT 2,300",
    },
    {
      id: 4,
      image: jacket, // Fixed: Removed unnecessary { }
      title: "Jacket",
      price: "BDT 2,300",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      
      <div className="flex justify-between ">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="flex gap-4 ">
        <FaArrowRight className="text-purple-600"></FaArrowRight>
        <FaArrowLeft className="text-purple-600 "></FaArrowLeft>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg py-1 px-2 flex flex-col items-center"
            >
              <Link href={`/product/${product.id}`} passHref>
              <Image
                src={product.image }
                width={300}
                height={300}
                alt={product.title}
                className="mb-4 rounded-lg object-cover"
              />
              </Link>
              <div className="flex justify-between items-center gap-10">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
              <button className="w-full mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        
      </div>

      <button className="mt-6 mx-auto block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        See More
      </button>
    </div>
  );
}

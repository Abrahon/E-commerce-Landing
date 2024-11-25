import Link from "next/link";
import Image from "next/image";
import image1 from '../Assets/Assets/image1.png'
import image2 from '../Assets/Assets/image2.png'
import image3 from '../Assets/Assets/image3.png'
import image4 from '../Assets/Assets/image4.png'
// import image from '../Assets/Assets/image1.png'
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  { id: "1", image: image1, title: "Indian Saree", price: "BDT 2,300", rating: 4 },
  { id: "2", image: image2, title: "Half Sleeve Shirt", price: "BDT 2,300", rating: 5 },
  { id: "3", image: image3, title: "Woman Wearing Sari", price: "BDT 2,300", rating: 3 },
  { id: "4", image: image4, title: "Checkered Shirt", price: "BDT 2,300", rating: 4 },
  { id: "5", image: image1, title: "Indian Saree", price: "BDT 2,300", rating: 4 },
  { id: "6", image: image2, title: "Half Sleeve Shirt", price: "BDT 2,300", rating: 4 },
  { id: "7", image: image3, title: "Woman Wearing Sari", price: "BDT 2,300", rating: 5 },
  { id: "8", image: image4, title: "Checkered Shirt", price: "BDT 2,300", rating: 4 },
];

const BigDeal = () => {
  const fallbackImage = "/placeholder.jpg"; // Use this as a fallback for missing images

  return (
    <div className="container mx-auto px-6 py-8">
      
      <div className="flex justify-between ">
      <h1 className="text-2xl font-bold text-center mb-6">Big Deal</h1>
        <div className="flex gap-4 ">
        <FaArrowCircleRight className="text-purple-600 "></FaArrowCircleRight>
        <FaArrowCircleLeft className="text-purple-600 "></FaArrowCircleLeft>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white py-1 px-2 border rounded-lg shadow-md flex flex-col items-center"
          >
            {/* Product Image */}
            <Link
              href={{
                pathname: `/product/${item.id}`,
                query: { title: item.title, price: item.price, image: item.image },
              }}
            >
              <Image
                src={item.image || fallbackImage}
                width={300}
                height={300}
                alt={item.title}
                className="mb-4 rounded-lg object-cover"
              />
            </Link>
            {/* Product Rating */}
            <div className="flex items-center mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.775 1.4 8.186L12 18.897l-7.334 3.874 1.4-8.186L.135 9.21l8.2-1.192L12 .587z" />
                  </svg>
                ))}
                <span>(50)</span>
            </div>
            <div className="flex justify-between items-center gap-8">
              {/* Product Title */}
            <h2 className=" mb-2 ">{item.title}</h2>

            {/* Product Price */}
            <p className="text-lg font-semibold text-gray-600 mb-2">{item.price}</p>
            </div>

            

            {/* Add to Cart Button */}
           
            <button className="w-full mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                Add to Cart
              </button>
           
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="mt-6 mx-auto block px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
        See More
      </button>
    </div>
  );
};

export default BigDeal;

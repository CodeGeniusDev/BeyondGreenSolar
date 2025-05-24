import React from "react";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const items = [
  {
    id: 3,
    title: "Maximizing Energy Savings with Solar",
    excerpt:
      "Practical strategies to reduce your electricity bills using solar power.",
    date: "2024-03-10",
    category: "Energy Savings",
    slug: "maximizing-energy-savings",
    featuredImage:
      "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg",
  },
  {
    id: 2,
    title: "Installation Tips for Home Solar Systems",
    excerpt:
      "Learn the key considerations for a successful residential solar installation.",
    date: "2024-04-22",
    category: "Installation Tips",
    slug: "home-solar-installation-tips",
    featuredImage:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
  },
];

export default function FifthSection() {
  return (
    <div className="py-20 bg-[#ebebeb]">
      <div className="mb-12 container mx-auto">
        <h4 className="text-center text-sm pb-4 font-bold text-[#333333]">
          Latest <span className="text-[#019D4D]">Blogs</span>
        </h4>
        <h2 className="text-4xl font-bold text-center mb-8 text-[#019D4D]">
          The Dawn of Innovation
        </h2>
        <p className="text-center text-lg text-[#333333]">
          Explore the birth of groundbreaking ideas and inventions.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {items.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-5">
              <div
                className="w-full h-40 bg-cover bg-center rounded-md mb-4 group-hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundImage: `url(${post.featuredImage})`,
                }}
              ></div>
              <h2
                className={`${poppins.className} text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#019D4D] transition-colors`}
              >
                {post.title}
              </h2>
              <p
                className={`${inter.className} text-gray-600 mb-3 line-clamp-2 text-sm`}
              >
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className={`${poppins.className} text-xs text-gray-500`}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span
                  className={`${poppins.className} text-xs bg-[#019D4D]/10 text-[#019D4D] px-2 py-1 rounded-full`}
                >
                  {post.category}
                </span>
              </div>
              <Link href={`/blogs/${post.slug}`}>
                <button
                  className={`${poppins.className} mt-4 w-full bg-[#019D4D] text-white py-2 rounded-md hover:bg-[#019D4D]/80 transition-all duration-300 text-sm font-medium cursor-pointer`}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

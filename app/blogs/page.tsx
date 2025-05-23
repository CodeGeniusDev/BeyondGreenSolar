"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Inter, Poppins } from "next/font/google";
import { motion } from "framer-motion";

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

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  featuredImage: string;
}

const getCategoryIcon = (category: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    "Solar Tech": (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.071 0l-.344.344a2.5 2.5 0 01-3.536 0l-.344-.344z"
        />
      </svg>
    ),
    "Installation Tips": (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.933 12.8a1.363 1.363 0 00.133-.555V5.5A1.5 1.5 0 0010.5 4h-7A1.5 1.5 0 002 5.5v6.75a1.5 1.5 0 001.5 1.5h3.5a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 011.5-1.5h3.5a1.5 1.5 0 001.5-1.5V9"
        />
      </svg>
    ),
    "Energy Savings": (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    default: (
      <svg
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return iconMap[category] || iconMap["default"];
};
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Solar Technology",
    excerpt: "Discover the latest advancements in solar panel efficiency and design.",
    date: "2024-05-15",
    category: "Solar Tech",
    slug: "future-of-solar-technology",
    featuredImage: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
  },
  {
    id: 2,
    title: "Installation Tips for Home Solar Systems",
    excerpt: "Learn the key considerations for a successful residential solar installation.",
    date: "2024-04-22",
    category: "Installation Tips",
    slug: "home-solar-installation-tips",
    featuredImage: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg"
  },
  {
    id: 3,
    title: "Maximizing Energy Savings with Solar",
    excerpt: "Practical strategies to reduce your electricity bills using solar power.",
    date: "2024-03-10",
    category: "Energy Savings",
    slug: "maximizing-energy-savings",
    featuredImage: "https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg"
  },
  {
    id: 4,
    title: "Solar Battery Storage Solutions",
    excerpt: "Explore cutting-edge battery technologies for solar energy storage.",
    date: "2024-02-05",
    category: "Solar Tech",
    slug: "solar-battery-storage",
    featuredImage: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg"
  },
  {
    id: 5,
    title: "Community Solar Projects",
    excerpt: "How local communities are transforming energy production.",
    date: "2024-01-15",
    category: "Energy Savings",
    slug: "community-solar-projects",
    featuredImage: "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg"
  },
  {
    id: 6,
    title: "Emerging Solar Panel Technologies",
    excerpt: "Next-generation solar panel innovations changing the industry.",
    date: "2023-12-20",
    category: "Solar Tech",
    slug: "emerging-solar-technologies",
    featuredImage: "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg"
  },
  {
    id: 7,
    title: "Financing Your Solar Installation",
    excerpt: "Understanding solar financing options and incentives.",
    date: "2023-11-10",
    category: "Installation Tips",
    slug: "solar-installation-financing",
    featuredImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
];

const categories = ["Solar Tech", "Installation Tips", "Energy Savings"];

const BlogPage: React.FC = (): React.JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const postsPerPage = 6;

  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = scrollTop / (docHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || post.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* <Head>
        <title>Solar Insights Blog - Latest Solar News</title>
        <meta
          name="description"
          content="Explore the latest in solar technology, installation tips, and energy savings."
        />
        <meta
          name="keywords"
          content="solar technology, installation tips, energy savings, solar blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head> */}

      <div className="fixed top-0 left-0 w-full z-50">
        <div
          className="h-1 bg-[#019D4D]"
          style={{
            width: `${scrollProgress * 100}%`,
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>

      <div className="relative h-[300px] lg:h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20000ms] hover:scale-110"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-4">
              Blog
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto px-4">
              Explore the latest in solar technology, installation tips, and
              energy savings.
            </p>
            <Link
              href="#blog-posts"
              className="inline-flex items-center mt-6 px-6 py-2 bg-[#019D4D] text-white rounded-lg hover:bg-[#019D4D]/80 transition-colors"
            >
              Explore Post
            </Link>
          </motion.div>
        </div>
      </div>

      <div id="blog-posts" className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2 animate-fade-in">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`
                w-full pl-10 pr-10 py-2 
                bg-white border border-gray-200 
                rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-[#019D4D] 
                focus:border-transparent 
                text-gray-800 placeholder-gray-400 
                transition-all duration-300 
                hover:shadow-sm
              `}
              aria-label="Search blog posts"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#019D4D] transition-colors"
                aria-label="Clear search"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="flex space-x-2 animate-fade-in">
            <button
              onClick={() => setViewMode("grid")}
              className={`
                ${poppins.className} px-4 py-2 rounded-lg text-sm font-medium 
                flex items-center space-x-1 cursor-pointer
                transition-all duration-300 
                ${
                  viewMode === "grid"
                    ? "bg-[#019D4D] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
              aria-label="Grid view"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`
                ${poppins.className} px-4 py-2 rounded-lg text-sm font-medium 
                flex items-center space-x-1 cursor-pointer
                transition-all duration-300 
                ${
                  viewMode === "list"
                    ? "bg-[#019D4D] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
              aria-label="List view"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span>List</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            className={`
              ${isSidebarOpen ? "block" : "hidden md:block"}
              sticky bg-white rounded-lg p-5 shadow-sm animate-slide-in-left
              ${
                isMobile
                  ? "fixed top-16 left-0 w-full h-auto z-40 bg-white p-4 shadow-lg"
                  : "relative"
              }
            `}
          >
            {isMobile && (
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-[#019D4D]"
                onClick={toggleSidebar}
                aria-label="Close sidebar"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            <h3
              className={`${poppins.className} text-xl md:text-2xl font-bold text-gray-900 mb-4`}
            >
              Categories
            </h3>
            <button
              onClick={() => {
                setSelectedCategory("");
                if (isMobile) setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center text-left px-3 py-2 rounded-md 
                transition-all duration-300 cursor-pointer
                ${
                  selectedCategory === ""
                    ? "bg-[#019D4D] text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#019D4D]"
                }
              `}
              aria-label="Show all categories"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className={`${poppins.className} font-medium`}>All</span>
            </button>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(
                    category === selectedCategory ? "" : category
                  );
                  if (isMobile) setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center text-left px-3 py-2 rounded-md 
                  transition-all duration-300 cursor-pointer
                  ${
                    selectedCategory === category
                      ? "bg-[#019D4D] text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-[#019D4D]"
                  }
                `}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                aria-label={`Filter by ${category}`}
              >
                <span className="mr-2">{getCategoryIcon(category)}</span>
                <span className={`${poppins.className} font-medium`}>
                  {category}
                </span>
              </button>
            ))}
          </div>

          <div className="md:col-span-3">
            <div
              className={`
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              `}
            >
              {displayedPosts.length > 0 ? (
                displayedPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className={`
                      relative bg-white rounded-lg shadow-sm group
                      transition-all duration-300 hover:shadow-md hover:-translate-y-1
                      ${viewMode === "list" ? "flex" : ""}
                      animate-slide-in-bottom
                    `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {viewMode === "grid" ? (
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
                          <span
                            className={`${poppins.className} text-xs text-gray-500`}
                          >
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
                    ) : (
                      <div className="flex w-full">
                        <div
                          className="w-1/3 h-32 md:h-auto bg-cover bg-center rounded-l-md group-hover:scale-[1.02] transition-transform duration-300"
                          style={{
                            backgroundImage: `url(${post.featuredImage})`,
                          }}
                        ></div>
                        <div className="w-2/3 p-5">
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
                          <div className="flex justify-between items-center mb-3">
                            <span
                              className={`${poppins.className} text-xs text-gray-500`}
                            >
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
                              className={`${poppins.className} w-full bg-[#019D4D] text-white py-2 rounded-md hover:bg-[#019D4D]/80 transition-all duration-300 text-sm font-medium cursor-pointer`}
                            >
                              Read More
                            </button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center bg-[#019D4D]/10 p-6 rounded-lg animate-fade-in col-span-full">
                  <h3
                    className={`${poppins.className} text-base text-gray-900 mb-2`}
                  >
                    No Posts Found
                  </h3>
                  <p className={`${inter.className} text-gray-600 text-sm`}>
                    Try adjusting your search or category to find more insights.
                  </p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8 animate-slide-in-bottom">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`
                    ${
                      poppins.className
                    } px-3 py-1 rounded-md text-sm font-medium cursor-pointer
                    ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-[#019D4D] text-white hover:bg-[#019D4D]/80"
                    }
                    transition-all duration-300
                  `}
                  aria-label="Previous page"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`
                      ${
                        poppins.className
                      } px-3 py-1 rounded-md text-sm font-medium cursor-pointer
                      ${
                        currentPage === page
                          ? "bg-[#019D4D] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                      transition-all duration-300
                    `}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`
                    ${
                      poppins.className
                    } px-3 py-1 rounded-md text-sm font-medium cursor-pointer
                    ${
                      currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-[#019D4D] text-white hover:bg-[#019D4D]/80"
                    }
                    transition-all duration-300
                  `}
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInBottom {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .animate-slide-in-bottom {
            animation: slideInBottom 0.6s ease-out forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.6s ease-out forwards;
          }
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          @media (max-width: 768px) {
            .md\\:text-5xl { font-size: 2rem; }
            .md\\:text-3xl { font-size: 1.5rem; }
            .md\\:grid-cols-4 { grid-template-columns: 1fr; }
            .md\\:col-span-3 { grid-column: span 1; }
            .md\\:grid-cols-2 { grid-template-columns: 1fr; }
            .md\\:grid-cols-3 { grid-template-columns: 1fr; }
            .md\\:px-6 { padding-left: 1rem; padding-right: 1rem; }
            .md\\:w-1\\/2 { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};

export default BlogPage;

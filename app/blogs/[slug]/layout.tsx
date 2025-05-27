import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

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

const blogPosts = [
  {
    id: 1,
    title: "The Future of Solar Technology",
    excerpt:
      "Discover the latest advancements in solar panel efficiency and design.",
    date: "2024-05-15",
    category: "Solar Tech",
    slug: "future-of-solar-technology",
    featuredImage:
      "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
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
    id: 4,
    title: "Solar Battery Storage Solutions",
    excerpt:
      "Explore cutting-edge battery technologies for solar energy storage.",
    date: "2024-02-05",
    category: "Solar Tech",
    slug: "solar-battery-storage",
    featuredImage:
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg",
  },
  {
    id: 5,
    title: "Community Solar Projects",
    excerpt: "How local communities are transforming energy production.",
    date: "2024-01-15",
    category: "Energy Savings",
    slug: "community-solar-projects",
    featuredImage:
      "https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg",
  },
  {
    id: 6,
    title: "Emerging Solar Panel Technologies",
    excerpt: "Next-generation solar panel innovations changing the industry.",
    date: "2023-12-20",
    category: "Solar Tech",
    slug: "emerging-solar-technologies",
    featuredImage:
      "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg",
  },
  {
    id: 7,
    title: "Financing Your Solar Installation",
    excerpt: "Understanding solar financing options and incentives.",
    date: "2023-11-10",
    category: "Installation Tips",
    slug: "solar-installation-financing",
    featuredImage:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
];

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found - Jinnah Xpert Solar Blog",
      description: "The requested solar blog post could not be found.",
      keywords: ["solar blog", "Jinnah Xpert", "not found"],
      openGraph: {
        title: "Post Not Found - Jinnah Xpert Solar Blog",
        description: "The requested solar blog post could not be found.",
        url: "https://www.jinnahexpert.com/blogs",
        siteName: "Jinnah Xpert",
        images: [
          {
            url: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg",
            width: 1200,
            height: 630,
            alt: "Jinnah Xpert Solar Blog",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Post Not Found - Jinnah Xpert Solar Blog",
        description: "The requested solar blog post could not be found.",
        images: ["https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg"],
      },
    };
  }

  return {
    title: `${post.title} | Jinnah Xpert Solar Blog`,
    description: post.excerpt,
    keywords: [
      post.category.toLowerCase(),
      "solar energy Pakistan",
      "Jinnah Xpert",
      post.title.toLowerCase(),
      "solar panel installation",
      "renewable energy",
    ],
    openGraph: {
      title: `${post.title} | Jinnah Xpert Solar Blog`,
      description: post.excerpt,
      url: `https://www.jinnahexpert.com/blogs/${post.slug}`,
      siteName: "Jinnah Xpert",
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: `${post.title} by Jinnah Xpert`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Jinnah Xpert Solar Blog`,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function BlogPostLayout({
  children,
  params,
}: LayoutProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  return (
    <div className={inter.className} role="main">
      <Head>
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/poppins.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {post && (
          <>
            <link
              rel="canonical"
              href={`https://www.jinnahexpert.com/blogs/${post.slug}`}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: post.title,
                  description: post.excerpt,
                  datePublished: post.date,
                  image: post.featuredImage,
                  url: `https://www.jinnahexpert.com/blogs/${post.slug}`,
                  author: {
                    "@type": "Organization",
                    name: "Jinnah Xpert",
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "Jinnah Xpert",
                    logo: {
                      "@type": "ImageObject",
                      url: "https://www.jinnahexpert.com/favicon.ico",
                    },
                    address: [
                      {
                        "@type": "PostalAddress",
                        streetAddress:
                          "Office # 63 & 64, Ground Floor, Cantonment Shopping Mall, Main Rashid Minhas Road, Gulshan-e-Jamal",
                        addressLocality: "Karachi",
                        addressRegion: "Sindh",
                        postalCode: "75300",
                        addressCountry: "PK",
                      },
                      {
                        "@type": "PostalAddress",
                        streetAddress:
                          "Office # 09, Runway Commercial, AOHS Falcon, New Malir",
                        addressLocality: "Karachi",
                        addressRegion: "Sindh",
                        postalCode: "75050",
                        addressCountry: "PK",
                      },
                      {
                        "@type": "PostalAddress",
                        streetAddress:
                          "Office # 12, Ittehad Plaza, near Qadafi Stadium, Main Liberty Chowk, Gulberg III",
                        addressLocality: "Lahore",
                        addressRegion: "Punjab",
                        postalCode: "54660",
                        addressCountry: "PK",
                      },
                      {
                        "@type": "PostalAddress",
                        streetAddress:
                          "Office # 05, Pehlwan Chowk, Main GT Road",
                        addressLocality: "Gujrat",
                        addressRegion: "Punjab",
                        postalCode: "50700",
                        addressCountry: "PK",
                      },
                      {
                        "@type": "PostalAddress",
                        streetAddress: "Office # 14, Satellite Town",
                        addressLocality: "Rawalpindi",
                        addressRegion: "Punjab",
                        postalCode: "46000",
                        addressCountry: "PK",
                      },
                    ],
                    telephone: "+92333-8211195",
                    email: "info@jinnahexpert.com",
                    contactPoint: [
                      {
                        "@type": "ContactPoint",
                        telephone: "+92333-8211195",
                        contactType: "Customer Service",
                        areaServed: "PK",
                        availableLanguage: ["English", "Urdu"],
                      },
                      {
                        "@type": "ContactPoint",
                        telephone: "+9221-34572065",
                        contactType: "Customer Service",
                        areaServed: "PK",
                        availableLanguage: ["English", "Urdu"],
                      },
                      {
                        "@type": "ContactPoint",
                        telephone: "+9221-34685110",
                        contactType: "Customer Service",
                        areaServed: "PK",
                        availableLanguage: ["English", "Urdu"],
                      },
                      {
                        "@type": "ContactPoint",
                        email: "info@jinnahexpert.com",
                        contactType: "Customer Service",
                        areaServed: "PK",
                        availableLanguage: ["English", "Urdu"],
                      },
                    ],
                    sameAs: [
                      "https://www.facebook.com/jinnahexpert",
                      "https://www.twitter.com/jinnahexpert",
                      "https://www.linkedin.com/company/jinnahexpert",
                    ],
                  },
                }),
              }}
            />
          </>
        )}
      </Head>
      <main className={poppins.className}>{children}</main>
    </div>
  );
}

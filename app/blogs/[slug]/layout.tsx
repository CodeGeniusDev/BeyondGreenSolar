import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Solar Technology',
    excerpt: 'Discover the latest advancements in solar panel efficiency and design.',
    date: '2024-05-15',
    category: 'Solar Tech',
    slug: 'future-of-solar-technology',
    featuredImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
  },
  {
    id: 2,
    title: 'Installation Tips for Home Solar Systems',
    excerpt: 'Learn the key considerations for a successful residential solar installation.',
    date: '2024-04-22',
    category: 'Installation Tips',
    slug: 'home-solar-installation-tips',
    featuredImage: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
  },
  {
    id: 3,
    title: 'Maximizing Energy Savings with Solar',
    excerpt: 'Practical strategies to reduce your electricity bills using solar power.',
    date: '2024-03-10',
    category: 'Energy Savings',
    slug: 'maximizing-energy-savings',
    featuredImage: 'https://yoderelectric.com/wp-content/uploads/2024/10/7_Solar_Panel_Installations.jpg',
  },
  {
    id: 4,
    title: 'Solar Battery Storage Solutions',
    excerpt: 'Explore cutting-edge battery technologies for solar energy storage.',
    date: '2024-02-05',
    category: 'Solar Tech',
    slug: 'solar-battery-storage',
    featuredImage: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg',
  },
  {
    id: 5,
    title: 'Community Solar Projects',
    excerpt: 'How local communities are transforming energy production.',
    date: '2024-01-15',
    category: 'Energy Savings',
    slug: 'community-solar-projects',
    featuredImage: 'https://images.pexels.com/photos/433309/pexels-photo-433309.jpeg',
  },
  {
    id: 6,
    title: 'Emerging Solar Panel Technologies',
    excerpt: 'Next-generation solar panel innovations changing the industry.',
    date: '2023-12-20',
    category: 'Solar Tech',
    slug: 'emerging-solar-technologies',
    featuredImage: 'https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg',
  },
  {
    id: 7,
    title: 'Financing Your Solar Installation',
    excerpt: 'Understanding solar financing options and incentives.',
    date: '2023-11-10',
    category: 'Installation Tips',
    slug: 'solar-installation-financing',
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  },
];

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found - Solar Insights Blog',
      description: 'The requested blog post could not be found.',
      keywords: 'solar, blog, not found',
    };
  }

  return {
    title: `${post.title} - Solar Insights Blog`,
    description: post.excerpt,
    keywords: `${post.category}, solar, ${post.title}`,
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function BlogPostLayout({ children, params }: LayoutProps) {
  const { slug } = await params;

  return (
    <div className={`${inter.className} ${poppins.className} min-h-screen bg-gray-50`}>
      <main>{children}</main>
    </div>
  );
}
import { sanityClient, blogQueries } from '@/libs/sanity';
import BlogCard from '@/components/ui/BlogCard';
import BlogSidebar from '@/components/ui/BlogSidebar';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

async function getPostsByCategory(category: string) {
  const posts = await sanityClient.fetch(blogQueries.postsByCategory(category));
  return posts;
}

async function getCategoryInfo(slug: string) {
  const category = await sanityClient.fetch(blogQueries.categoryBySlug(slug));
  return category;
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const [posts, category] = await Promise.all([
    getPostsByCategory(decodedSlug),
    getCategoryInfo(decodedSlug),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl container mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-6">
          <ChevronLeft size={20} />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-teal-100 text-teal-700 text-sm font-medium px-3 py-1 rounded-full">
              Category
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {category.title}
          </h1>
          <p className="text-slate-500">
            {posts?.length || 0} {posts?.length === 1 ? 'post' : 'posts'} in this category
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            {posts && posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post: any) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/60">
                <p className="text-slate-500 text-lg">No posts in this category yet.</p>
                <Link href="/blog" className="text-teal-600 hover:underline mt-2 inline-block">
                  View all posts
                </Link>
              </div>
            )}
          </main>

          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

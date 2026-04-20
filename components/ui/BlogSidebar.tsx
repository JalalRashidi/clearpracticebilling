import Link from 'next/link';
import Image from 'next/image';
import { sanityClient, blogQueries, urlFor } from '@/libs/sanity';
import { Folder, Clock, TrendingUp } from 'lucide-react';

async function getCategories() {
  return await sanityClient.fetch(blogQueries.allCategories);
}

async function getRecentPosts() {
  return await sanityClient.fetch(blogQueries.latestPosts(5));
}

export default async function BlogSidebar() {
  const [categories, recentPosts] = await Promise.all([
    getCategories(),
    getRecentPosts(),
  ]);

  return (
    <aside className="lg:w-80 shrink-0 space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
        <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
          <Folder className="text-teal-600" size={20} />
          Categories
        </h3>
        <div className="space-y-2">
          {categories && categories.length > 0 ? (
            categories.map((category: any) => (
              <Link
                key={category._id}
                href={`/blog/category/${category.slug?.current || encodeURIComponent(category.title)}`}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <span className="text-slate-600 group-hover:text-teal-600 transition-colors">
                  {category.title}
                </span>
                <span className="bg-slate-100 text-slate-500 text-xs font-medium px-2 py-1 rounded-full group-hover:bg-teal-100 group-hover:text-teal-600 transition-colors">
                  {category.postCount}
                </span>
              </Link>
            ))
          ) : (
            <p className="text-slate-500 text-sm">No categories yet</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6">
        <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
          <Clock className="text-teal-600" size={20} />
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts && recentPosts.length > 0 ? (
            recentPosts.map((post: any) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="flex gap-3 group"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).width(100).height(100).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{post.title.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-slate-500 text-sm">No posts yet</p>
          )}
        </div>
      </div>
    </aside>
  );
}

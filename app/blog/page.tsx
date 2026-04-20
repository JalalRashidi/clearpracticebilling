import { sanityClient, blogQueries } from '@/libs/sanity';
import BlogCard from '@/components/ui/BlogCard';
import BlogSidebar from '@/components/ui/BlogSidebar';

async function getPosts() {
  const posts = await sanityClient.fetch(blogQueries.allPosts);
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-8">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Health <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-slate-500">Stay informed with the latest health tips and medical news</p>
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
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </main>

          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

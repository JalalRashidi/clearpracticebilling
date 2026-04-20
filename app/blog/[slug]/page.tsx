import { sanityClient, blogQueries, urlFor } from '@/libs/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import BlogSidebar from '@/components/ui/BlogSidebar';

async function getPost(slug: string) {
  const post = await sanityClient.fetch(blogQueries.postBySlug(slug));
  return post;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl container mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors mb-6">
          <ChevronLeft size={20} />
          Back to Blog
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            <article>
              {post.mainImage && (
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={urlFor(post.mainImage).width(1200).height(600).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="mb-6">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category: any, index: number) => (
                      <Link
                        key={index}
                        href={`/blog/category/${category.slug?.current || encodeURIComponent(category.title)}`}
                        className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full hover:bg-teal-200 transition-colors"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>

                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formattedDate}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center gap-2">
                      {post.author.image && (
                        <Image
                          src={urlFor(post.author.image).width(32).height(32).url()}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                      )}
                      <span>{post.author.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose prose-lg prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
                {post.body && <PortableText value={post.body} />}
              </div>
            </article>
          </main>

          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

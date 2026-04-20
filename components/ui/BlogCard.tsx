import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/libs/sanity';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: {
    _id: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    mainImage?: any;
    publishedAt: string;
    author?: { name: string; image?: any };
    categories?: { title: string }[];
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{post.title.charAt(0)}</span>
            </div>
          )}
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <span className="bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                {post.categories[0].title}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
          )}

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
            {post.author && (
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

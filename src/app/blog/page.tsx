
import Link from "next/link";
import Image from "next/image";
import blogPosts, { Post } from "../lib/data";
import React from 'react';

export default function Blog() {
 

  const data: Post[] = blogPosts;

  return (
    <div className="bg-gradient-to-r from-emerald-200 to-slate-200 py-16 px-4 sm:px-6 md:px-20 lg:px-32">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-10">Latest Blog Posts</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((post) => (
          <div
            key={post.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image with Text Overlay */}
            <div className="relative">
              <Image src={post.image} alt={post.title} width={350} height={0} className="w-auto h-56 " />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <h2 className="text-2xl font-bold text-white text-center">{post.title}</h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 italic">By {post.author}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{post.content.substring(0, 120)}...</p>

              <Link href={`/blog/${post.id}`} key={post.id}>
                <button className="mt-6 bg-lime-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-lime-400 transition-colors w-full">
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

"use client";

import blogPosts from "@/app/lib/data";
import Link from "next/link";
import React from "react";


export default function Blogid({ params }: { params: { blogid: string } }) {
  const blogid = parseInt(params.blogid); // Parse the dynamic route parameter
  const data3 = blogPosts.find((post) => post.id === blogid); // Find the blog post with the corresponding ID

  if (!data3){
    return <div className="text-red-500 text-center mt-10 bg-black max-h-screen ">Blog Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{data3.title}</h1>
      <h2 className="text-lg text-gray-600 mb-6">By {data3.author}</h2>
      <p className="text-gray-700 mb-8">{data3.content}</p>

      <h3 className="text-2xl font-semibold mb-4">Comments</h3>
      <ul className="space-y-4">
        {data3.comments.map((comment) => (
          <Link href={`/blog/${params.blogid}/comments`} key={comment.id}>
          <li key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="font-bold text-gray-800">{comment.author}</p>
            <p className="text-gray-600">{comment.content}</p>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

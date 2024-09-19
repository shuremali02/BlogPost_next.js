import blogPosts from '@/app/lib/data';
import Link from 'next/link';
import React from 'react';

export default function Comment({ params }: { params: { blogid: string } }) {
  const blogId = parseInt(params.blogid); // Parse the dynamic route parameter
  const post = blogPosts.find((abc) => abc.id === blogId); // Find the blog post with the corresponding ID

  if (!post) {
    return <div className="text-red-500 text-center mt-10">Blog post Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">{post.author}</h1>
      <h2 className="text-xl text-gray-600 mb-4">{post.title}</h2>
      <p className="text-gray-700 mb-6">{post.content}</p>

      <h3 className="text-lg font-semibold mb-4">Comments</h3>
      <ol className="space-y-4">
        {post.comments.map((comment) => (
          <li key={comment.id} className="bg-gray-100 p-4 rounded-md shadow-md">
            <Link href={`/blog/${params.blogid}/comments/${comment.id}`} key={comment.id}>
              <div className="text-blue-500 hover:underline">
                <p>{comment.content}</p>
                <p className="text-gray-500 text-sm">By {comment.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
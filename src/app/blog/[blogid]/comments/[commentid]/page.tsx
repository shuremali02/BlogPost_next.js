import blogPosts from '@/app/lib/data';
import React from 'react';

export default function Id({ params }: { params: { blogid: string; commentid: string } }) {
  const blogId = parseInt(params.blogid); // Parse the blog ID
  const commentId = parseInt(params.commentid); // Parse the comment ID

  // Find the blog post based on the blogId
  const post = blogPosts.find((post) => post.id === blogId);
  
  // Find the specific comment based on the commentId
  const comment = post?.comments.find((c) => c.id === commentId);

  if (!post || !comment) {
    return <div className="text-red-500 text-center mt-10">Blog post or comment not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Replies to Comment</h1>

      {comment.replies && comment.replies.length > 0 ? (
        <ul className="space-y-4">
          {comment.replies.map((reply) => (
            <li key={reply.id} className="bg-gray-100 p-4 rounded-md shadow-md">
              <p className="text-gray-800">{reply.content}</p>
              <p className="text-sm text-gray-500 mt-2">By {reply.author}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No replies yet.</p>
      )}
    </div>
  );}

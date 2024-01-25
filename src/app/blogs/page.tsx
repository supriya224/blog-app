import { posts } from "@/data/data";
import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cola-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link key={post.id} href={`blogs/${post.id}`} className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>written by:{post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

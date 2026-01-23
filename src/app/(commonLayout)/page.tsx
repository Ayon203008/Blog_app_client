import BlogCard from "@/components/modules/homePage/BlogCard";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

import React, { cache } from "react";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
     cache:"no-store",
    },
  );
  console.log(data);

  return (
    <div className="grid grid-cols-5  mx-auto px-5 gap-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

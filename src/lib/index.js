import React from "react";
import { useFetch } from "./hooks/useFetch";
import "./components/index.css";
import { BlogCard } from "./components/BlogCard";
import SkeletonLoading from "./components/SkeletonLoading";

export default function DevDotTo({
  username,
  coverimage = true,
  numberOfPosts,
}) {
  const [posts, loading] = useFetch(username, numberOfPosts);

  return (
    <div>
      {loading ? (
        <SkeletonLoading />
      ) : (
        <div className="devcontainer">
          {posts && posts?.length > 0 ? (
            posts?.map((item) => (
              <BlogCard key={item.id} coverimage={coverimage} item={item} />
            ))
          ) : (
            <div className="devitem">
              <h1 className="devheading" style={{ paddingInline: 20 }}>
                No Posts Found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useFetch } from "../hooks/useFetch";
import "../components/index.css";
import { BlogCard } from "../components/BlogCard";
import SkeletonLoading from "../components/SkeletonLoading";

export default function DevDotTo({
  username,
  coverimage = true,
  darkMode = true,
  hideTags = false,
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
              <BlogCard
                darkMode={darkMode}
                hideTags={hideTags}
                key={item.id}
                coverimage={coverimage}
                item={item}
              />
            ))
          ) : (
            <div
              className="devitem"
              style={{
                backgroundColor: darkMode ? "#1a2634" : "#eaeaea",
              }}
            >
              <h1
                className="devheading"
                style={{
                  paddingInline: 20,
                  color: darkMode ? "white" : "black",
                }}
              >
                No Posts Found
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

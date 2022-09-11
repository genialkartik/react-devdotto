import React, { useEffect, useState } from "react";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      let endpoint = "https://dev.to/api/articles?";
      endpoint += `&username=${username || "genialkartik"}`;
      if (numberOfPosts) {
        endpoint += `&per_page=${numberOfPosts}`;
      }
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data || []);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

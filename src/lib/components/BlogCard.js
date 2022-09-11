import React from "react";

export const BlogCard = ({ coverimage, item }) => {
  return (
    <div
      className="devitem"
      style={{
        backgroundColor: "#1a2634",
      }}
    >
      <a
        href={item?.canonical_url}
        key={item?.id}
        className="open"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <>
          {coverimage &&
            (item?.cover_image ? (
              <img
                className="devblogimg"
                src={item?.cover_image}
                alt="cover_image"
              />
            ) : (
              <div className="devdescription">
                <h3>{item?.description}</h3>
              </div>
            ))}
          <div className="devdetails">
            <h1 className="devheading">{item?.title}</h1>
            {item?.tag_list?.length > 0 && (
              <div className="devtags">
                {item?.tag_list?.map((tag) => (
                  <> #{tag} </>
                ))}
              </div>
            )}
            <div className="devreact">
              <div className="devicons">
                <p>
                  <svg
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 16 16"
                    className="bi bi-suit-heart"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 6.236l.894-1.789c.222-.443.607-1.08 1.152-1.595C10.582 2.345 11.224 2 12 2c1.676 0 3 1.326 3 2.92 0 1.211-.554 2.066-1.868 3.37-.337.334-.721.695-1.146 1.093C10.878 10.423 9.5 11.717 8 13.447c-1.5-1.73-2.878-3.024-3.986-4.064-.425-.398-.81-.76-1.146-1.093C1.554 6.986 1 6.131 1 4.92 1 3.326 2.324 2 4 2c.776 0 1.418.345 1.954.852.545.515.93 1.152 1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"
                    />
                  </svg>
                  <span className="postreact">
                    {" "}
                    {item?.positive_reactions_count}
                  </span>
                </p>
                <p>
                  <svg
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 16 16"
                    className="bi bi-chat"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                    />
                  </svg>
                  <span className="postcomment"> {item?.comments_count}</span>
                </p>
              </div>
              <span className="postpublishdate">
                {item?.readable_publish_date}
              </span>
            </div>
          </div>
        </>
      </a>
    </div>
  );
};

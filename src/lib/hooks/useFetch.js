import { useEffect, useState } from "react";

export const useFetch = (username, numberOfPosts) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        setPosts([
          {
            type_of: "article",
            id: 566820,
            title: "\nMacfolio - DigitalOcean App Platform Hackathon\n",
            description:
              "🔰 What I built   I built my portfolio website in a unique way. Everybody is familiar with Ma...",
            readable_publish_date: "Jan 9 '21",
            slug: "macfolio-digitalocean-app-platform-hackathon-20hd",
            path: "/genialkartik/macfolio-digitalocean-app-platform-hackathon-20hd",
            url: "https://dev.to/genialkartik/macfolio-digitalocean-app-platform-hackathon-20hd",
            comments_count: 4,
            public_reactions_count: 6,
            collection_id: null,
            published_timestamp: "2021-01-09T07:37:06Z",
            positive_reactions_count: 6,
            cover_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--85zrOJ6p--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/r2nycrd7rad0nkbrn767.jpg",
            social_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--caYBpLRV--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/r2nycrd7rad0nkbrn767.jpg",
            canonical_url:
              "https://dev.to/genialkartik/macfolio-digitalocean-app-platform-hackathon-20hd",
            created_at: "2021-01-09T07:36:17Z",
            edited_at: null,
            crossposted_at: null,
            published_at: "2021-01-09T07:37:06Z",
            last_comment_at: "2021-01-12T03:51:30Z",
            reading_time_minutes: 2,
            tag_list: ["dohackathon", "portfolio", "hackathon", "digitalocean"],
            tags: "dohackathon, portfolio, hackathon, digitalocean",
            user: {
              name: "Kartik Tyagi",
              username: "genialkartik",
              twitter_username: "genialkartik",
              github_username: "genialkartik",
              user_id: 240988,
              website_url: "https://kartiktyagi.codes",
              profile_image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--e2WNBCj7--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
              profile_image_90:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--inVC5HnL--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
            },
          },
          {
            type_of: "article",
            id: 445824,
            title: "Embed your dev.to posts in React",
            description:
              "Hey Reader, You landed over here that indicates you also want to embed your posts on dev.to into your...",
            readable_publish_date: "Sep 3 '20",
            slug: "embed-your-dev-to-posts-in-react-559l",
            path: "/genialkartik/embed-your-dev-to-posts-in-react-559l",
            url: "https://dev.to/genialkartik/embed-your-dev-to-posts-in-react-559l",
            comments_count: 1,
            public_reactions_count: 13,
            collection_id: null,
            published_timestamp: "2020-09-03T10:23:16Z",
            positive_reactions_count: 13,
            cover_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--K1lb2CKv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/j03e6p45xarhbr7t0nni.png",
            social_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--8shn8Z00--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/j03e6p45xarhbr7t0nni.png",
            canonical_url:
              "https://dev.to/genialkartik/embed-your-dev-to-posts-in-react-559l",
            created_at: "2020-09-03T10:23:16Z",
            edited_at: "2020-09-03T12:33:27Z",
            crossposted_at: null,
            published_at: "2020-09-03T10:23:16Z",
            last_comment_at: "2021-11-14T16:41:52Z",
            reading_time_minutes: 2,
            tag_list: ["npm", "react", "javascript", "hacktoberfest"],
            tags: "npm, react, javascript, hacktoberfest",
            user: {
              name: "Kartik Tyagi",
              username: "genialkartik",
              twitter_username: "genialkartik",
              github_username: "genialkartik",
              user_id: 240988,
              website_url: "https://kartiktyagi.codes",
              profile_image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--e2WNBCj7--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
              profile_image_90:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--inVC5HnL--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
            },
          },
          {
            type_of: "article",
            id: 317836,
            title: "AWS EC2 Instance",
            description:
              "This Gistdicated to all those beginners and learners who are seeking to learn and explore Cloud Compu...",
            readable_publish_date: "Apr 23 '20",
            slug: "aws-ec2-instance-57gb",
            path: "/genialkartik/aws-ec2-instance-57gb",
            url: "https://dev.to/genialkartik/aws-ec2-instance-57gb",
            comments_count: 5,
            public_reactions_count: 14,
            collection_id: null,
            published_timestamp: "2020-04-23T17:52:46Z",
            positive_reactions_count: 14,
            cover_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--nico6mLo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gd104nfqr7r8gduizoww.jpeg",
            social_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--q7u1oznO--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gd104nfqr7r8gduizoww.jpeg",
            canonical_url: "https://dev.to/genialkartik/aws-ec2-instance-57gb",
            created_at: "2020-04-23T17:52:02Z",
            edited_at: "2020-12-30T17:45:02Z",
            crossposted_at: null,
            published_at: "2020-04-23T17:52:46Z",
            last_comment_at: "2020-08-27T07:41:30Z",
            reading_time_minutes: 5,
            tag_list: ["ec2", "aws", "cloudcomputing", "amazon"],
            tags: "ec2, aws, cloudcomputing, amazon",
            user: {
              name: "Kartik Tyagi",
              username: "genialkartik",
              twitter_username: "genialkartik",
              github_username: "genialkartik",
              user_id: 240988,
              website_url: "https://kartiktyagi.codes",
              profile_image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--e2WNBCj7--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
              profile_image_90:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--inVC5HnL--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
            },
          },
          {
            type_of: "article",
            id: 287551,
            title: "Information as a Service (Cloud Computing)",
            description:
              "This Article aka Blog will help to acknowledge about a well renounced and new innovative method data...",
            readable_publish_date: "Mar 24 '20",
            slug: "information-as-a-service-cloud-computing-5dc0",
            path: "/genialkartik/information-as-a-service-cloud-computing-5dc0",
            url: "https://dev.to/genialkartik/information-as-a-service-cloud-computing-5dc0",
            comments_count: 0,
            public_reactions_count: 7,
            collection_id: null,
            published_timestamp: "2020-03-24T23:06:29Z",
            positive_reactions_count: 7,
            cover_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--iQOwEqIy--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/dshyqiusbj1iz9yvebzv.jpeg",
            social_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--j23jzxtl--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/dshyqiusbj1iz9yvebzv.jpeg",
            canonical_url:
              "https://dev.to/genialkartik/information-as-a-service-cloud-computing-5dc0",
            created_at: "2020-03-24T22:48:07Z",
            edited_at: "2020-08-01T20:47:55Z",
            crossposted_at: null,
            published_at: "2020-03-24T23:06:29Z",
            last_comment_at: "2020-03-24T23:06:29Z",
            reading_time_minutes: 10,
            tag_list: [
              "cloudcomputing",
              "technology",
              "innvation",
              "informationasaservice",
            ],
            tags: "cloudcomputing, technology, innvation, informationasaservice",
            user: {
              name: "Kartik Tyagi",
              username: "genialkartik",
              twitter_username: "genialkartik",
              github_username: "genialkartik",
              user_id: 240988,
              website_url: "https://kartiktyagi.codes",
              profile_image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--e2WNBCj7--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
              profile_image_90:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--inVC5HnL--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
            },
          },
          {
            type_of: "article",
            id: 212103,
            title: "Do’s and Don’ts for freshmen (engineering graduate)",
            description:
              "Before jumping on the do’s and don’ts, let me be clear that these facts and figures are thoroughly my...",
            readable_publish_date: "Nov 27 '19",
            slug: "do-s-and-don-ts-for-freshmen-engineering-graduate-181f",
            path: "/genialkartik/do-s-and-don-ts-for-freshmen-engineering-graduate-181f",
            url: "https://dev.to/genialkartik/do-s-and-don-ts-for-freshmen-engineering-graduate-181f",
            comments_count: 0,
            public_reactions_count: 7,
            collection_id: null,
            published_timestamp: "2019-11-27T19:07:14Z",
            positive_reactions_count: 7,
            cover_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--RQmdo3o4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/jjqhscq4ynkcc4frsloi.jpg",
            social_image:
              "https://res.cloudinary.com/practicaldev/image/fetch/s--b2ssqWOL--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/jjqhscq4ynkcc4frsloi.jpg",
            canonical_url:
              "https://dev.to/genialkartik/do-s-and-don-ts-for-freshmen-engineering-graduate-181f",
            created_at: "2019-11-27T19:07:14Z",
            edited_at: null,
            crossposted_at: null,
            published_at: "2019-11-27T19:07:14Z",
            last_comment_at: "2019-11-27T19:07:14Z",
            reading_time_minutes: 3,
            tag_list: ["students", "university", "career", "engineer"],
            tags: "students, university, career, engineer",
            user: {
              name: "Kartik Tyagi",
              username: "genialkartik",
              twitter_username: "genialkartik",
              github_username: "genialkartik",
              user_id: 240988,
              website_url: "https://kartiktyagi.codes",
              profile_image:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--e2WNBCj7--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
              profile_image_90:
                "https://res.cloudinary.com/practicaldev/image/fetch/s--inVC5HnL--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/240988/5155e006-df5e-430e-98b0-aa3c225db7ab.jpeg",
            },
          },
        ]);
        // setLoading(true);
        // const reqObj = {};
        // if (numberOfPosts) {
        //   reqObj.params = {
        //     per_page: numberOfPosts,
        //   };
        // }
        // fetch(`https://dev.to/api/articles?username=${username}`, reqObj)
        //   .then((res) => res.json())
        //   .then((data) => {
        //     setPosts(data || []);
        //     setLoading(false);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //     setLoading(false);
        //   });
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username, numberOfPosts]);

  return [posts, loading];
};

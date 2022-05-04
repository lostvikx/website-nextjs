import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Blog({posts}) {
  console.log(posts);

  return (
    <Layout title="Blog | Vikram Negi" blog={false}>
      <h1>Welcome to my Blog Page 🎉</h1>
      <p>
        I got into programming because I wanted to create my own blog site, later I fell in love with the fascinating world of computers.
      </p>
      <div id="all-posts">
        {posts.map((post, index) => {
          return (
            <div className="post" key={index}>
              <a href={`/blog/${post.slug}`}>
                <div className="post-div">
                  <div className="post-img">
                    <Image
                      src={post.metaData.cover_image || "/images/default-fallback-image.png"}
                      alt={post.metaData.title}
                      layout="fill"
                    />
                  </div>
                  <div className="post-info"></div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {

  // Get files from "posts" directory
  const files = fs.readdirSync(path.join("posts"));
  // console.log(files);

  // Get slug and frontmatter
  const posts = files.map(filename => {
    // create slug
    const slug = filename.replace(".md", "");

    // get frontmatter
    const md = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: metaData } = matter(md);

    return {
      slug,
      metaData
    }
  });

  return {
    props: {
      posts
    }
  }
}
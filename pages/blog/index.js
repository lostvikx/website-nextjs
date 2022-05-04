import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Blog({posts}) {
  console.log(posts);

  return (
    <Layout title="Blog | Vikram Negi" blog={true}>
      <h1>Explore the Uncharted 🎉</h1>
      <p>
        I got into programming because I wanted to create my own little website, later I fell in love with the fascinating world of computers!
      </p>
      <h2>Posts:</h2>
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
                  <div className="post-info">
                    <h3 className="post-title">
                      {post.metaData.title.slice(0, 50)}
                    </h3>
                    <p className="post-excerpt">
                      {post.metaData.excerpt}
                    </p>
                    <p className="time-created">
                      Posted on {post.metaData.date}
                    </p>
                  </div>
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
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ posts }) {
  // console.log(posts);
  // console.log(new Date(posts[0].metaData.date).getTime())

  return (
    <Layout title="Blog | Vikram Negi" blog={true}>

      <h1>Explore the Uncharted 🎉</h1>
      <p>
        I got into programming because I wanted to create my own little website, later I fell in love with the fascinating world of computers!
      </p>

      <h2>Posts</h2>

      {/* All Posts */}
      <div id="all-posts">
        {posts.map((post, index) => {
          return (
            <div className="post" key={index}>
              <Link href={`/blog/${post.slug}`} passHref>
                <a>
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
              </Link>
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
      posts: posts.sort((a, b) => {
        return new Date(a.metaData.date).getTime() > new Date(b.metaData.date).getTime() ? -1 : 1;
      })
    }
  }
}
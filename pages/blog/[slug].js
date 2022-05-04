import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

const calcReadingTime = (articleText) => {
  const wordsPerMinute = 150; // This is a good reading speed to understand the content.
  const nWords = articleText.trim().replace(/[^\w\s\d]/g, "").split(/\s+/).length;
  const time = Math.ceil(nWords / wordsPerMinute);

  return `${time} to ${time+1} ${time == 1 ? "minute" : "minutes"}`;
}

export default function BlogPost({ metaData, slug, content}) {

  return (
    <Layout title={`${metaData.title} | Vikram Negi`} blog = { true }>
      {/* TODO: Add breadcrums */}

      <h1>{metaData.title}</h1>

      <div id="post-info">
        <p className="post-meta">Posted on {metaData.date}</p>
        {/* <p className="post-meta">Written by {metaData.author}</p> */}
        <p className="post-meta">Reading Time: {calcReadingTime(content)}</p>
      </div>

      <figure className="cover-img">
        <Image
          src={metaData.cover_image || "/images/default-fallback-image.png"}
          alt={metaData.title}
          width="1000px"
          height="600px"
        />
      </figure>

      <div 
        id="article" 
        dangerouslySetInnerHTML={{ __html: marked(content) }}>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map(filename => {
    return {
      params: {
        slug: filename.replace(".md", "")
      }
    }
  });
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {slug}}) {
  const md = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const {data: metaData, content} = matter(md);

  return {
    props: {
      metaData,
      slug,
      content
    }
  }
}
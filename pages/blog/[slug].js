import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { calcReadingTime, createMarked } from "../../utils/helper";
import { useState } from "react";

export default function BlogPost({ metaData, slug, content}) {

  const [reaction, setReaction] = useState(null);

  const Reactions = () => {
    const faces = ["😭", "😐", "😀", "🤩"];
    return faces.map((face, i) => {

      return (reaction == i)
        ? <button 
            key={i} 
            className="face face-selected" 
            onClick={() => setReaction(null)}
          >
            {face}
          </button> 
        : <button 
            key={i} 
            className="face" 
            onClick={() => setReaction(i)}
          >
            {face}
          </button>
    });
  }

  return (
    <Layout title={`${metaData.title} | Vikram Negi`} blog = { true }>

      <h1>{metaData.title}</h1>

      <div className="breadcrums">
        <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <Link href={`/blog/${slug}`}>{metaData.title}</Link>
      </div>

      <div className="post-meta">
        <div>Posted on {metaData.date}</div>
        <div>Reading Time: {calcReadingTime(content)}</div>
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
        dangerouslySetInnerHTML={{ __html: createMarked(content) }}
      >
      </div>

      <hr />

      <div>
        <h5 className="reaction-header">Was this article helpful?</h5>
        <div className="reactions">
          <Reactions />
        </div>
      </div>
    </Layout>
  );
}

// A dynamic route, that uses staticProps, needs this fn to define all the posible dynamic paths.
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
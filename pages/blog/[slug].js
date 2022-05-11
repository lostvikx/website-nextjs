import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { calcReadingTime, createMarked } from "../../utils/helper";
import { useState } from "react";
import Breadcrumbs from "../../components/BreadCrumbs";

export default function BlogPost({ metaData, slug, content}) {

  const [reaction, setReaction] = useState(null);
  const [ratingFormSubmit, setRatingFormSubmit] = useState(false);

  // Event handlers
  function handleFaceClick(key) {
    // visual change
    setReaction(key);
  }

  function submitArticleRating() {
    if (reaction !== null) {
      setRatingFormSubmit(true);
      console.log(`Article Rating: ${reaction} out of 3`);
    } else {
      console.warn("Notify: Please select a rating!");
    }
  }

  const faces = ["😭", "😐", "😀", "🤩"];
  const Faces = faces.map((face, i) => {
    return (reaction == i)
      ? <div
        key={i}
        className="face face-selected"
        onClick={() => handleFaceClick(null)}
      >
        {face}
      </div>
      : <div
        key={i}
        className="face"
        onClick={() => handleFaceClick(i)}
      >
        {face}
      </div>
  });

  const Ratings = () => {
    return (
      (!ratingFormSubmit) 
        ? <div className="post-rating flex-col">
            <h5 className="reaction-header">Was this article helpful?</h5>
            <div className="reactions">
              {Faces}
            </div>
            <button
              type="submit"
              className="reaction-sub btn"
              onClick={submitArticleRating}
              title="Submit rating"
            >
              Submit
            </button>
          </div>
        : <div className="rating-thanks flex-col">
          <div className="thanks-emoji">✨</div>
            <h4>Thank You!</h4>
            <p>The rating was submitted successfully.</p>
          </div>
    );
  }

  return (
    <Layout title={`${metaData.title} | Vikram Negi`} blog = { true }>

      <Breadcrumbs endpointTitle={metaData.title} />

      {/* <div className="breadcrums">
        <Link href="/"><a>Home</a></Link> / <Link href="/blog">Blog</Link> / <Link href={`/blog/${slug}`}>{metaData.title}</Link>
      </div> */}
      

      <figure className="cover-img">
        <Image
          src={metaData.cover_image || "/images/default-fallback-image.png"}
          alt={metaData.title}
          width="1000px"
          height="600px"
        />
      </figure>

      <div className="post-meta">
        {metaData.date} | {calcReadingTime(content)}
      </div>

      <h1>{metaData.title}</h1>


      <div 
        id="article" 
        dangerouslySetInnerHTML={{ __html: createMarked(content) }}
      >
      </div>

      <hr />
      <Ratings />
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
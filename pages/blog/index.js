import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";

export default function Blog({posts}) {
  console.log(posts);

  return (
    <Layout title="Blog | lostvikx" blog={false}>
      <h1>Hello</h1>
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

    return {
      slug,
    }
  });

  return {
    props: {
      posts
    }
  }
}
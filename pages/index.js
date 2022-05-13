import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="Vikram Negi" blog={false}>
      
      <section className="showcase">
        <div className="show-img">
          <img
          src={"/images/showcase.jpg"}
          alt="Me"
          width="300px"
          height="600px" 
        />
        </div>
        <div className="show-text flex-col">
          <h1>Hello, World 👋</h1>
          <p>I&apos;m a self-taught developer who enjoys using his computer for doing productive things.</p>
          <div className="fn-btns flex-row">
            <a className="btn" href="mailto:viknegi0@gmail.com">Contact</a>
            <a className="btn" href="/resume_vikram_negi.pdf" download>Download Resume</a>
          </div>
        </div>
      </section>

    </Layout>
  );
}

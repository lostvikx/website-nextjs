import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const resumePath = "/resume-vikram-negi.pdf";

  return (
    <Layout title="Vikram Negi" blog={false}>
      
      <section className="showcase">
        <div className="show-img">
          <Image
          src={"/images/showcase.jpg" || "/images/default-fallback-image.png"}
          alt="Me chilling near a delta"
          width={300}
          height={600}
          layout="fixed" 
          // loader
          priority={true}
          rel="preload"
        />
        </div>
        <div className="show-text flex-col">
          <h1>Hello, World 👋</h1>
          <p>I&apos;m a self-taught developer who enjoys using his computer to do productive things in life.</p>
          <div className="fn-btns flex-row">
            <Link href="mailto:vikram.s.negi@proton.me">
              <a className="btn">Contact</a>
            </Link>
            <Link href={resumePath}>
              <a 
                className="btn" 
                target="_blank"
              >
                Download Resume
              </a>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}

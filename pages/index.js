import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="Vikram Negi" blog={false}>
      
      <section className="showcase">
        <div className="show-img">
        <Image 
          src={"/images/showcase.jpg"}
          alt="Me"
          width="300px"
          height="600px" 
        />
        </div>
        <div className="show-text flex-col">
          <h1>Hello, World 👋</h1>
          <p>I&apos;m a self-taught developer who enjoys using his computer for doing productive things.</p>
          <div>
            <button className="btn">Contact</button>
            <button className="btn">Download Resume ↧</button>
          </div>
        </div>
      </section>



    </Layout>
  );
}

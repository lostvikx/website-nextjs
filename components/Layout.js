import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children, title, blog }) {
  return (
    <div className="layout">

      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content="Vikram's Personal Website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </Head>

      <Nav />

      {/* {
        blog 
          ? <article>{children}</article> 
          : <main>{children}</main>
      } */}

      <main>{children}</main>

      <Footer />

    </div>
  );
}
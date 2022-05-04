import Link from "next/link";
import Head from "next/head";

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
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>❄️</text></svg>"
        />
      </Head>
      <nav>
        <div className="nav-link">[ <Link href="/">Home</Link> ]</div>
        <div className="nav-link">[ <a href="/blog">Blog</a> ]</div>
        <div className="nav-link">[ <a href="https://github.com/lostvikx" target="_blank" rel="noopener noreferrer">GitHub</a> ]</div>
        <div className="nav-link">[ <a href="/archive">Archive</a> ]</div>
      </nav>
      {blog ? <article>{children}</article> : <main>{children}</main>}
      <div className="bottom-footer">
        <hr className="footer-line" />
        <footer>
          <div>&copy; 2022 MIT | Made with ❤️ by Vikram Negi</div>
          <div className="contact-links">
            <div><a href="https://github.com/lostvikx" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            <div><a href="mailto:viknegi0@gmail.com">Mail</a></div>
            <div><a href="https://twitter.com/lostvikx" target="_blank" rel="noopener noreferrer">Twitter</a></div>
            <div><a href="https://www.kaggle.com/viknegi" target="_blank" rel="noopener noreferrer">Kaggle</a></div>
            <div><a href="https://linkedin.com/in/vikram-singh-negi/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          </div>
        </footer>
      </div>
    </div>
  ) 
}
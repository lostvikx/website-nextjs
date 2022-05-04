import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <div className="nav-link">[ <Link href="/">Home</Link> ]</div>
      <div className="nav-link">[ <a href="/blog">Blog</a> ]</div>
      {/* <div className="nav-link">[ <a href="https://github.com/lostvikx" target="_blank" rel="noopener noreferrer">GitHub</a> ]</div> */}
      <div className="nav-link">[ <a href="/archive">Archive</a> ]</div>
    </nav>
  )
}
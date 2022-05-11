import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="nav-link">
        [ <Link href="/"><a>Home</a></Link> ]
      </div>
      <div className="nav-link">
        [ <Link href="/blog"><a>Blog</a></Link> ]
      </div>
      <div className="nav-link">
        [ <Link href="/archive"><a>Archive</a></Link> ]
      </div>
    </nav>
  )
}
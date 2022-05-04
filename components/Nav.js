import Link from "next/link"

export default function Nav() {
  return (
    <nav>
      <div className="nav-link">[ <Link href="/">Home</Link> ]</div>
      <div className="nav-link">[ <a href="/blog">Blog</a> ]</div>
      <div className="nav-link">[ <a href="/" target="_blank" rel="noopener noreferrer">GitHub</a> ]</div>
      <div className="nav-link">[ <a href="/radio">Radio</a> ]</div>
    </nav>
  )
}
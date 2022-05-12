import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {

  const [active, setActive] = useState(false);

  function handleHamburgerClick() {
    setActive(prevActive => !prevActive);
  }

  return (
    <nav>

      {/* <div className="nav-link">
        <Link href="/">
          <a>
            <Image 
              src={"" || "/images/default-fallback-image.png"}
              alt={"hels"}
              width="32px"
              height="32px"
            />
          </a>
        </Link>
      </div> */}

      <div className="nav-link">
        <Link href="/"><a>❄️</a></Link>
      </div>
      
      {/* <div className="nav-link">
        <Link href="/"><a>Home</a></Link>
      </div> */}

      <div className={`nav flex-row ${active ? "active" : ""}`}>
        <div className="nav-link">
          <Link href="/about"><a>About</a></Link>
        </div>
        <div className="nav-link">
          <Link href="/blog"><a>Blog</a></Link>
        </div>
        <div className="nav-link">
          <Link href="/archive"><a>Archive</a></Link>
        </div>
      </div>

      <div className={`hamburger ${active ? "active" : ""}`} onClick={handleHamburgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    </nav>
  );
}
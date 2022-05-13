import Link from "next/link";
import { useState } from "react";

export default function Nav() {

  const [active, setActive] = useState(false);

  function handleHamburgerClick() {
    setActive(prevActive => !prevActive);
  }

  return (
    <nav className="container">

      <div className="nav-link name">
        <Link href="/"><a>Vikram Negi</a></Link>
      </div>

      <div className={`nav flex-row ${active ? "active" : ""}`}>

        <div className="nav-link">
          <Link
            href="https://vikramnegi.notion.site/Knowledge-Hub-b112bb379c104ec9a69c958f5b82add5"
          >
            <a target="_blank" rel="noreferrer">Blog</a>
          </Link>
        </div>
        
        <div className="nav-link">
          <Link href="https://github.com/lostvikx"><a target="_blank">GitHub</a></Link>
        </div>

        <div className="nav-link">
          <Link 
            href="/about"
          >
            <a target="">About</a>
          </Link>
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
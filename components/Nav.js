import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav({ activePage }) {

  const [active, setActive] = useState(false);

  const pages = ["about", "blog", "archive"];
  const page = activePage.trim().split(" | ")[0].toLowerCase();
  // console.log(page);

  function handleHamburgerClick() {
    setActive(prevActive => !prevActive);
  }

  const tabs = pages.map((tab, i) => {

    const className = ["nav-link"];
    if (page === tab) {
      className.push("active-tab");
    }

    return (
      <div className={className.join(" ")} key={i}>
        <Link href={`/${tab}`}><a>{tab[0].toUpperCase()+tab.slice(1,)}</a></Link>
      </div>
    );
  });

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
          <Link href="/"><a>Resume</a></Link>
        </div>

        {tabs}
      </div>

      <div className={`hamburger ${active ? "active" : ""}`} onClick={handleHamburgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    </nav>
  );
}
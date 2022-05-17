import Link from "next/link";

export default function Footer({blog}) {
  return (
    <div className={blog ? "bottom-footer" : "btm-foot"}>
      {/* <hr className="footer-line" /> */}
      <footer>
        <div>
          &copy; 2022 Vikram Negi. All Rights Reserved.
        </div>
        <div className="contact-links flex-row">
          <div>
            <Link href="https://github.com/lostvikx">
              <a target="_blank">GitHub</a>
            </Link>
          </div>
          <div>
            <Link href="mailto:viknegi0@gmail.com">
              <a>Email</a>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/lostvikx">
              <a target="_blank">Twitter</a>
            </Link>
          </div>
          <div>
            <Link href="https://www.kaggle.com/viknegi">
              <a target="_blank">Kaggle</a>
            </Link>
          </div>
          <div>
            <Link href="https://linkedin.com/in/vikram-singh-negi/">
              <a target="_blank">LinkedIn</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
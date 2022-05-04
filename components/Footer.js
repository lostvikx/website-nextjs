import Link from "next/link";

export default function Footer() {
  return (
    <div className="bottom-footer">
      <hr className="footer-line" />
      <footer>
        <div>
          &copy; 2022 MIT | Made with ❤️ by Vikram Negi
        </div>
        <div className="contact-links">
          <div>
            <Link href="https://github.com/lostvikx">
              <a target="_blank">GitHub</a>
            </Link>
          </div>
          <div>
            <Link href="mailto:viknegi0@gmail.com">
              <a>Mail</a>
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
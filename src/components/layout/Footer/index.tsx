import Link from "next/link";
import IconList from "@/components/ui/IconList";

const Footer = () => {
  return (
    <footer className="l-footer" id="footer">
      <div className="l-footer__inner inner">
        <nav className="l-footer__nav" aria-label="フッターナビゲーション">
          <ul className="l-footer__nav-list">
            <li className="l-footer__nav-item">
              <Link href="/" className="l-footer__nav-link">
                Top
              </Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/works" className="l-footer__nav-link">
                Works
              </Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/articles" className="l-footer__nav-link">
                Articles
              </Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/about" className="l-footer__nav-link">
                About
              </Link>
            </li>
            <li className="l-footer__nav-item">
              <Link href="/contact" className="l-footer__nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="l-footer__icon-list">
          <IconList />
        </div>
        <nav className="l-footer__sub-nav">
          <ul className="l-footer__sub-nav-list">
            <li className="l-footer__sub-nav-item">
              <Link href="/privacy" className="l-footer__sub-nav-link">
                Privacy Policy
              </Link>
            </li>
            <li className="l-footer__sub-nav-item">
              <Link href="/site" className="l-footer__sub-nav-link">
                Site Map
              </Link>
            </li>
          </ul>
        </nav>
        <div className="l-footer__copyright">
          <small>&copy; {new Date().getFullYear()} Kaze</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import IconList from "@/components/ui/IconList";
import MobileMenu from "@/components/ui/MobileMenu";

const Header = () => {
  return (
    <header className="l-header" id="header">
      <div className="l-header__inner">
        <Logo className="l-header__logo" link={true}/>
        <div className="l-header__line">
          <nav className="l-header__nav" aria-label="ヘッダーナビゲーション">
            <ul className="l-header__nav-list">
              <li className="l-header__nav-item">
                <Link href="/" className="l-header__nav-link">
                  Top
                </Link>
              </li>
              <li className="l-header__nav-item">
                <Link href="/works" className="l-header__nav-link">
                  Works
                </Link>
              </li>
              <li className="l-header__nav-item">
                <Link href="/articles" className="l-header__nav-link">
                  Articles
                </Link>
              </li>
              <li className="l-header__nav-item">
                <Link href="/about" className="l-header__nav-link">
                  About
                </Link>
              </li>
              <li className="l-header__nav-item">
                <Link href="/contact" className="l-header__nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="l-header__icon-list">
            <IconList />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

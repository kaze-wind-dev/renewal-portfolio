import { MAIN_NAVIGATION_LIST, SUB_NAVIGATION_LIST } from "@/constants";
import IconList from "@/components/ui/IconList";
import { Navigation } from "@/components/ui/Navigation";

const Footer = () => {
  const footerNavClassName = {
    nav: "l-footer__nav",
    list: "l-footer__nav-list",
    item: "l-footer__nav-item",
    link: "l-footer__nav-link",
    linkCurrent: "l-footer__nav-link--current",
  };
  const footerSubNavClassName = {
    nav: "l-footer__sub-nav",
    list: "l-footer__sub-nav-list",
    item: "l-footer__sub-nav-item",
    link: "l-footer__sub-nav-link",
    linkCurrent: "l-footer__sub-nav-link--current",
  };
  return (
    <footer className="l-footer" id="footer">
      <div className="l-footer__inner inner">
        <Navigation
          items={MAIN_NAVIGATION_LIST}
          className={footerNavClassName}
          ariaLabel="フッターナビゲーション"
        />
        <div className="l-footer__icon-list">
          <IconList />
        </div>
        <Navigation
          items={SUB_NAVIGATION_LIST}
          className={footerSubNavClassName}
          ariaLabel="フッターサブナビゲーション"
        />
        <div className="l-footer__copyright">
          <small>&copy; {new Date().getFullYear()} Kaze</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

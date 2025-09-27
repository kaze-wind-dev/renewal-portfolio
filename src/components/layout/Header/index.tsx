import { MAIN_NAVIGATION_LIST } from "@/constants";
import Logo from "@/components/ui/Logo";
import IconList from "@/components/ui/IconList";
import MobileMenu from "@/components/ui/MobileMenu";
import { Navigation } from "@/components/ui/Navigation";

const Header = () => {
  const headerNavClassName = {
    nav: "l-header__nav",
    list: "l-header__nav-list",
    item: "l-header__nav-item",
    link: "l-header__nav-link",
    linkCurrent: "l-header__nav-link--current",
  };
  return (
    <header className="l-header" id="header">
      <div className="l-header__inner js-header-inner">
        <Logo className="l-header__logo" link={true} />
        <div className="l-header__line">
          <Navigation
            items={MAIN_NAVIGATION_LIST}
            className={headerNavClassName}
            ariaLabel="ヘッダーナビゲーション"
          />
          <div className="l-header__icon-list">
            <IconList />
          </div>
        </div>
      </div>
        <MobileMenu />
    </header>
  );
};

export default Header;

import Hero from "@/components/ui/Hero";
import { HeroProps } from "@/components/ui/Hero";

interface PageLayoutProps {
  hero: HeroProps;
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ hero, children, className }: PageLayoutProps) => {
  return (
    <main className={`l-main-content ${className || ""}`}>
      <Hero {...hero}/>
      {children}
    </main>
  );
};

export default PageLayout;

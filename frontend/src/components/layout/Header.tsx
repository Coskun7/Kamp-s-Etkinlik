import type { PageName } from "../../types/page";
import Navigation from "./Navigation";

interface HeaderProps {
  title: string;
  subtitle: string;
  current: PageName;
  onNavigate: (page: PageName) => void;
}

function Header({ title, subtitle, current, onNavigate }: HeaderProps) {
  return (
    <header className="site-baslik">
      <div className="header-container">
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <Navigation current={current} onNavigate={onNavigate} />
      </div>
    </header>
  );
}

export default Header;

interface HeaderProps {
  title: string;
  text?: string;
  children?: React.ReactNode;
}

function Header({ title, text, children }: HeaderProps) {
  return (
    <header className="site-baslik">
      <div className="header-container">
        <h1>{title}</h1>
        {text && <p className="subtitle">{text}</p>}
        {children}
      </div>
    </header>
  );
}

export default Header;

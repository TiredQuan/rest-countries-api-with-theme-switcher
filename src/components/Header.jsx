import "./Header.scss";
export default function Header() {
  return (
    <>
      <header className="header text elements">
        <nav className="header__nav">
          <h1>Where in the world?</h1>
          <button className="text elements">
            <i className="fa-solid fa-moon"></i> Dark Mode
          </button>
        </nav>
      </header>
    </>
  );
}

import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__box-img">
          <img src="./img/logotype.png" alt="logo" />
        </div>
        <div className="header__box-txt">
          <p className="header__text-logo">
            <span>M</span>ultiverse <span>W</span>ar
          </p>
        </div>
      </header>
    </>
  );
}

import { useState } from 'react';
import s from './nav.module.css';
import Popup from './popup/popup.jsx';

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Popup active={menuActive} setActive={setMenuActive} />
      <nav className={s.nav}>
        <div className={s.container}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={s.instagram_logo} src="" alt="instagram-logo" />
          </a>
          <div className={s.menu}>
            <p className={s.text}>Главная</p>
            <p className={s.text}>Мастера</p>
            <p className={s.text}>Косметика</p>
          </div>
          <img className={s.main_logo} src="" alt="main-logo" />
          <div className={s.menu}>
            <p className={s.text}>Акции</p>
            <p className={s.text}>Отзывы</p>
            <p className={s.text}>Контакты</p>
          </div>
          <img
            onClick={() => setMenuActive(!menuActive)}
            className={s.burger_open_logo}
            src=""
            alt="burger-open"
          />
        </div>
        <div>
          <div className={s.line}></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

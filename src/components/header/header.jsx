import s from './header.module.css';
import Nav from './nav/nav.jsx';
import SectionOne from './sectionOne/sectionOne.jsx';
import SectionTwo from './sectionTwo/sectionTwo.jsx';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Nav />
        <SectionOne />
        <SectionTwo />
      </header>
    </>
  );
};

export default Header;

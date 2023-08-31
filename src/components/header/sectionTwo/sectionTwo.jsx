import s from './sectionTwo.module.css';

const SectionTwo = () => {
  return (
    <>
      <section className={s.section}>
        <img className={s.mouse} src="" alt="mouse-img" />
        <p className={s.text}>Прокрутите вниз</p>
      </section>
    </>
  );
};

export default SectionTwo;

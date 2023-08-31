import s from './popup.module.css';

const Popup = ({ active, setActive }) => {
  return (
    <>
      <aside
        onClick={() => setActive(false)}
        className={active ? `${s.aside} ${s.active}` : `${s.aside}`}
      >
        <div onClick={(e) => e.stopPropagation()} className={s.popup}>
          <div className={s.container_one}>
            <img
              onClick={() => setActive(false)}
              className={s.close_icon}
              src=""
              alt="close-icon"
            />
          </div>
          <div className={s.container_two}>
            <div className={s.content}>
              <p className={s.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum,
                adipiscing amet in egestas sem dui, arcu faucibus scelerisque.
                Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh
                quis. Tortor donec pellentesque leo ac placerat. Morbi.
              </p>
            </div>
            <div className={s.block}>
              <div className={s.content}>
                <h4 className={s.title}>Контакты</h4>
                <p className={s.text}>+7 (812) 123-45-67</p>
                <p className={s.text}>+7 (911) 123-45-67</p>
                <p className={s.text}>Новоостровский проспект, дом 36 лит. С</p>
              </div>
              <div className={s.content}>
                <h4 className={s.title}>Режим работы</h4>
                <p className={s.text}>C 10:00 до 21:00 (Пн-Пт)</p>
                <p className={s.text}>С 11:00 до 20:00 (Сб-Вс)</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Popup;

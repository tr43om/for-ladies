import "./Home.scss";
import { useLocation, NavLink } from "react-router-dom";

export const Home = () => {
  const search = useLocation();
  console.log(search);
  return (
    <>
      <header className="home">
        <h1 className="home__title">Дорогие девушки 💕</h1>
        <h3 className="home__subtitle">ЕСТЬ ДЕЛО </h3>
        <h5 className="home__subtitle--5">
          Раскидали по корпусу розовые пиар кодики 😏 . Найдите пожалуйста
        </h5>
        <h2 className="home__subtitle">🔎 Вот где они находятся:</h2>
        <ul className="home__list">
          <li className="home__item">
            🌷 <span className="home__name">Катя</span> - иди туда где мы берем
            методички
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Диана</span> - иди туда где вкусные
            сырники подают
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Вика Б</span> - иди (а никуда не
            иди, тебя в универе нет. можно тыкать на кнопку 😝)
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Алёна</span> - иди гди обитают
            испанские мемы
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Аня</span> - иди туда, где еще в
            прошлом семестре поднимались на физру
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Вика П</span> - а ты книжки все
            сдала? иди туда и проверь (уточни у библиотекаря)
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Женя</span> - на втором этаже очень
            комфортабельные синие пуфики. посмотри в окно (крайнее правое)
          </li>
          <li className="home__item">
            🌷 <span className="home__name">Лина</span> - иди и сними немного
            наличных (единственный и неповторимый банкомат)
          </li>
        </ul>
      </header>
      <NavLink className="home__button" to="/whoIsIt">
        Я пришла. Что дальше-то?
      </NavLink>
      <p className="home__dont">
        Вот только не нажимай, пока не придёшь, ок? 😰
      </p>
    </>
  );
};

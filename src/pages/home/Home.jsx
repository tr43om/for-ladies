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
        <ul className="home__list">
          <li className="home__item">🌷 Катя - иди</li>
          <li className="home__item">🌷 Диана - иди</li>
          <li className="home__item">🌷 Вика Б- иди</li>
          <li className="home__item">🌷 Алена - иди</li>
          <li className="home__item">🌷 Аня - иди</li>
          <li className="home__item">🌷 Вика П - иди</li>
          <li className="home__item">🌷 Женя - иди</li>
          <li className="home__item">🌷 Лина - иди</li>
        </ul>
      </header>
      <NavLink className="home__button" to="/whoIsIt">
        Я пришла. Что дальше то?
      </NavLink>
    </>
  );
};

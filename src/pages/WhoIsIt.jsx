import { NavLink } from "react-router-dom";

export const WhoIsIt = () => {
  return (
    <nav className="navigation">
      <h1 className="navigation__title">Первый вопрос: твоё имя 🤔</h1>
      <div className="navigation__links">
        <NavLink to="/Katya?Katya" className="navigation__name">
          👉 Катя
        </NavLink>
        <NavLink to="/Diana" className="navigation__name">
          👉 Диана
        </NavLink>
        <NavLink to="/VikaB" className="navigation__name">
          👉 Вика Б
        </NavLink>
        <NavLink to="/VikaP" className="navigation__name">
          👉 Вика П
        </NavLink>
        <NavLink to="/Jenya" className="navigation__name">
          👉 Женя
        </NavLink>
        <NavLink to="/Anya" className="navigation__name">
          👉 Аня
        </NavLink>
        <NavLink to="/Lina" className="navigation__name">
          👉 Лина
        </NavLink>
        <NavLink to="/Alena" className="navigation__name">
          👉 Алена
        </NavLink>
      </div>
    </nav>
  );
};

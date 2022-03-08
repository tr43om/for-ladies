import { Input } from "../components/Input";
import { useLocation } from "react-router-dom";

export const Katya = () => {
  const name = "Катя";
  const question = "Как будет охота на сов по французски?";

  return (
    <>
      <Input label="атвичай, Катя" name={name} question={question} />
    </>
  );
};

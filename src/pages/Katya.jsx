import { Input } from "../components/Input";
import { useLocation } from "react-router-dom";
import { Question } from "../components/Question";

export const Katya = () => {
  const name = "Катя";
  const question = "Как будет охота на сов по французски?";

  return (
    <>
      <Question question={question} />
      <Input label="атвичай, Катя" name={name} question={question} />
    </>
  );
};

import { Input } from "../components/Input";

export const Katya = () => {
  const name = "Катя";
  const question = "Как будет охота на сов по французски?";

  return (
    <>
      <Input label="атвичай, Катя" name={name} question={question} />
    </>
  );
};

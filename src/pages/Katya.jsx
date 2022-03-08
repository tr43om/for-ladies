import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";

export const Katya = () => {
  const riddle = riddles[Math.floor(Math.random() * riddles.length)];
  const name = "Катя";
  const question = riddle.question;

  return (
    <>
      <Question question={question} />
      <Input
        label="атвичай, Катя"
        name={name}
        question={question}
        answer={riddle.answer}
      />
    </>
  );
};

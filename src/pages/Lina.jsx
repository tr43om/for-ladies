import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";

export const Lina = () => {
  const riddle = riddles[Math.floor(Math.random() * riddles.length)];
  return (
    <>
      <Question question={riddle.question} />
      <Input
        label="АТВИЧАЙ, ЛИНА"
        name="Лина"
        answer={riddle.answer}
        question={riddle.question}
      />
    </>
  );
};

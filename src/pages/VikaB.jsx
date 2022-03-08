import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const VikaB = () => {
  const riddle = riddles[Math.floor(Math.random() * riddles.length)];
  return (
    <>
      <Question question={riddle.question} />
      <Input
        label="АТВИЧАЙ, ВИКА"
        name="Вика Б"
        answer={riddle.answer}
        question={riddle.question}
      />
    </>
  );
};

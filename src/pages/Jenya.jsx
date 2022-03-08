import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const Jenya = () => {
  const riddle = riddles[Math.floor(Math.random() * riddles.length)];
  return (
    <>
      <Question question={riddle.question} />
      <Input
        label="АТВИЧАЙ, ЖЕНЯ"
        name="Женя"
        answer={riddle.answer}
        question={riddle.question}
      />
    </>
  );
};

import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";

export const Lina = () => {
  return (
    <>
      <Question question={riddles[2].question} />
      <Input
        label="АТВИЧАЙ, ЛИНА"
        name="Лина"
        answer={riddles[2].answer}
        question={riddles[2].question}
      />
    </>
  );
};

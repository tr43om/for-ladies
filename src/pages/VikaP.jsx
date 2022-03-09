import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const VikaP = () => {
  return (
    <>
      <Question question={riddles[1].question} />
      <Input
        label="АТВИЧАЙ, ВИКА"
        name="Вика П"
        answer={riddles[1].answer}
        question={riddles[1].question}
      />
    </>
  );
};

import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const Anya = () => {
  return (
    <>
      <Question question={riddles[4].question} />
      <Input
        label="АТВИЧАЙ, АНЯ"
        name="Аня"
        answer={riddles[4].answer}
        question={riddles[4].question}
      />
    </>
  );
};

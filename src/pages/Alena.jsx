import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const Alena = () => {
  return (
    <>
      <Question question={riddles[0].question} />
      <Input
        label="АТВИЧАЙ, АЛЁНА"
        name="Алёна"
        answer={riddles[0].answer}
        question={riddles[0].question}
      />
    </>
  );
};

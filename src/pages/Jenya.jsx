import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const Jenya = () => {
  return (
    <>
      <Question question={riddles[5].question} />
      <Input
        label="АТВИЧАЙ, ЖЕНЯ"
        name="Женя"
        answer={riddles[5].answer}
        question={riddles[5].question}
      />
    </>
  );
};

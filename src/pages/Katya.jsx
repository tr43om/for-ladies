import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";

export const Katya = () => {
  const name = "Катя";
  const question = riddles[3].question;

  return (
    <>
      <Question question={question} />
      <Input
        label="атвичай, Катя"
        name={name}
        question={question}
        answer={riddles[3].answer}
      />
    </>
  );
};

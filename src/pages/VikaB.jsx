import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const VikaB = () => {
  return (
    <>
      <Question question={"25 * 2 - (40 + 2) = ? (вчера)"} />
      <Input
        label="АТВИЧАЙ, ВИКА"
        name="Вика Б"
        answer={"8"}
        question={"25 * 2 - (40 + 2) = ? (вчера)"}
      />
    </>
  );
};

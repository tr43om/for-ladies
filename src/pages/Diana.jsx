import { Input } from "../components/Input";
import { Question } from "../components/Question";
import { riddles } from "../data/riddles";
export const Diana = () => {
  return (
    <>
      <Question question={"где Катя было целый семестр?"} />
      <Input
        label="АТВИЧАЙ, ДИАНА"
        name="Диана"
        answer={"в Брюсселе"}
        question={"где Катя была целый семестр?"}
      />
    </>
  );
};

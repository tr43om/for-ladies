import "./Question.scss";
export const Question = ({ question }) => {
  return (
    <div className="question">
      <div className="question__title">ВОТ ТВОЙ ВОПРОС🤔:</div>
      <div className="question__text"> {question}</div>
    </div>
  );
};

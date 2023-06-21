import React from "react";
// import questions from "./data";
import SingQues from "./SingQues";

const Ques = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1> questions </h1>
      {questions.map((question) => {
        return (
          <SingQues
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Ques;

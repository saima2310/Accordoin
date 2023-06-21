import { useState } from "react";
import data from "./data";

import Ques from "./Ques";

const Appp = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    console.log(id);
    console.log(newActiveId, "new");
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Ques
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default Appp;

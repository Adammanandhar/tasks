import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    const changeQuestionType = () => {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };

    return (
        <div>
            <div>
                {questionType === "multiple_choice_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </div>
            <Button onClick={changeQuestionType}>Change Type</Button>
        </div>
    );
}

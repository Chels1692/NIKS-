import {useState, useEffect, forwardRef} from 'react';
import {Link} from "react-router-dom";
import QuestionBlock from "./qblock";
import step1 from "../img/step1.png";
import step2 from "../img/step2.png";
import step3 from "../img/step3.png";

const QuestionsBlock = ({id, length, quizItem, chosenAnswer, setChosenAnswer, unansweredQuestionIds, setUnansweredQuestionIds, answerRef, refs}, ref) => {
    const [active, setActive] = useState(false);
    let isHidden = "hidden";
    for(let i = 0; i < length; i++) {
        if(quizItem.id === length - 1){
            isHidden = "";
        }
    }

    useEffect(() => {
        if(chosenAnswer.length > 0) {
            if(unansweredQuestionIds.length <= 0 && chosenAnswer.length >= 1) {
                setActive(true);
            } else {
                const highestId = Math.min(...unansweredQuestionIds)
                refs[highestId].current.scrollIntoView({behavior: 'smooth'})
            }
        }
    }, [active, chosenAnswer, unansweredQuestionIds, answerRef, refs])
    const imgs = [step1, step2, step3];

    return (
        <section ref={ref} id="quiz-items">
            <div className='questions-container'>
                <img src={imgs[id]}/>
                <h3 className="question-title">{quizItem.question}</h3>
                <div className="choices-container">
                    {quizItem.choices && quizItem.choices?.map((choice, _index) => (
                        <QuestionBlock 
                            key={_index}
                            quizItem={quizItem}
                            quizItemId={quizItem.id}
                            choices={quizItem.choices}
                            choice={choice}
                            chosenAnswer={chosenAnswer}
                            setChosenAnswer={setChosenAnswer}
                            unansweredQuestionIds={unansweredQuestionIds}
                            setUnansweredQuestionIds={setUnansweredQuestionIds}
                        />
                    ))}
                </div>
                {active
                    ? <Link to="/results" state={{answers: chosenAnswer}} className={isHidden}><button className="button button--pandora" disabled={false}><span>SUBMIT</span></button></Link>
                    : <Link to="/results" className={isHidden} style={{pointerEvents: "none"}} onClick={event => event.preventDefault()}><button className="button button--disabled" disabled={true}><span>SUBMIT</span></button></Link>
                }
            </div>
        </section>
    );
}

export default forwardRef(QuestionsBlock);
// import {useState} from 'react';
const QuestionBlock = ({choices, choice, quizItemId, setChosenAnswer, chosenAnswer, unansweredQuestionIds, setUnansweredQuestionIds}) => {
    // const [active, setActive] = useState();
    // let isActive = active;
    // let classes = "choice-btn";
    // classes += isActive === true ? " active" : "";
    const handleClick = () => {
        // setActive(choice.text);
        if(unansweredQuestionIds.includes(quizItemId) === false) {
            setChosenAnswer(prevState => {
                let list = [...prevState];
                list[quizItemId] = choice.text;
                return(list);
            });
        } else {
            setChosenAnswer((prevState) => [...prevState, choice.text]);
            setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id !== quizItemId));
        }
        // isActive = true;
        // console.log(active === choice.text)

    };

    return (
        <>
        {/* key={choice.text} active={active === choice.text} */}
            <div>
                <input type="radio" name={quizItemId} id={choice.text} value={choice.text}/>
                <label className="choice-label" for={choice.text}>
                <button className="choice-btn"  onClick={handleClick}>
                    {choice.text}
                </button>
                </label>
            </div>
        </>
    );
}

export default QuestionBlock;
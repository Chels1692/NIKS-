const QuestionBlock = ({choices, choice, quizItemId, setChosenAnswer, chosenAnswer, unansweredQuestionIds, setUnansweredQuestionIds}) => {
    const handleClick = () => {
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
    };

    return (
        <>
            <div>
                <input type="radio" name={quizItemId} id={choice.text} value={choice.text} onChange={handleClick}/>
                <label className="choice-btn" htmlFor={choice.text}>
                    {choice.text}
                </label>
            </div>
        </>
    );
}

export default QuestionBlock;
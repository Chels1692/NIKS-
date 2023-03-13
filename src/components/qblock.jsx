const QuestionBlock = ({choice, quizItemId, setChosenAnswer, chosenAnswer, unansweredQuestionIds, setUnansweredQuestionIds}) => {
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
            <button className="choice-btn" onClick={handleClick}>
                {choice.text}
            </button>
        </>
    );
}

export default QuestionBlock;
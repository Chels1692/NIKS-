const QuestionBlock = ({choice, quizItemId, setChosenAnswer, chosenAnswer, unansweredQuestionIds, setUnansweredQuestionIds}) => {
    const [active, setActive] = useState(false);
    let isActive = false;
    let classes = "choice-btn";
    classes += isActive === true ? "active" : "";
    const handleClick = (e) => {
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
        isActive = true;
        setActive(true);
    };

    return (
        <>
            <button className={isActive} onClick={handleClick}>
                {choice.text}
            </button>
        </>
    );
}

export default QuestionBlock;
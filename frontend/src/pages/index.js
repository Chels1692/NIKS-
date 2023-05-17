import {useState, useEffect, useRef, createRef} from 'react';
import Header from "../components/header";
import QuestionsBlock from "../components/qsblock";

const Home = () => {
    const [chosenAnswer, setChosenAnswer] = useState([]);
    const [unansweredQuestionIds, setUnansweredQuestionIds] = useState([]);
    const refs = unansweredQuestionIds && unansweredQuestionIds?.reduce((acc, id) => {
        acc[id] = createRef();
        return acc;
    }, {})
    const answerRef = createRef()
    const quizRef = useRef(null);
    const startQuizScroll = () => quizRef.current.scrollIntoView({behavior: 'smooth'})
    
    useEffect(() => {
        const unansweredIds = quiz && quiz?.map(({id}) => id);
        setUnansweredQuestionIds(unansweredIds);
    }, [quiz])

    return (
        <>
            <div className="homepage">
                <Header />
                <div className="hero-container">
                    <div className="hero">
                        <p className="hero-text">WE LOVE SKIN. SKIN SKIN SKIN . YOU HAVE SKIN AND I HAVE SKIN WE ALL HAVE SKIN. GIVE ME YOUR SKIN.</p>
                        <button className="button button--pandora" onClick={startQuizScroll}><span>TAKE QUIZ</span></button>
                    </div>
                </div>
            </div>
            <div ref={quizRef} className="quiz-container">
                {quiz && quiz?.map(content => (
                    <QuestionsBlock 
                        key={content.id}
                        id={content.id}
                        length={quiz.length}
                        quizItem={content}
                        chosenAnswer={chosenAnswer}
                        setChosenAnswer={setChosenAnswer}
                        unansweredQuestionIds={unansweredQuestionIds}
                        setUnansweredQuestionIds={setUnansweredQuestionIds}
                        refs={refs}
                        ref={refs[content.id]}
                        answerRef={answerRef}
                    />
                ))}
            </div>
        </>
    );
};

const quiz = [
    {
        id: 0,
        question: "What is your skin type?",
        choices: [
            {
                "text": "Oily"
            },
            {
                "text": "Dry"
            },
            {
                "text": "Combination"
            },
            {
                "text": "Normal"
            }
        ]
    },
    {
        id: 1,
        question: "What is your top skin concern?",
        choices: [
            {
                "text": "Acne"
            },
            {
                "text": "Aging"
            },
            {
                "text": "Redness"
            },
            {
                "text": "Texture"
            },
            {
                "text": "Pigmentation"
            }
        ]
    },
    {
        id: 2,
        question: "What are you looking for in a skin care routine?",
        choices: [
            {
                "text": "Simple"
            },
            {
                "text": "Expanded"
            }
        ]
    }
]

export default Home;
import React, { useState } from 'react';

import './style.scss';
import questions from 'questions';
import AnswerButton from '../AnswerButton';
import MobileBtn from '../MobileBtn';

const Game = ({ handleFinishGame, setScore }) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [openScore, setOpenScore] = useState(false);

    const currentQuestion = questions[questionNumber];
    const questionsLength = questions.length - 1;

    const handleCorrectAnswer = () => {
        if (questionNumber === questionsLength) {
            handleFinishGame();
        } else {
            setQuestionNumber(prev => prev + 1);
        }
    };

    return (
        <div className="game"> 
            <div className="game__inner">
            <h2 className="game__title">{currentQuestion.question}</h2>

                <div className="game__answers">
                    {currentQuestion.answers.map(item => {
                        return (
                            <AnswerButton 
                                key={item.letter} 
                                letter={item.letter} 
                                text={item.answer} 
                                currentQuestion={currentQuestion}
                                handleCorrectAnswer={handleCorrectAnswer}
                                handleFinishGame={handleFinishGame}
                                setScore={setScore}
                            />
                        );
                    })}
                </div>
            </div>

            <div className={`game__aside-wrapper ${openScore ? 'open' : ''}`}>
                <aside className="game__rewards">
                    <ul className="game__rewards-list rewards-list">
                        {[...questions].reverse().map((question, i) => {
                            const reward = question.reward;
                            const reversedIndex = questionsLength - i;
                            let state = '';

                            if (reversedIndex === questionNumber) {
                                state = 'current';
                            } else if (reversedIndex < questionNumber) {
                                state = 'previous';
                            }

                            return (
                                <li className={`rewards-list__item ${state}`} key={reward}>
                                    <span className="top-hexagon"></span>
                                    {reward}
                                    <span className="bottom-hexagon"></span>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
            </div>
            

            <MobileBtn setOpenScore={setOpenScore} />
        </div>
    )
};

export default Game;

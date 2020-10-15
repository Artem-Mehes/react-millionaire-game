import React, { useState } from 'react';

import './style.scss';

const AnswerButton = ({ letter, text, currentQuestion, handleCorrectAnswer, handleFinishGame, setScore }) => {
    const [selected, setSelected] = useState(false);
    const [isCorrect, setIsCorrent] = useState(false);
    const [isWrong, setIsWrong] = useState(false);

    const handleClick = e => {
        setSelected(true);

        const letter = e.currentTarget.dataset.letter;

        e.persist();

        setTimeout(() => {
            setSelected(false);

            if ( currentQuestion.correct.includes(letter) ) {
                setIsCorrent(true);

                setTimeout(() => {
                    handleCorrectAnswer();
                    setScore(currentQuestion.reward);
                    setIsCorrent(false);
                }, 1000);
            } else {
                setIsWrong(true);

                setTimeout(() => {
                    handleFinishGame();
                }, 1000);
            }
        }, 1000);
    };

    let stateClass = '';

    switch (true) {
        case selected:
            stateClass = 'selected';
            break;
        case isCorrect:
            stateClass = 'correct';
            break;
        case isWrong:
            stateClass = 'wrong';
            break; 
        default:
            stateClass = '';
    }

    return (
        <button
            className={`game__answer answer-btn answer-btn--${stateClass}`}
            onClick={handleClick}
            data-letter={letter}
        >
            <span className="top-hexagon"></span>
            <span className="answer-btn__letter">{letter}</span>
            <span className="answer-btn__text">{text}</span>
            <span className="bottom-hexagon"></span>
        </button>
    )
}

export default AnswerButton;

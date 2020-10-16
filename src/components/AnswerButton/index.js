import React, { useState } from 'react';

import './style.scss';
import { string, func, shape, arrayOf } from 'prop-types';

const AnswerButton = ({
	letter,
	text,
	currentQuestion,
	switchToNextQuestion,
	finishGame,
}) => {
	const [selected, setSelected] = useState(false);
	const [correct, setCorreсt] = useState(false);
	const [wrong, setWrong] = useState(false);

	const handleClick = (e) => {
		setSelected(true);

		const letter = e.currentTarget.dataset.letter;
		e.persist();

		setTimeout(() => {
			setSelected(false);

			currentQuestion.correct.includes(letter)
				? handleCorrectAnswer()
				: handleWrongAnswer();
		}, 1000);
	};

	const handleCorrectAnswer = () => {
		setCorreсt(true);

		setTimeout(() => {
			switchToNextQuestion();
			setCorreсt(false);
		}, 1000);
	};

	const handleWrongAnswer = () => {
		setWrong(true);

		setTimeout(() => {
			finishGame();
		}, 1000);
	};

	let stateClass = '';

	switch (true) {
		case selected:
			stateClass = 'selected';
			break;
		case correct:
			stateClass = 'correct';
			break;
		case wrong:
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
	);
};

AnswerButton.propTypes = {
	letter: string,
	text: string,
	currentQuestion: shape({
		correct: arrayOf(string),
		reward: string,
	}),
	finishGame: func,
	switchToNextQuestion: func,
};

export default AnswerButton;

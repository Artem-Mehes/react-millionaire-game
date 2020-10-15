import React from 'react';

import './style.scss';
import background from 'images/game-start-bg.png';

const HomeScreen = ({ gameFinished, setGameStarted, score }) => {
    let title = '';
    let btnText = '';

    if (gameFinished) {
        title = <>
                    <p className="home__score">Total Score:</p>
                    <h2 className="home__title">{`${score || '$0'} earned`}</h2>
                </>;

        btnText = 'Try Again';
    } else {
        title = <h1 className="home__title">Who wants to be a millionaire?</h1>;

        btnText = 'Start';
    }

    return (
        <div className="home" style={gameFinished ? {} : { backgroundImage: `url(${background})` }}>
            <section className="home__section">
                <img className="home__hand" src={require('images/hand.svg')} alt="hand" />

                <div className="home__inner">
                    {title}

                    <button className="home__button" onClick={() => setGameStarted(true)}>{btnText}</button>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen;

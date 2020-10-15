import React, { useState } from 'react';

import './styles/globalStyles.scss';

import Game from './components/Game';
import HomeScreen from './components/HomeScreen';

const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [score, setScore] = useState('');

    const handleFinishGame = () => {
        setGameStarted(false);
        setGameFinished(true);
    };

    let output;

    if (gameStarted) {
        output = <Game handleFinishGame={handleFinishGame} setScore={setScore} />
    } else if (gameFinished) {
        output = <HomeScreen
                    gameFinished={gameFinished}
                    score={score}
                    setGameStarted={setGameStarted} 
                />
    } else {
        output = <HomeScreen 
                    gameFinished={gameFinished}
                    setGameStarted={setGameStarted}
                />
    }

    return (
        <>
            <main>
                {output}
            </main>
        </>
    );
};

export default App;

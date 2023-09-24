import React, { useState, useEffect } from 'react';
import GameBoard from "../GameBoard/GameBoard";
import StartButton from "../StartButton/StartButton";
import WinnerResults from "../WinnerResults/WinnerResults";
import style from '../../styles/TicTacToe.module.scss';

// Функция для определения победителя в игре крестики-нолики
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}

function TicTacToe() {
    // Состояния компонента
    const [isLoading, setIsLoading] = useState(true);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [movesCount, setMovesCount] = useState(0);
    const [showWinnerPopup, setShowWinnerPopup] = useState(false);

    // Загрузка в 2 секунды
    useEffect(() => {
        const fetchData = async () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        };

        fetchData();
    }, []);

    // Функция для перезапуска игры
    const restartGame = () => {
        setIsGameStarted(true);
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
        setMovesCount(0);
        setShowWinnerPopup(false);
    };

    // Обработчик клика по ячейке на игровой доске
    const handleClick = (i) => {
        if (winner || board[i]) {
            return;
        }

        const newBoard = [...board];
        newBoard[i] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setMovesCount(movesCount + 1);

        const calculatedWinner = calculateWinner(newBoard);
        if (calculatedWinner) {
            setWinner(calculatedWinner);
            setShowWinnerPopup(true);
        } else if (movesCount + 1 === 9) {
            setWinner('Draw');
            setShowWinnerPopup(true);
        }
    };

    // Функция для рендеринга отдельной ячейки на доске
    const renderSquare = (i) => (
        <button className={style.square} onClick={() => handleClick(i)}>
            {board[i]}
        </button>
    );

    // Функция для рендеринга содержимого игры (доски или стартовой кнопки)
    const renderGameContent = () => {
        if (isLoading) {
            return (
                <div className={style.preloaderContainer}>
                    <div className={style.preloader}></div>
                </div>
            );
        } else if (isGameStarted) {
            return (
                <>
                    <GameBoard
                        board={board}
                        handleClick={handleClick}
                        renderSquare={renderSquare}
                    />
                    {showWinnerPopup && <WinnerResults winner={winner} startGame={restartGame} />}
                </>
            );
        } else {
            return <StartButton onStartClick={restartGame} />;
        }
    };

    return (
        <div className={style.centerContainer}>
            <div className={style.gameBoard}>
                {renderGameContent()}
            </div>
        </div>
    );
}

export default TicTacToe;

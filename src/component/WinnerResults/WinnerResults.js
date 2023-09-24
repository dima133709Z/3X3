import React from 'react';
import style from '../../styles/WinnerResults.module.scss'

// Определяем функциональный компонент WinnerResults, который принимает два параметра: winner и startGame
function WinnerResults({ winner, startGame }) {
    return (
        <div className={style.popup}>
            <div className={style.popupContent}>
                <div className={style.popupText}>
                    {/* Выводим текст в зависимости от значения переменной winner */}
                    {winner ? (winner === 'Draw' ? "Ничья!" : 'Победитель: ' + winner) : 'Следующий игрок: '}
                </div>
                <button className={style.startNewGame} onClick={startGame}>
                    Начать новую игру
                </button>
            </div>
        </div>
    );
}

// Экспортируем компонент WinnerResults для его использования в других частях приложения
export default WinnerResults;

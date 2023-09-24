import React from 'react';
import style from '../../styles/GameBoard.module.scss';

function GameBoard(props) {
    return (
        <div className={style.board}>
            <div className={style.board__row}>
                {props.renderSquare(0)}
                {props.renderSquare(1)}
                {props.renderSquare(2)}
            </div>
            <div className={style.board__row}>
                {props.renderSquare(3)}
                {props.renderSquare(4)}
                {props.renderSquare(5)}
            </div>
            <div className={style.board__row}>
                {props.renderSquare(6)}
                {props.renderSquare(7)}
                {props.renderSquare(8)}
            </div>
        </div>
    );
}

export default GameBoard;

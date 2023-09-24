import React from 'react';
import style from '../../styles/StartButton.module.scss'

// Компонент StartButton принимает один пропс (props) - функцию onStartClick.
// При клике на кнопку будет вызвана функция onStartClick из родительского компонента
function StartButton(props) {
    return (
        <button onClick={props.onStartClick} className={style.start}>Cтарт</button>
    );
}

export default StartButton;

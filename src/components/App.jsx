import React, { useState } from "react";
import FieldLayout from "./Field/Field";
import InformationLayout from "./Information/Information";
import PropTypes from "prop-types";
import styles from '../styles/App.module.css'



const App =() => {
//отдельно массив поля
	const fieldArr = ['', '', '',
		'', '', '',
		'', '', '',
	   ]

	// чей ход - может быть 0 или Х  - дефолт - Х
const [currentPlayer, setCurrentPlayer] = useState('X')

//  была ли завершена игра.
const [isGameEnded, setIsGameEnded] = useState(false)

//  была ли ничья
const [isDraw, setIsDraw] = useState (false)

// массив клеток игрового поля, состоящий из 9 пустых строк (3x3).
const [field, setField] = useState(
	fieldArr)

//обнуление состояний везде
const handlClickReset =() => {
	setCurrentPlayer('X')
	setIsGameEnded(false)
	setField(fieldArr)
	setIsDraw(false)
}


	return (
<div
className={`${styles.container}
currentPlayer === 'X'
? styles.currentPlayerX
: styles.currentPlayerO
`}
>
<button
className={styles.btn}
onClick={() =>handlClickReset()}
>Начать занова</button>


{/* isGameEnded, setIsDraw, isDraw, field, setField, currentPlayer, setCurrentPlayer, setIsGameEnded */}
<FieldLayout
isGameEnded={isGameEnded}
setIsDraw={setIsDraw}
isDraw={isDraw}
field={field}
setField={setField}
currentPlayer={currentPlayer}
setCurrentPlayer={setCurrentPlayer}
setIsGameEnded={setIsGameEnded}

/>
<InformationLayout
currentPlayer={currentPlayer}  isGameEnded={isGameEnded}  isDraw={isDraw}

/>

</div>

	)
}

App.proptypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setCurrentPlayer: PropTypes.func,
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setField: PropTypes.func.isRequired,
};

export default App;


import React from "react";
import styles from './Field.module.css'
import PropTypes from "prop-types";


const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

const FieldLayout = ({
	isGameEnded,
	setIsDraw,
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	setIsGameEnded,
}) => {

	const checkWin = (field, currentPlayer) =>
		WIN_PATTERNS.some((winPattern) =>
			winPattern.every((cellIndex) => field[cellIndex] === currentPlayer)
		);

		const handlClickReset =(index) => {
			if(isGameEnded || field[index] !== '') return

//создам новый массив для работы - передам клик на заполнение массива клетки этой и задам новое состояние массива
const newField = [...field]
newField[index] = currentPlayer
setField(newField)

const isWin = checkWin(newField, currentPlayer)
const getIsDraw = !isWin && !newField.includes('')

if(isWin) {
	setIsGameEnded(true)
	return
}
if (getIsDraw) {
	setIsDraw(true)
	setIsGameEnded(true)
	return
}
else {
	setCurrentPlayer((prev) => (prev === 'X'? 'O' : 'X'))
}

console.log(checkWin(newField, currentPlayer));
		console.log(newField);


		}


	return <div className={styles.container}>{field.map((cell, index) =>
<button
className={`${styles.btn}
${
	cell === 'X'
	? styles.cellX
	: cell === 'O'
	? styles.cellO
	 : ''
}`}

key={index}
onClick={()=> handlClickReset(index)}
disabled={cell !== ''}
>
	{cell}
</button>
	)}</div>;
};

FieldLayout.proptypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setCurrentPlayer: PropTypes.func,
	currentPlayer: PropTypes.oneOf(["X", "O"]).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setField: PropTypes.func.isRequired,
};

export default FieldLayout;

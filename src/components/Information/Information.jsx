import React from "react";
import PropTypes from "prop-types";
import styles from './Information.module.css'

const InformationLayout = ({isGameEnded, isDraw,currentPlayer}) => {


	const checkStatus =() => {
		if(isDraw) {
			return 'Ничья'
		}
		if(isGameEnded) {
			return `победа ${currentPlayer}`
		}
		else {
		return  `ход игрока: ${currentPlayer}`
		}

	}

	return (

		<div>
			<p
			className={styles.text}
			>
				{checkStatus()}
			</p>
		</div>
	)
}

InformationLayout.proptypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	setCurrentPlayer: PropTypes.func,
	currentPlayer: PropTypes.oneOf(["X", "O"]).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	setField: PropTypes.func.isRequired,
};

export default InformationLayout;

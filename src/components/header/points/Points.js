import React from "react";

const Points = ({ points, onClickHandler }) => {
	return (
		<span
			style={{ marginLeft: "1rem" }}
			onClick={onClickHandler}
			data-test="points-container">
			<i className="far fa-money-bill-alt"></i>
			<span style={{ paddingLeft: "10px" }} data-test="points-amount">
				${new Intl.NumberFormat().format(points)}
			</span>
		</span>
	);
};

export default Points;

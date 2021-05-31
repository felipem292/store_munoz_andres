import React from "react";
import CSS from "./success.module.css";

const Success = ({ message, onClickHandler }) => {
	return (
		<div className={CSS.success} onClick={onClickHandler}>
			<span className={CSS.close}>X</span>
			<span>{message}</span>
		</div>
	);
};

export default Success;

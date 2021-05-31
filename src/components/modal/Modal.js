import React from "react";
import CSS from "./Modal.module.css";

const Modal = ({ children }) => {
	return (
		<div className={CSS.modal}>
			<div className={CSS.children}>{children}</div>
		</div>
	);
};

export default Modal;

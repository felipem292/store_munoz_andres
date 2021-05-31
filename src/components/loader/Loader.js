import React from "react";
import CSS from "./loader.module.css";

const Loader = () => {
	return (
		<div className={CSS.lds_grid}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;

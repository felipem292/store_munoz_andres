import React from "react";
import errorImage from "../../assets/images/error.jpg";

const Error = ({ errorMessage }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				minHeight: "100vh",
				minWidth: "100vw",
				textAlign: "center",
				alignItems: "center",
			}}>
			<img width="50%" src={errorImage} alt="Error Message" />
			<span>We're sorry, We're facing some issues :( </span>
			<span>Error ocurred: {errorMessage}</span>
		</div>
	);
};

export default Error;

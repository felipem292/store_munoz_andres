import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/home/Home";
import { RewardStoreProvider } from "./components/providers/RewardStoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
ReactDOM.render(
	<React.StrictMode>
		<RewardStoreProvider>
			<Router>
				<Home />
			</Router>
		</RewardStoreProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

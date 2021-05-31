import React, { useEffect } from "react";
import Header from "../header/Header";
import { useRewardStore } from "../providers/RewardStoreProvider";
import Modal from "../modal/Modal";
import Loader from "../loader/Loader";
import { Switch, Route } from "react-router-dom";
import History from "../history/History";
import Redeem from "../redeem/Redeem";
import { getUserInfo } from "../../asyncActions/AsynActions";
import Error from "../error/Error";
import Success from "../success/Success";
import { UPDATE_SUCCESS_MESSAGE } from "../../constants/actions";
import { Hero } from "../hero/Hero";

const Home = () => {
	const [state, dispatch] = useRewardStore();

	useEffect(() => {
		getUserInfo(dispatch);
	}, [dispatch]);

	const clearSuccessMesage = () => {
		dispatch({
			type: UPDATE_SUCCESS_MESSAGE,
			payload: null,
		});
	};

	return (
		<div>
			{state.error ? (
				<Error errorMessage={state.error.message} />
			) : (
				<>
					{state.loading && (
						<Modal>
							<Loader />
						</Modal>
					)}
					<Header />
					<Hero />
					<div style={{ padding: "0px 5%" }}>
						<Switch>
							<Route exact path="/history">
								<History />
							</Route>
							<Route path="/">
								<Redeem />
							</Route>
						</Switch>
					</div>
					{state.successMesage && (
						<Success
							message={state.successMesage}
							onClickHandler={clearSuccessMesage}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default Home;

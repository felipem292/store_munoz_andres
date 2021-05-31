import React from "react";
import { rewardStoreReducer } from "../../reducers/reward-store-reducer";

const RewardStoreStateContext = React.createContext();
const RewardStoreDispatchContext = React.createContext();

const RewardStoreProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(rewardStoreReducer, {
		user: null,
		error: null,
		products: null,
		productsByUser: null,
		points: null,
		loading: false,
		successMesage: null,
	});
	return (
		<RewardStoreStateContext.Provider value={state}>
			<RewardStoreDispatchContext.Provider value={dispatch}>
				{children}
			</RewardStoreDispatchContext.Provider>
		</RewardStoreStateContext.Provider>
	);
};

function useRewardStoreState() {
	const context = React.useContext(RewardStoreStateContext);
	if (context === undefined) {
		throw new Error(
			"useRewardStoreState must be used within a RewardStoreProvider"
		);
	}
	return context;
}

function useRewardStoreDispatch() {
	const context = React.useContext(RewardStoreDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useRewardStoreDispatch must be used within a RewardStoreProvider"
		);
	}
	return context;
}

function useRewardStore() {
	return [useRewardStoreState(), useRewardStoreDispatch()];
}

export {
	RewardStoreProvider,
	useRewardStore,
	useRewardStoreState,
	useRewardStoreDispatch,
};

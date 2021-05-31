import {
	FETCH_USER_DETAILS,
	FETCH_USER_POINTS,
	FETCH_PRODUCTS_BY_USER,
	FETCH_PRODUCTS,
	ERROR,
	LOADING,
	UPDATE_SUCCESS_MESSAGE,
} from "../constants/actions";

export function rewardStoreReducer(state, action) {
	switch (action.type) {
		case FETCH_USER_DETAILS: {
			return { ...state, user: action.payload };
		}
		case FETCH_USER_POINTS: {
			return { ...state, points: action.payload };
		}
		case FETCH_PRODUCTS: {
			return { ...state, products: action.payload };
		}
		case FETCH_PRODUCTS_BY_USER: {
			return { ...state, productsByUser: action.payload };
		}
		case ERROR: {
			return { ...state, error: action.payload };
		}
		case LOADING: {
			return { ...state, loading: action.payload };
		}
		case UPDATE_SUCCESS_MESSAGE: {
			return { ...state, successMesage: action.payload };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

import axios from "../axios-reward-store";
import {
	FETCH_USER_DETAILS,
	FETCH_USER_POINTS,
	FETCH_PRODUCTS_BY_USER,
	FETCH_PRODUCTS,
	ERROR,
	LOADING,
} from "../constants/actions";

async function getUserInfo(dispatch) {
	try {
		dispatch({ type: LOADING, payload: true });
		const userInfo = await axios.get("user/me");
		dispatch({ type: FETCH_USER_DETAILS, payload: userInfo.data.name });
		dispatch({ type: FETCH_USER_POINTS, payload: userInfo.data.points });
	} catch (error) {
		dispatch({ type: ERROR, payload: error });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
}

async function getUserProducts(dispatch) {
	try {
		dispatch({ type: LOADING, payload: true });
		const userProducts = await axios.get("user/history");
		const userProductsOrdered = userProducts.data.sort((a, b) =>
			a.createDate < b.createDate ? 1 : -1
		);
		dispatch({
			type: FETCH_PRODUCTS_BY_USER,
			payload: userProductsOrdered,
		});
	} catch (error) {
		dispatch({ type: ERROR, payload: error });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
}

async function getProducts(dispatch) {
	try {
		dispatch({ type: LOADING, payload: true });
		const productsData = await axios.get("products");
		dispatch({ type: FETCH_PRODUCTS, payload: productsData.data });
	} catch (error) {
		dispatch({ type: ERROR, payload: error });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
}

async function updatePoints(dispatch, pointsToGet = 1000) {
	try {
		dispatch({ type: LOADING, payload: true });
		const response = await axios.post("user/points", {
			amount: pointsToGet,
		});
		dispatch({
			type: FETCH_USER_POINTS,
			payload: response.data["New Points"],
		});
	} catch (error) {
		dispatch({ type: ERROR, payload: error });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
}

async function buyProductFlow(dispatch, productId) {
	await buyProduct(dispatch, productId);
	await getUserInfo(dispatch);
}

async function buyProduct(dispatch, productId) {
	try {
		dispatch({ type: LOADING, payload: true });
		await axios.post("redeem", {
			productId: productId,
		});
	} catch (error) {
		dispatch({ type: ERROR, payload: error });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
}
export {
	getUserInfo,
	getUserProducts,
	getProducts,
	updatePoints,
	buyProductFlow,
};

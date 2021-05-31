import React, { useEffect } from "react";
import Filters from "../filters/Filters";
import Products from "../products/Products";
import { useRewardStore } from "../providers/RewardStoreProvider";
import { getProducts } from "../../asyncActions/AsynActions";

const Redeem = () => {
	const [state, dispatch] = useRewardStore();

	useEffect(() => {
		getProducts(dispatch);
	}, [dispatch]);

	return (
		<>
			<Filters />
			<hr style={{ margin: "0px", color: "#CCC" }} />
			<Products products={state.products} />
		</>
	);
};

export default Redeem;

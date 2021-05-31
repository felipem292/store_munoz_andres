import React, { useState } from "react";
import { useRewardStoreDispatch } from "../providers/RewardStoreProvider";
import { buyProductFlow } from "../../asyncActions/AsynActions";
import Product from "./product/Product";
import CSS from "./products.module.css";
import { UPDATE_SUCCESS_MESSAGE } from "../../constants/actions";
import usePagination from "../hooks/usePagination";
import { Pagination } from "antd";
const Products = ({ products, redeeming = true }) => {
	const dispatch = useRewardStoreDispatch();
	let [page, setPage] = useState(1);
	const onBuyProductHandler = async (product) => {
		await buyProductFlow(dispatch, product._id);
		dispatch({
			type: UPDATE_SUCCESS_MESSAGE,
			payload: `${product.name} redeemed successfully`,
		});
	};
	const count = Math.ceil(!!products ? products.length : 0 / 12);

	const _DATA = usePagination(!!products ? products : [], 12);

	return (
		<div className={CSS.products}>
			{products &&
				_DATA
					.currentData()
					.map((product, index) => (
						<Product
							key={`${product._id}${index}`}
							product={product}
							onBuyProductHandler={
								redeeming
									? () => onBuyProductHandler(product)
									: null
							}
						/>
					))}
			<Pagination
				style={{ marginTop: "2rem" }}
				defaultCurrent={page}
				total={count}
				page={page}
				onChange={(page) => {
					setPage(page);

					_DATA.jump(page);
				}}
			/>
		</div>
	);
};

export default Products;

import React from "react";
import CSS from "./product.module.css";

const Product = ({ product, onBuyProductHandler }) => {
	return (
		<div className={CSS.product}>
			<img
				src={product.img.url}
				alt={product.name}
				className={CSS.image}
				data-test="product-image"
			/>
			<span data-test="product-category">
				Category: {product.category}
			</span>
			<span data-test="product-name">
				<strong>{product.name}</strong>
			</span>
			<span className={CSS.cost} data-test="product-cost">
				${Intl.NumberFormat().format(product.cost)}
			</span>
			{onBuyProductHandler && (
				<div className={CSS.divButton}>
					<button
						data-test="product-redeem-button"
						className={CSS.button}
						onClick={onBuyProductHandler}>
						Redeem now
					</button>
				</div>
			)}
		</div>
	);
};

export default Product;

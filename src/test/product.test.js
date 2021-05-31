import React from "react";
import { shallow } from "enzyme";
import Product from "../components/products/product/Product";
import { findByTestAttr } from "./utils";

const props = {
	product: {
		name: "Product Test",
		caterogy: "category Test",
		cost: 1234,
		img: { url: "urlToImage" },
	},
};

describe("<Product /> structure & content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Product {...props} />);
	});

	test("Name founded", () => {
		expect(findByTestAttr(wrapper, "product-name").exists()).toBe(true);
	});

	test("Category founded", () => {
		expect(findByTestAttr(wrapper, "product-category").exists()).toBe(true);
	});

	test("Costs founded", () => {
		expect(findByTestAttr(wrapper, "product-cost").exists()).toBe(true);
	});

	test("Redeem button NOT founded", () => {
		expect(findByTestAttr(wrapper, "product-redeem-button").exists()).toBe(
			false
		);
	});

	test("Redeem button founded", () => {
		const customProduct = shallow(
			<Product {...props} onBuyProductHandler={() => {}} />
		);
		expect(
			findByTestAttr(customProduct, "product-redeem-button").exists()
		).toBe(true);
	});

	test("Costs formatted correctly", () => {
		expect(findByTestAttr(wrapper, "product-cost").text()).toMatch(
			`$1,234`
		);
	});
});

describe("<Product /> logic", () => {
	let wrapper;
	const onBuyProductHandler = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<Product {...props} onBuyProductHandler={onBuyProductHandler} />
		);
	});

	test("onBuyProductHandler prop is called when the redeem button is clicked", () => {
		const redeemButton = findByTestAttr(wrapper, "product-redeem-button");
		redeemButton.simulate("click");
		expect(onBuyProductHandler).toHaveBeenCalled();
	});
});

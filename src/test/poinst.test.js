import React from "react";
import { shallow } from "enzyme";
import Points from "../components/header/points/Points";
import { findByTestAttr } from "./utils";

const props = {
	points: 12345,
};

describe("<Points /> structure & content", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Points {...props} />);
	});

	test("Points container", () => {
		expect(findByTestAttr(wrapper, "points-container").exists()).toBe(true);
	});

	test("Points founded", () => {
		expect(findByTestAttr(wrapper, "points-amount").exists()).toBe(true);
	});

	test("Points formatted correctly", () => {
		expect(findByTestAttr(wrapper, "points-amount").text()).toMatch(
			`$12,345`
		);
	});
});

describe("<Points /> logic", () => {
	let wrapper;
	const onClickHandler = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<Points {...props} onClickHandler={onClickHandler} />
		);
	});

	test("onClickHandler prop is called when the add points button is clicked", () => {
		const addPointsContainer = findByTestAttr(wrapper, "points-container");
		addPointsContainer.simulate("click");
		expect(onClickHandler).toHaveBeenCalled();
	});
});

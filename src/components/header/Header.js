import React from "react";
import CSS from "./Header.module.css";
import { useRewardStore } from "../providers/RewardStoreProvider";
import { updatePoints } from "../../asyncActions/AsynActions";
import Name from "./name/Name";
import Points from "./points/Points";
import { Link } from "react-router-dom";
import { UPDATE_SUCCESS_MESSAGE } from "../../constants/actions";
import { Select } from "antd";
import Axios from "axios";
const Header = () => {
	const [state, dispatch] = useRewardStore();
	const { Option } = Select;

	const updatePointsHandler = async (value) => {
		const pointsAvailable = [1000, 5000, 7500];
		console.log(value);
		const points = parseInt(value);

		await updatePoints(dispatch, points);
		dispatch({
			type: UPDATE_SUCCESS_MESSAGE,
			payload: `$${Intl.NumberFormat().format(
				points
			)} Points increased successfully`,
		});
	};

	return (
		<div className={CSS.header}>
			<Link to="/" className={CSS.box}>
				<Name name="" />
			</Link>
			<Link to="/history" className={CSS.box}>
				<i className="fas fa-history"></i> Historial de Canjes
			</Link>
			<div className={CSS.box}>
				{state.user}
				<Points
					onClickHandler={updatePointsHandler}
					points={state.points}
				/>
			</div>
			<div className={CSS.box}>
				<Select
					defaultValue="Añadir Puntos"
					style={{ width: "100%" }}
					onChange={updatePointsHandler}>
					<Option value="1000">1000</Option>
					<Option value="5000">5000</Option>
					<Option value="7500">7500</Option>
				</Select>
			</div>
		</div>
	);
};

export default Header;

import React from "react";
import SimpleCounter from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SecondsCounter";

//create your first component
const Home = (props) => {
	return (
	<div className="bigCounter">
		<div className="calendar">R</div>
		<div className="four">{props.numberfour}</div>
		<div className="three">{props.numberthree}</div>
		<div className="two">{props.numbertwo}</div>
		<div className="one">{props.numberone}</div>
	</div>

	);
};

export default Home;



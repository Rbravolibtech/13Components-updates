import React from "react";

const DemoOutput = (props) => {
	console.log("DEMO OUTPUT IS WORKING ");

	return <p className="paragraph"> {props.show ? "THIS IS NEW!" : ""}</p>;
};

export default DemoOutput;

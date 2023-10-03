import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
	console.log("DEMO OUTPUT IS WORKING ");

	return <p className="paragraph"> {props.show ? "THIS IS NEW!" : ""}</p>;
};

export default React.memo(DemoOutput);

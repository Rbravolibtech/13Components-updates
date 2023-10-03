import React from "react";

const MyParagraph = (props) => {
	console.log("DEMO OUTPUT IS RUNNING");

	return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default MyParagraph;

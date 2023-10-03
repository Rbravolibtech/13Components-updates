import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowParagraph] = useState(false);

	console.log("APP RUNNING");

	const clickHereHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	}, [allowToggle]);

	const clickHereNowHandle = () => {
		setAllowParagraph(true);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={clickHereHandler}>CLICK HERE!</Button>
			<Button onClick={clickHereNowHandle}>CLICK HERE NOW !</Button>
		</div>
	);
}

export default App;

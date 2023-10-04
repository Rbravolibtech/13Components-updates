import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowParagraph] = useState(false);
	const [showText, setShowText] = useState(true);

	const clickHereHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
	}, [allowToggle]);

	const clickHereNowHandle = () => {
		setShowText((prevShowText) => !prevShowText);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={showParagraph} />
			<Button onClick={clickHereHandler}>CLICK HERE!</Button>
			<DemoOutput show={showText} />
			{showText && <h2>I see you</h2>}
			<Button onClick={clickHereNowHandle}>CLICK HERE NOW !</Button>
		</div>
	);
}

export default App;

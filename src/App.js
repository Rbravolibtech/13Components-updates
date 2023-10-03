import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);

	console.log("APP RUNNING");

	const clickHereHandler = () => {
		setShowParagraph((prevShowParagraph) => !prevShowParagraph);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput />
			<Button onClick={clickHereHandler}>CLICK HERE!</Button>
		</div>
	);
}

export default App;

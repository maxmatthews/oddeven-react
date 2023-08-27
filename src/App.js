import "./App.css";
import { useEffect, useState } from "react";
import {
	calculateSwitchTime,
	determineParkingSide,
} from "./determineParkingSide";
import About from "./About";

function App() {
	const [isEven, setIsEven] = useState(determineParkingSide());
	const [switchTime, setSwitchTime] = useState(calculateSwitchTime());

	const minutesToSwitch = Math.round((switchTime - new Date()) / 1000 / 60);
	const hoursToSwitch = Math.floor(minutesToSwitch / 60);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsEven(determineParkingSide());
			setSwitchTime(calculateSwitchTime());
		}, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="App"
			style={{
				backgroundColor: isEven ? "#3369ff" : "#f75231",
				minHeight: "100vh",
			}}
		>
			<p style={{ color: "white" }}>side</p>
			{isEven ? <h1>Even</h1> : <h1>Odd</h1>}
			<h2>{new Date().getHours() < 18 ? "Before" : "After"} 6 pm</h2>
			<h2>
				On{" "}
				{switchTime.toLocaleDateString("default", {
					month: "long",
					day: "numeric",
				})}
			</h2>
			<p style={{ marginTop: 40, color: "white" }}>Next switch in:</p>
			<h3 style={{ margin: 0, color: hoursToSwitch < 2 ? "white" : "black" }}>
				{hoursToSwitch} hours and {minutesToSwitch % 60} minutes
			</h3>
			<About isEven={isEven} />
		</div>
	);
}

export default App;

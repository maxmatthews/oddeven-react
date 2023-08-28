import "./App.css";
import { useEffect, useState } from "react";
import {
	calculateSwitchTime,
	determineParkingSide,
	isFoolsDay,
	isOddDay,
} from "./determineParkingSide";
import About from "./About";

function App() {
	const [isEven, setIsEven] = useState(determineParkingSide());
	const [switchTime, setSwitchTime] = useState(calculateSwitchTime());
	const [foolsDay, setFoolsDay] = useState(isFoolsDay());

	const minutesToSwitch = Math.round((switchTime - new Date()) / 1000 / 60);
	const hoursToSwitch = Math.floor(minutesToSwitch / 60);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsEven(determineParkingSide());
			setSwitchTime(calculateSwitchTime());
			setFoolsDay(isFoolsDay());
		}, 30000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="App"
			style={{
				backgroundColor: isEven ? "#3369ff" : "#f75231",
			}}
		>
			<p style={{ color: "white" }}>side</p>
			{isEven ? <h1>Even</h1> : <h1>Odd</h1>}
			<h2>{new Date().getHours() < 18 ? "Before" : "After"} 6 pm</h2>
			<h2>
				On{" "}
				{new Date().toLocaleDateString("default", {
					month: "long",
					day: "numeric",
				})}
			</h2>
			{foolsDay && (
				<>
					<h2 style={{ marginTop: 40, color: "white" }}>Warning: Fools day!</h2>
					<p>Do not move your car tonight! Tomorrow is also an odd day.</p>
				</>
			)}
			<p style={{ marginTop: 40, color: "white" }}>Next switch in:</p>
			<h3 style={{ margin: 0, color: hoursToSwitch < 2 ? "white" : "black" }}>
				{hoursToSwitch} hours and {minutesToSwitch % 60} minutes
			</h3>
			<About isEven={isEven} foolsDay={foolsDay} />
		</div>
	);
}

export default App;

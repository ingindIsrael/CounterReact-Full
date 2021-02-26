import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Counter = props => {
	const [total, setTotal] = useState(0);
	const [status, setStatus] = useState("");
	const [intervalId, setIntervalId] = useState(null);
	const [countType, setCountType] = useState("");
	const [number, setNumber] = useState("");

	const icon = <i className="far fa-clock"></i>;
	const placeholder = "000000";
	let seconds = total.toString();
	let output =
		placeholder
			.split("")
			.slice(seconds.length)
			.join("") + seconds;
	output = output.split("");
	output.unshift(icon);
	var n = output.map(function(el, index) {
		return (
			<span
				key={index}
				className="fs-1 text-white badge rounded-pill bg-dark m-3">
				<h1>{el}</h1>
			</span>
		);
		//<div key={index}>{el}</div>;
	});

	useEffect(() => {
		// equivalent to window.onload

		console.log(status);
		console.log(seconds);

		if (status == "play") {
			const s = window.setInterval(() => {
				setTotal(antTotal => antTotal + 1);
			}, 1000);

			setIntervalId(s);
		} else if (status == "stop") {
			window.clearInterval(intervalId);
		} else if (status == "reset") {
			window.clearInterval(intervalId);
			setTotal(0);
		} else return () => total;
	}, [status]);

	useEffect(() => {
		// equivalent to window.onload

		console.log(countType);

		if (countType == "alarm") {
			const s = window.setInterval(() => {
				setTotal(antTotal => antTotal + 1);
			}, 1000);

			setIntervalId(s);
		} else if (countType == "countdown") {
			setTotal(number);
			const s = window.setInterval(() => {
				setTotal(antTotal => antTotal - 1);
			}, 1000);

			setIntervalId(s);
		} else return () => total;
	}, [countType]);

	useEffect(() => {
		// equivalent to window.onload

		console.log(total);

		setNumber(antNumber => antNumber);
		if (total == (parseInt(number) + 1).toString()) {
			setTotal(antTotal => antTotal - 1);
			alert("ALARMA YA PASARON " + number + " SEGUNDOS");

			window.clearInterval(intervalId);
		} else if (total == (parseInt("0") - 1).toString()) {
			setTotal(antTotal => antTotal + 1);
			window.clearInterval(intervalId);
			alert(
				"COUNTDOWN LLEGO A SU FIN, YA PASARON " + number + " SEGUNDOS"
			);
		} else return () => total;
	}, [total]);

	return (
		<div className="container-fluid text-center m-3">
			<div>{n}</div>
			<div>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setStatus("play")}>
						Play
					</button>
				</span>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setStatus("reset")}>
						Reset
					</button>
				</span>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setStatus("play")}>
						Resume
					</button>
				</span>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setStatus("stop")}>
						Stop
					</button>
				</span>
			</div>
			<br></br>
			<div>
				<label>
					Enter the amount of seconds to create an alarm or countdown
				</label>
				<br></br>
				<input
					type="number"
					id="myNumber"
					onChange={e => setNumber(e.target.value)}></input>
				<br></br>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setCountType("alarm")}>
						Set Time for Alarm
					</button>
				</span>
				<span className="fs-1 text-white badge rounded-pill bg-dark m-3">
					<button
						type="button"
						className="btn text-white"
						onClick={() => setCountType("countdown")}>
						Set Time for Coutdown
					</button>
				</span>
			</div>
		</div>
	);
};

Counter.propTypes = {
	seconds: PropTypes.string
};

export default Counter;

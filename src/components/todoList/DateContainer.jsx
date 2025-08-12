import { useState, useEffect } from "react";

function DateContainer() {
	const today = new Date();
	const weekday = today.toLocaleString("default", { weekday: "short" });
	const month = today.toLocaleString("default", { month: "long" });
	const year = today.getFullYear();

	const [time, setTime] = useState(
		today.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		})
	);

	useEffect(() => {
		const timer = setInterval(() => {
			const now = new Date();
			setTime(
				now.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				})
			);
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<div className="timeDateContainer">
				<div className="dateContainer">
					<h1>{weekday}</h1>
					<p>
						{month} | {year}
					</p>
				</div>
				<div className="verticalDivider"></div>
				<div className="timeContainer">
					<h2>{time}</h2>
				</div>
			</div>
		</>
	);
}

export default DateContainer;

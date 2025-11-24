import "./App.css";
import TodoList from "./widgets/TodoList";
import TypingPractice from "./widgets/TypingPractice";
import DateContainer from "./components/todoList/DateContainer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function App() {
	const [hovered, setHovered] = useState(false);
	const [deg, setDeg] = useState(90);
	const [borderActive, setBorderActive] = useState(false);
	const [borderOpacity, setBorderOpacity] = useState(0);



	useEffect(() => {
		let frame;
		let startDeg = deg;
		let startTime;

		if (borderActive) {
			const animate = (timestamp) => {
				if (!startTime) startTime = timestamp;
				const elapsed = timestamp - startTime;
				const duration = 5000; // 2 seconds for one full cycle

				const progress = Math.min(elapsed / duration, 1);
				const newDeg = (startDeg + 360 * progress) % 360;
				setDeg(newDeg);

				if (progress < 1) {
					frame = requestAnimationFrame(animate);
				} else {
					setBorderActive(false);
					setTimeout(() => setBorderOpacity(0), 300); // fade 
				}
			};
			frame = requestAnimationFrame(animate);
		}
		return () => cancelAnimationFrame(frame);
		// eslint-disable-next-line
	}, [borderActive]);

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !borderActive) {
			setBorderActive(true);
			setBorderOpacity(1); // Fade in
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5, // Delay between each child animation
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		e.currentTarget.style.setProperty("--x", `${x}px`);
		e.currentTarget.style.setProperty("--y", `${y}px`);
	};

	return (
		<>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<motion.div>
					<DateContainer />
				</motion.div>
				<div className="bentoGrid">
					<motion.div
						className="bentoItem large"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
						whileHover={{
							filter: "brightness(1.05)",
							y: [0, -3, 0]
						}}
						transition={{
							filter: { duration: 1, ease: "easeInOut" },
							y: {
								duration: 3,
								repeat: Infinity,
								repeatType: "loop",
								ease: "easeInOut"
							}
						}}
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}
						onKeyDown={handleKeyDown}
						tabIndex={0} // Make div focusable for keyboard events
						style={{
							border: "4px solid transparent",
							borderRadius: "16px",
							transition: "background 0.3s",
							background:
								borderActive
									? `linear-gradient(#222, #222) padding-box, linear-gradient(${deg}deg, transparent 80%, rgba(30,168,30,${borderOpacity}) 80%) border-box`
									: "#222"
						}}
					>
						<TypingPractice />
					</motion.div>
					<motion.div
						className="widgetContainer todo bentoItem"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						<TodoList />
					</motion.div>
					<motion.div
						className="bentoItem diet"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Pie Chart
					</motion.div>
					<motion.div
						className="bentoItem watchlist"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Pie Chart
					</motion.div>
					<motion.div
						className="bentoItem wide"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Flash Cards
					</motion.div>
					<motion.div
						className="bentoItem chessQuiz"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Sequence Quiz
					</motion.div>
				</div >
			</motion.div >
		</>
	)
};

export default App;

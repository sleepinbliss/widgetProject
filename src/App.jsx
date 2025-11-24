import "./App.css";
import TodoList from "./widgets/TodoList";
import TypingPractice from "./widgets/TypingPractice";
import DateContainer from "./components/todoList/DateContainer";
import { motion } from "framer-motion";

function App() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15, // Delay between each child animation
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
					>
						<TypingPractice />
					</motion.div>
					<motion.div
						className="bentoItem todo widgetContainer"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						<TodoList />
					</motion.div>
					<motion.div
						className="bentoItem wide"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Flash Cards
					</motion.div>
					<motion.div
						className="bentoItem diet"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Diet Card
					</motion.div>
					<motion.div
						className="bentoItem chessQuiz"
						variants={itemVariants}
						onMouseMove={handleMouseMove}
					>
						Chess Sequence Quiz
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}

export default App;

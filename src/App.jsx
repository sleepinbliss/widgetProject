import "./App.css";
import TodoList from "./widgets/TodoList";
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
					<motion.div className="bentoItem large" variants={itemVariants}>
						Typing Practice
					</motion.div>
					<motion.div className="bentoItem mid" variants={itemVariants}>
						Task Timer
					</motion.div>
					<motion.div className="bentoItem todo" variants={itemVariants}>
						<TodoList />
					</motion.div>
					<motion.div className="bentoItem wide" variants={itemVariants}>
						Flash Cards
					</motion.div>
					<motion.div className="bentoItem diet" variants={itemVariants}>
						Diet Card
					</motion.div>
					<motion.div className="bentoItem chessQuiz" variants={itemVariants}>
						Chess Sequence Quiz
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}

export default App;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ListItems from "../components/todoList/ListItems";
import InputItem from "../components/todoList/InputItem";

function TodoList() {
	const [items, setItems] = useState([]);

	function addItem(name) {
		if (name.trim() !== "") {
			setItems([...items, { id: Date.now(), name }]); // Add unique ID
		}
	}

	return (
		<>
			<div className="widgetContainer">
				<h3>To-do List</h3>
				<div className="listItemsContainer">
					<InputItem onAddItem={addItem} />
					<AnimatePresence>
						{items.length > 0 && (
							<motion.ul
								className="unorderedList"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<AnimatePresence>
									{items.map((item) => (
										<motion.div
											key={item.id}
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.3 }}
										>
											<ListItems itemName={item.name} />
										</motion.div>
									))}
								</AnimatePresence>
							</motion.ul>
						)}
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}

export default TodoList;

import { FaPlus } from "react-icons/fa";
import { useRef, useState } from "react";

function InputItem({ onAddItem }) {
	const [userInput, setUserInput] = useState("");
	const inputRef = useRef();

	function submitInput() {
		if (userInput.trim() !== "") {
			onAddItem(userInput);
			setUserInput(""); // Clear input after adding
		}
	}

	return (
		<span className="newItemName">
			<button type="button" className="addButton" onClick={submitInput}>
				<FaPlus size={13} style={{ verticalAlign: "middle" }} />
			</button>
			<input
				type="text"
				placeholder="Add task..."
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				ref={inputRef}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						submitInput();
					}
				}}
			/>
		</span>
	);
}

export default InputItem;

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ListItems({ itemName }) {
	const [isStrikethrough, setIsStrikethrough] = useState(false);
	function strikethroughText() {
		setIsStrikethrough((prev) => !prev);
	}
	return (
		<li className="listItem">
			<span
				className={`item ${isStrikethrough ? "strikethrough darkenBack" : ""}`}
				onClick={strikethroughText}
			>
				{itemName}
			</span>
			<div className="optionsContainer">
				<span title="Edit" className="options item">
					<FaEdit style={{ verticalAlign: "middle", cursor: "pointer" }} />
				</span>
				<span title="Delete" className="options item">
					<FaTrash
						style={{
							verticalAlign: "middle",
							cursor: "pointer",
							color: "red",
						}}
					/>
				</span>
			</div>
		</li>
	);
}

export default ListItems;

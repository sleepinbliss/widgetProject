function TypingPractice() {
	function CheckInput() { }
	return (
		<>
			<div className="TypingContainer">
				<div className="TextBox">
					<article>
						The most important concept in React is the component-based architecture. React encourages you to build user interfaces by breaking them into small, reusable components that manage their own state and logic. Each component is like a self-contained building block that can be combined to form complex UIs. This structure makes code easier to maintain, test, and scale. React’s rendering is driven by state changes—when data changes, React efficiently updates only the parts of the UI that need to change using its virtual DOM system. In short, React’s power comes from organizing applications into modular components and updating the UI in a predictable, efficient way.
					</article>
				</div>
				<div className="InputBox">
					<input type="text" onChange={CheckInput} />
				</div>
			</div>
		</>
	);
}

export default TypingPractice;

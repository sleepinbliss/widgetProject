function TypingPractice() {
    function CheckInput(){}
	return (
		<>
			<div className="TypingContainer">
				<div className="TextBox">
					<article>
						Be kind to the person you are becoming. They’re learning, just like
						you.
					</article>
				</div>
				<div className="InputBox">
					<input type="text" onChange={CheckInput}/>
				</div>
			</div>
		</>
	);
}

export default TypingPractice;

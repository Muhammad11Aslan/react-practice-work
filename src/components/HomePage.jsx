import React, { useState } from 'react'
import NextPage from './NextPage'

const HomePage = () => {
	const [input, setInput] = useState();
	const [border, setBorder] = useState("5px solid red");
	const [backgroundColor, setBackgroundColor] = useState("yellow")
	console.log("Aslan 1");
	console.log("zain ")
	console.log("zain111 ")
	return (
		<>{console.log(<h1 style={{ backgroundColor: input }}>hello</h1>)}

			<input type="text" placeholder='Enter The Text' value={input} onChange={(e) => setInput(e.target.value)} />
			{/* one step: state use   */}
			<h1 style={{ border: border, backgroundColor: backgroundColor }}>
				Aslan
			</h1>
			{/* second step: state use   */}
			<h1 style={{ border: "5px solid black", backgroundColor: "red" }}>
				Aslan
			</h1>
			<h1 style={{ border: border }}>
				{input}
			</h1>
			<NextPage input={input} border={border} backgroundColor={backgroundColor} />
		</>
	)
}

export default HomePage

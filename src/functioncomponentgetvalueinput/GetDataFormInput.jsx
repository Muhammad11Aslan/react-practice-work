import React, { useState } from 'react'
function GetDataFormInput() {
	const [Input, setInput] = useState(null)
	const [upData, setUpData] = useState(false)
	function GetData(e) {
		setInput(e.target.value)

	}
	return (
		<div>
			<h1 style={{ backgroundColor: 'green' }}>Well To Get data Input Function components</h1>
			{/* <h1>Data : {Input}</h1> */}
			{upData ? (<h1> {Input}</h1>) : null}
			<input type="text" onChange={GetData} />
			<br />
			<button type='button' onClick={() => { setUpData(true) }}>click me</button>
		</div>
	)
}

export default GetDataFormInput;

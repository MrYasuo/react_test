import { useState, useContext, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IndexContext } from "./indexContext";
import MyInput from "./MyInput";

function App() {
	const { str } = useContext(IndexContext);
	const ref = useRef([]);
	const arr = str.split("<input/>");
	console.log(ref);
	return (
		<>
			{arr.map((item, index) => (
				<div key={index}>
					{item}
					<MyInput ref={ref} />
				</div>
			))}
		</>
	);
}

export default App;

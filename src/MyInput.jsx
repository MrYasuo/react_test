import { useState, forwardRef } from "react";

function MyInput(props, ref) {
	const [data, setData] = useState("");
	console.log(ref);
	return (
		<input
			onChange={(e) => setData(e.target.value)}
			value={data}
			ref={(e) => ref.current.push(e)}
		/>
	);
}

export default forwardRef(MyInput);

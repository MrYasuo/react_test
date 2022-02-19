import { createContext, useState } from "react";

const IndexContext = createContext();

export default function IndexContextProvider({ children }) {
	const [form, setForm] = useState([]);
	const str =
		"Amet<input/> adipisicing<input/> do laborum<input/> eiusmod<input/> tempor laboris amet reprehenderit ullamco et aute velit excepteur.";
	return (
		<IndexContext.Provider value={{ form, setForm, str }}>
			{children}
		</IndexContext.Provider>
	);
}

export { IndexContext };

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import IndexContextProvider from "./indexContext";

ReactDOM.render(
	<React.StrictMode>
		<IndexContextProvider>
			<App />
		</IndexContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

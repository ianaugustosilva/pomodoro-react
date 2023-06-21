import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

import { theme } from "./assets/Theme/Theme.js";
import { GlobalStyle } from "./assets/GlobalStyle/GlobalStyle.js";
import StateProvider from "./Components/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<StateProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</StateProvider>
	</React.StrictMode>
);

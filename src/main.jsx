import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { ThemeProvider } from "styled-components";

import { theme } from "./assets/Theme/Theme.ts";
import { GlobalStyle } from "./assets/GlobalStyle/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

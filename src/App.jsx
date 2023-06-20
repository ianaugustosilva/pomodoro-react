import { Tags } from "./Components/Tags/Tags";
import Timer from "./Components/Timer/Timer";
import { Title } from "./assets/Title/Title";

function App() {
	return (
		<>
			<Title>Pomodoro Timer</Title>
			<Tags />
			<Timer />
			{/* Setting icon */}
		</>
	);
}

export default App;

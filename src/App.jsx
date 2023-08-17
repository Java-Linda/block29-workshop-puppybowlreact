import "./App.css";
import Navbar from "./components/Navbar";
import AllPlayers from "./components/AllPlayers";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div id="container">
				<Navbar />
				<AllPlayers />
				<Footer />
			</div>
		</>
	);
}

export default App;
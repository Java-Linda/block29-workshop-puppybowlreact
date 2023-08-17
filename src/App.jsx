import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

	return (
		<>
			<div id="container">
				<Navbar />
				<MainSection />
				<Footer />
			</div>
		</>
	);
}

export default App;
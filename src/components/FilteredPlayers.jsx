import { useState, useEffect } from "react";
import RenderFilters from "./RenderFilters";

export default function FilteredPlayers(filteredDogs) {
	const [players, setPlayers] = useState([]);

	async function getAllPuppies() {
		try {
			setPlayers(filteredDogs);
		} catch (err) {
			console.error("Can't get all puppies", err);
		}
	}

	useEffect(() => {
		getAllPuppies();
	}, []);

	console.log("players", players);

	return (
		<>
			{players ? (
                <RenderFilters players={players}/>
			) : <></>
			}
		</>
	);
}

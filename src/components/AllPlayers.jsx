import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import SinglePlayer from "./SinglePlayer";

export default function AllPlayers() {
	const [players, setPlayers] = useState([]);

	async function getAllPuppies() {
		try {
			setPlayers(await fetchAllPlayers());
		} catch (err) {
			console.error("Can't get all puppies", err);
		}
	}

	useEffect(() => {
        getAllPuppies();
	}, []);

	return (
		<div id="all-players-container">
			<div id="all-players-header">
				<h4>ALL PLAYERS HEADER HERE</h4>
			</div>
			<div id="all-players-gallery">
				{players.map((player) => {
					return (
						<>
							<h3>{player.name}</h3>
                            <img src={player.imageUrl} alt="dog" />
                            <SinglePlayer/>
						</>
					);
				})}
			</div>
		</div>
	);
}

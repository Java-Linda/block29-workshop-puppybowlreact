import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import SeeDetails from "./SeeDetails";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [selectedPuppyId, setSelectedPuppyId] = useState(null);

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
							<h3 id="player-component">{player.name}</h3>
                            <img id="player-component" src={player.imageUrl} alt="dog" />
                            <SeeDetails id="player-component" selectedPuppyId={player.id} setSelectedPuppyId={setSelectedPuppyId}/>
						</>
					);
				})}
			</div>
		</div>
	);
}

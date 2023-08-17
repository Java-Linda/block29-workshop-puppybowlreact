import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export default function NewPlayerForm() {
	const [puppyName, setPuppyName] = useState("");
	const [puppyBreed, setPuppyBreed] = useState("");
	const [puppyTeam, setPuppyTeam] = useState("");
	const [puppyImage, setPuppyImage] = useState("");
	const [puppyStatus, setPuppyStatus] = useState("");
	const [successMessage, setSuccessMessage] = useState(null);

	async function handleSubmit(event) {
		event.preventDefault();
        let playerData = {
            name: puppyName,
            breed: puppyBreed,
            status: puppyStatus,
            imageUrl: puppyImage
        };
        console.log("playerData",playerData)

		try {
			const response = await fetch(`${API_URL}/players`, {
				method: "POST",
				body: JSON.stringify(playerData),
				headers: {"Content-Type": "application/json"},
			});
			console.log("response: ", response);
			const result = await response.json();
			console.log("result", result);
			setSuccessMessage("Sign up successful");
			// fetchAllPlayers();
			// return playerObj;
		} catch (err) {
			console.error("Oops, something went wrong with adding that player!", err);
		}
	}

	return (
		<>
			{successMessage && <p>{successMessage}</p>}
			<form onSubmit={handleSubmit}>
				<TextField
					label="Name"
					value={puppyName}
					onChange={(e) => setPuppyName(e.target.value)}
				/>
				<TextField
					label="Breed"
					value={puppyBreed}
					onChange={(e) => setPuppyBreed(e.target.value)}
				/>
				<TextField
					label="Image Url"
					value={puppyImage}
					onChange={(e) => setPuppyImage(e.target.value)}
				/>
				<input
					type="radio"
					id="bench"
					name="status"
					value={puppyStatus}
					onChange={() => setPuppyStatus("bench")}
					label="On Bench"
				></input>
				<label htmlFor="bench">On Bench</label>
				<input
					type="radio"
					id="field"
					name="status"
					value={puppyStatus}
					onChange={() => setPuppyStatus("field")}
					label="On Field"
				></input>
				<label htmlFor="field">On Field</label>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

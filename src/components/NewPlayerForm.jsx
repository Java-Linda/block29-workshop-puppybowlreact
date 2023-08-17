import React from "react";
import TextField from "@mui/material/TextField";

const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

async function handleSubmit(event) {
	event.preventDefault();
	try {
		const response = await fetch(`${API_URL}/players`, {
			method: "POST",
			body: JSON.stringify(),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const player = await response.json();
		// fetchAllPlayers();
		return playerObj;
	} catch (err) {
		console.error("Oops, something went wrong with adding that player!", err);
	}
}

export default function NewPlayerForm() {
	return (
		<div>
			<TextField label="Name" />
			<TextField label="Breed" />
            <TextField label="Team" />
            <TextField label="Image Url" />
			<input
				type="radio"
				id="bench"
				name="status"
				value="off"
				label="On Bench"
			></input>
            <label htmlFor="bench">On Bench</label>
            <input
				type="radio"
				id="field"
				name="status"
				value="off"
				label="On Field"
			></input>
			<label htmlFor="field">On Field</label>
			<button type="submit">Submit</button>
		</div>
	);
}

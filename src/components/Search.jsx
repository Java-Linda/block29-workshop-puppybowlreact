import { useState } from "react";
import { fetchAllPlayers } from "../API";

export default function Search() {
	const [input, setInput] = useState("");
	const [results, setResults] = useState([]);

	const fetchData = (value) => {
        fetchAllPlayers().then((json) => {
            console.log("json", json)
            console.log("value", value)

            const names = json.filter((player) => {
                for (var name in player) {
                    if (player[name] == value) {
                        return player.name
                    }
                }
            })

			const results = json.filter((player) => {
				// console.log("value", value)
				return value && player.name;
			});
            setResults(results);
            // console.log("results", results);
		});
		// const re = new RegExp(value, "i");
		// const filtered = results.filter((entry) =>
		// 	Object.values(entry).some(
		// 		(val) => typeof val === "string" && val.match(re)
		// 	)
        // );
        // console.log("filtered", filtered);
	};

	

	const handleChange = (value) => {
		setInput(value);
		fetchData(value);
	};

	return (
		<div>
			<form>
				<input
					type="text"
					value={input}
					placeholder="Search Puppies"
					onChange={(e) => handleChange(e.target.value)}
				/>
			</form>
		</div>
	);
}

// PSEUDOCODE

// Accept an input from the user
// Compare that input with puppy names on the page
// from the all puppies array, grab all puppies with names matching the input and push to a new array/object
// render the new object

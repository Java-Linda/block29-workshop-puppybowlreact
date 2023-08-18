import { useState } from "react";
import { fetchAllPlayers } from "../API";
import FilteredPlayers from "./FilteredPlayers";

export default function Search() {
	const [input, setInput] = useState("");
	const [results, setResults] = useState([]);

	const fetchData = (value) => {
        fetchAllPlayers().then((json) => {
            const names = json.filter((player) => {
                for (var name in player) {
                    if (player[name] == value) {
                        return player.name
                    }
                }
            })

			const filteredDogs = names.filter((player) => {
				return value && player.name;
            });
            console.log("results", filteredDogs)
            setResults(filteredDogs);
		});
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
            {results ? <FilteredPlayers filteredDogs={results}/> : <></>
            }
		</div>
	);
}

import { useState, useEffect } from "react"
import { fetchSinglePlayer } from "../API";

export default function SinglePlayer() {
    const [player, setPlayer] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    async function getSinglePuppy() {
		try {
			setPlayer(await fetchSinglePlayer());
		} catch (err) {
			console.error("Can't get this puppy", err);
		}
	}

	useEffect(() => {
        getSinglePuppy();
    }, []);
    
    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={handleClick}>See Details</button>
            {isOpen && (<h3>SINGLE PLAYER HERE</h3>)}
        </div>
    )
}
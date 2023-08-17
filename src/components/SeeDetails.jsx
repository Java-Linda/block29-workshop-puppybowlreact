import { useState } from "react";
import SinglePlayer from "./SinglePlayer";

// selectedPuppyId & setSelectedPuppyId on line 5 are pulled in from line 33 on AllPlayers (inside the component call)
export default function SeeDetails({selectedPuppyId, setSelectedPuppyId}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={handleClick}>See Details</button>
            {isOpen && (
                <SinglePlayer selectedPuppyId={selectedPuppyId} setSelectedPuppyId={setSelectedPuppyId}/>
            )}
        </div>
    )
}
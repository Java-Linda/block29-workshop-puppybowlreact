import { useState } from "react";
import SinglePlayer from "./SinglePlayer";

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
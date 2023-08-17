import {Routes, Route} from "react-router-dom";
import AllPlayers from "./AllPlayers";
import SinglePlayer from "./SinglePlayer";
import NewPlayerForm from "./NewPlayerForm";
import Search from "./Search";
import { useState } from "react";

export default function MainSection() {
    const [selectedPuppyId, setSelectedPuppyId] = useState(null);
    
    return (
        <div id="main-section">
            <Routes>
                <Route path="/allplayers" element={<AllPlayers />} />
                <Route path="/singleplayer" element={<SinglePlayer/>}/>
                <Route path="/newplayerform" element={<NewPlayerForm/>}/>
                <Route path="/search" element={<Search/>}/>
            </Routes>
        </div>
    )
}
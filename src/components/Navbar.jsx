import AllPlayers from "./AllPlayers"
import SinglePlayer from "./SinglePlayer"
import NewPlayerForm from "./NewPlayerForm"
import Search from "./Search"
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar-container">
            <Link to="/AllPlayers">Home</Link>
            <Link to="/SinglePlayer">Single Player View</Link>
            <Link to="/NewPlayerForm">Create New Player</Link>
            <Link to="/Search">Search</Link>
        </div>
    )
}
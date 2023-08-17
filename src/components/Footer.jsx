import AllPlayers from "./AllPlayers"
import SinglePlayer from "./SinglePlayer"
import NewPlayerForm from "./NewPlayerForm"
import Search from "./Search"

export default function Footer() {
    return (
        <div id="navbar-container">
            <AllPlayers />
            <SinglePlayer />
            <NewPlayerForm />
            <Search/>
        </div>
    )
}
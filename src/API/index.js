const cohortName = "2306-GHP-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${API_URL}/players`)
        const puppies = await response.json();
        const allPuppies = puppies.data.players;
        return allPuppies;
    } catch (error) {
        console.error("Cannot fetch all players", error)
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`);
        const puppy = await response.json();
        const singlePuppy = puppy.data.player;
        return singlePuppy;
    } catch (error) {
        console.error("Can't fetch player", error)
    }
};
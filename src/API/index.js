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
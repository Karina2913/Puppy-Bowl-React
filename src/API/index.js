const cohortName = "2406-FTB-MT-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export async function getAllPlayers() {
    try {
        // GET request to fetch all players from API
        const response = await fetch(`${API_URL}/players`);
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error("Whoops! There was an error", error);
    }
}
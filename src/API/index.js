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

export async function fetchSinglePlayer(playerId) {
    try {
        // fetching single player
        const response = (await fetch(`${API_URL}/players/${playerId}`));
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error("Whoops, there was an error fetching a single player.", error);
    }
}

export async function addNewPlayer(name, breed, imageUrl) {
    try {
        const response = await fetch(`${API_URL}/players`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                breed: breed,
                imageUrl: imageUrl,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result.data.players;
    } catch (error) {
        console.error("Whoops! There was an error creating a player.", error);
    }
}

export async function removePlayer() {
    try {
        await fetch(`${API_URL}/players/${playerId}`, {
            method: "DELETE",
        });
        const players = await getAllPlayers();
        return result.data.players;
    } catch (error) {
        console.error("Whoops! There was an error deleting the player", error);
    }
}
import { getAllPlayers } from "../API";
import { useState, useEffect } from 'react';
import SinglePlayer from "./SinglePlayer";
import { fetchSinglePlayer } from "../API";
import { addNewPlayer } from "../API";
import { removePlayer } from "../API";
import PlayerItem from "./PlayerItem";
// import NewPlayerForm from "./NewPlayerForm";

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const getPlayers = await getAllPlayers();
                setPlayers(getPlayers);
            } catch (error) {
                console.error("Whoops! There was an error fetching players.", error);
            }
        }
        fetchPlayers();
    }, []);

    return (
        <div className="all-players-container">
            {/* <NewPlayerForm /> */}
            <div className="all-players">
                {
                    players.map((player) => {
                        return (
                            <PlayerItem key={player.id} player={player} />
                        )
                    })
                }
            </div>
        </div>
    );
}
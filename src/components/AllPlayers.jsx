import { getAllPlayers } from "../API";
import { useState, useEffect } from 'react';
import SinglePlayer from "./SinglePlayer";

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
        <div className="all-players">
            <h1>All Players Component</h1>
            {
                players.map((player) => {
                    return (
                        // <div>
                        //     <h4>{player.name}</h4>
                        // </div>
                        <SinglePlayer 
                            key={player.id}
                            player={player}
                        />
                    )
                })
            }
        </div>
    );
}
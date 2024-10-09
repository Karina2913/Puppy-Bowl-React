import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { fetchSinglePlayer } from "../API"
import { useParams } from 'react-router-dom'
import PlayerItem from "./PlayerItem"

export default function SinglePlayer () {
    const [player, setPlayer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPlayer = async (id) => {
            try {
                const getPlayer = await fetchSinglePlayer(id);
                setPlayer(getPlayer);
            } catch (error) {
                console.error("Whoops! There was an error fetching players.", error);
            }
        }
        fetchPlayer(id);
    }, [id]);

    // return (
    //     <div className="single-player-container">
    //         {/* <NewPlayerForm /> */}
    //         <h1>Single Player Component</h1>
    //         <button onClick={seeDetails}>See Details</button>

    //         <div className="single-player">
    //             {
    //                 <h4>{player.name}</h4>
    //             }
    //         </div>
    //     </div>
    // );

    return <PlayerItem player={player} />
}
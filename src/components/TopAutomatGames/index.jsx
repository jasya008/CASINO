import React, { useEffect, useState } from 'react'
import { InfoTopAutomatGames } from '../infoTopAutomatGames'
import axios from 'axios'

export const TopAutomatGames = () => {
    const [data, setData] = useState([])

    const API_URL = "http://localhost:4080/TopAutomatGames"


    const getData = async () => {
        try {
            const { data } = await axios(API_URL)
            setData(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="cards">
            {data.slice(0, 3).map((game) => (
                <InfoTopAutomatGames key={game.id} data={game} />
            ))}
        </div>
    )
}

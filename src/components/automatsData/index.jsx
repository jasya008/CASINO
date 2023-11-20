import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ModalGames } from '../modalGames'
import { InfoAutomats } from '../infoAutomats'

export const AutomatsData = () => {

    const [data, setData] = useState([])

    const AutomatsApi_URL = "http://localhost:4080/games"

    const getDataAutomats = async () => {
        try {
            const { data } = await axios(AutomatsApi_URL)
            setData(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDataAutomats()
    }, [])

    return (
        <div className="cardsAutomats">
            {data.map((automats) => (
                <InfoAutomats key={automats.id} data={automats} />
            ))}

            <ModalGames/>
        </div>
    )
}

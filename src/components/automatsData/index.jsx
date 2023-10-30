import React, { useEffect, useState } from 'react'
import { InfoAutomats } from '../infoAutomats'
import axios from 'axios'
import { ModalAutomat } from '../modalAutomats'

export const AutomatsData = () => {

    const [data, setData] = useState([])

    const AutomatsApi_URL = "http://localhost:4080/automats"

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

            <ModalAutomat/>
        </div>
    )
}

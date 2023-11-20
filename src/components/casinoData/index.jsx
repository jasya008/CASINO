import { Container } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { InfoCasino } from '../infoCasino'


export const CasinoData = () => {
    const [data, setData] = useState([])

    const API_URL = "http://localhost:4080/casino"


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
        // <Container fixed>
        <div className="cards">
            {data.map((game) => (
                <InfoCasino key={game.id} data={game} />
            ))}
        </div>
        // </Container>
    )
}

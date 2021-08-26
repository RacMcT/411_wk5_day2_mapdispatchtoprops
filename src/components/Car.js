import React, {useEffect, useState} from 'react';
import { Container, Paper, Chip } from '@material-ui/core';
import {useParams} from 'react-router-dom'



const Car = (props) => {
    const [car, setCar] = useState({})
    let { id } = useParams(); 
     
    useEffect(()=> {
        if(!props.cars) return;

        const car = props.cars.find(c => c.id === parseInt(id))
        console.log(car)
        setCar(car)
    }, [props.cars])
     return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car
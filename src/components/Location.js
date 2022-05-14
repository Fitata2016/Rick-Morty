import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("")



    useEffect(()=>{

        const random = Math.floor(Math.random()*126)+1;

        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res=> setLocation(res.data))

    },[])

    console.log(location);

    const searchLocation =()=>{

        console.log(id)
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res=> setLocation(res.data))
     }
    return (
        <div>
            
            <input 
                type="text"
                onChange={e=> setId(e.target.value)}
                value={id}
                placeholder={"Type a location ID to search!"}   
            />
            <button onClick={searchLocation}>Search</button>
            <h1>Rick & Morty</h1>
            <h2>{location.name}</h2>
            <h3>
                <b>Type: </b>{location.type} 
                <b>Dimension: </b>{location.dimension}
                <b>Population: </b>{location?.residents?.length}
            </h3>
            
            <ul>
            {location.residents?.map(resident => (
                   // {resident}
                    <ResidentInfo url={resident} key={resident}/>
            ))}
            </ul>   
                
        </div>
    );
};

export default Location;
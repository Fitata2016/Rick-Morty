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
             
            <div className='nav-bar'>
                <h1>Rick & Morty</h1>
                <input 
                    type="text"
                    onChange={e=> setId(e.target.value)}
                    value={id}
                    placeholder={"Type a location ID to search!"}   
                />
                <button onClick={searchLocation}><b>Search</b></button>
                <h2>{location.name}</h2>
            </div>
            <div className='data-location'>
            
                <p><b>Type: {location.type} </b></p>
                <p><b>Dimension: {location.dimension}</b></p>
                <p><b>Population: {location?.residents?.length}</b></p>
            
            </div>
            
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
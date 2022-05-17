import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const ResidentInfo = ({url}) => {

    const[resident, setResident] = useState({})



    useEffect(()=>{

        axios.get(url)
        .then(res=> setResident(res.data))

    },[url])

    return (
        <div className='resident-info'>

            <div className='resident-card'>

            <li>
                <img src={resident.image} alt="" />
                <h3>{resident.name}</h3>
                <h3>{resident.status}</h3> <h3>{resident.species}</h3>
                <h3><b>Origin: </b>{resident.origin?.name}</h3>
                <h3><b>Episodes where it appear: </b>{resident.episode?.length}</h3>

            </li>
            </div>
          
        </div>
    );
};

export default ResidentInfo;
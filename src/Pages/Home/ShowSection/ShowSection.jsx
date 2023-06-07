import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';
import './show.css'

const ShowSection = () => {
    const [shows, setShows] = useState([])
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setShows(data))
    }, [])
   
    return (
        <div className='m-5'>
            <h1 className='text-center'>Select from all the amazing shows</h1>
            <div className='grid-container'>
                {
                    shows.map(show => {
                        return <ShowCard key={show.show.id} show={show}></ShowCard>
                    })
                }
            </div>

        </div>
    );
};

export default ShowSection;
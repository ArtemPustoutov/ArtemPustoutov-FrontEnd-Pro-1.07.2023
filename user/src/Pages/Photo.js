import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  Link } from "react-router-dom";

const Photo = () => {
    const {id} = useParams()
    const[photo, setPhoto] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPhoto(data)
        } )
        .catch((err) => {
            console.log(err.message)
        })
    },[id]);

    return (
        <>
        <div className='photo-container'>
            <img src={photo.thumbnailUrl} alt='some img'/>
            <span><Link  to={`/`}>Users</Link></span>
        </div>
        </>
    )
}

export default Photo
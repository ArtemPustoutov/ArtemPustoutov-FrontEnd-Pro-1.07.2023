import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  Link } from "react-router-dom";

const Albums = () => {
    const {id} = useParams()
    const[albums, setAlbum] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setAlbum(data)
        } )
        .catch((err) => {
            console.log(err.message)
        })
    }, [id],);
    return (
        <>
        <div className='album-container'>
            {albums.map((albums) => (
                    <div key={albums.id}>
                        <p>{albums.id} Album: {albums.title}</p>
                        <span><Link key={albums.id} to={`/photo/${albums.id}`}>Photo</Link></span>
                        <span><Link  to={`/`}>Users</Link></span>
                    </div>
            ))}
        </div>
        </>
    )
}

export default Albums
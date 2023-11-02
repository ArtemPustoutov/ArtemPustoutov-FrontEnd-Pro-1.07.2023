import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {  Link } from "react-router-dom";





const Users = () => {
    const[users, setUsers] = useState([])
    const param = useParams()
    console.log(param)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUsers(data)
        } )
        .catch((err) => {
            console.log(err.message)
        })
    }, []);
    return (
        <>
        <h1>Users</h1>
        <div className='users-container'>
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <p>{user.id} {user.username}</p>
                        <span><Link key={user.id} to={`albums/${user.id}`}>Albums</Link></span>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Users;
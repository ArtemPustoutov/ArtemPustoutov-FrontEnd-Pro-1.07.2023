import { useEffect, useState } from 'react'
import './Contacts.css'



const Contacts = () => {
    const[posts, setPosts] = useState([])
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [hidden, setHidden] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPosts(data)
        } )
        .catch((err) => {
            console.log(err.message)
        })
    }, []);

    const deletePost = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
           method: 'DELETE',
        }).then((response) => {
           if (response.status === 200) {
              setPosts(
                 posts.filter((post) => {
                    return post.id !== id;
                 })
              );
           } else {
              return;
           }
        });
    };
    const addPosts = async (phone, name, username,) => {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone,
                username: username,
                id: Math.random().toString(36).slice(2),
            }),
           headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPosts((posts) => [data, ...posts]);
                setName('');
                setPhone('');
                setUserName('')
            })
           .catch((err) => {
                console.log(err.message);
            });
    };
    const handleSumbit = (elem) => {
        elem.preventDefault();
        addPosts(name, phone, userName);
    }

    return(
        <>
        <h1>Contacts</h1>
        <div className='table-box'>
            {posts.map((post) => {
                return(
                    <table key={post.id} >
                        <tbody>
                            <tr>
                                <td>Contact</td>
                                <td>User-name: </td>
                                <td >Name: </td>
                                <td>Phone:</td>
                            </tr>
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.username}</td>
                                <td>{post.name}</td>
                                <td>{post.phone}</td>
                                <td><button className='delate-btn' onClick={ () => deletePost(post.id)}>Delate</button></td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </div>
        <button className='add-btn' onClick={() => setHidden(false)}>Add Contacts</button>
        {!hidden && <div className="user-add-contacts">
            <form onSubmit={handleSumbit}>
                <label>Name:</label>
                <input  type="text" id ='' name="name" value={name} onChange={(elem) => setName(elem.target.value)}/><br />
                <label >Phone:</label>
                <input  type="number" name="number" value={phone} onChange={(elem) => setPhone(elem.target.value)}/><br />
                <label >User-name:</label>
                <input type="text" name="user-name"value={userName} onChange={(elem) => setUserName(elem.target.value)} /><br />
                <input type="submit" value="Save" />
                <input type="button" onClick={() => setHidden(true)} value="cancel"/> <br />
            </form>
        </div>}
        </>
    )
}
export default Contacts
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Register(props) {
    //Handle Register requests
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const register = e => {
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        .then(res => {
            if (res.statusCode === 200) {
                return res.text()
                .then(msg => {
                    alert(msg);
                    window.location = '/login';
                });
            } else {
                return res.text()
                .then(err => alert(err));
            }
        })
    }
    
    return (
        <div>
        <form>
            <h1>Register</h1>
            <label>Username</label>
            <input onChange={e => setUsername(e.target.value)} required></input> <br />
            <label>Email</label>
            <input onChange={e => setEmail(e.target.value)} required></input> <br />
            <label >Password</label>
            <input onChange={e => setPassword(e.target.value)} type='password' required></input> <br />
            <button onClick={register}>Register</button>
            <Link to='./login'>
                <p>Already have an account? Login.</p>
            </Link>
        </form>
        </div>
    )
}

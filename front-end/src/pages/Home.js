import React, {useState, useEffect} from 'react';

export default function Home(props) {
    //Handle User Sessions
    const [session, setSession] = useState('');
    useEffect(() => {
        setSession(localStorage.getItem('session'));
    }, []);
    
    return (
        <div>
            <h1>Home!!!</h1>
        </div>
    )
}

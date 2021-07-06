import React, {useState, useEffect} from 'react';

export default function Error(props) {
    //Handle User Sessions
    const [session, setSession] = useState('');
    useEffect(() => {
        setSession(localStorage.getItem('session'));
    }, []);

    return (
        <div>
            <h1>404</h1>
        </div>
    )
}

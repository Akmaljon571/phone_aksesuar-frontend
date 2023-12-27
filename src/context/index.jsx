import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const State = createContext()

export const api = 'http://127.0.0.1:8000'

export const StatePriveder = ({ children }) => {
    const [user, setUser] = useState({});
    const [count, setCount] = useState(0);
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');
    let id = 0
    try {
        id = jwtDecode(JSON.parse(localStorage.getItem('token')))?.user_id
    } catch (error) {
        id = 0
    }

    const [user_id, setUser_id] = useState(id);

    useEffect(() => {
        if (user_id) {
            fetch(api + '/api/data/' + user_id)
                .then(re => re.json())
                .then(data => setUser(data))
                .catch(err => console.log(err))
        } else {
            setUser({
                order_count: 0,
                like_count: 0
            })
        }
    }, [user_id, count]);

    const data = { user, setUser, token, setToken, user_id, setUser_id, count, setCount }

    return <State.Provider value={data}>{children}</State.Provider>
}
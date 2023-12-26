import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { State, api } from '../../context';
import './auth.scss'

function Auth() {
    const [login, setLogin] = useState(true);
    const { setToken, setUser_id } = useContext(State)
    const name = useRef()
    const pass = useRef()
    const email = useRef()
    const navigate = useNavigate()

    const send = () => {
        if (login) {
            fetch(api + '/api/login/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: name.current.value,
                    password: pass.current.value
                })
            })
                .then(re => re.status === 200 ? re.json() : alert('Siz kiritgan ma`lumot hato'))
                .then(data => {
                    if (data) {
                        setToken(data?.access_token)
                        setUser_id(data?.user_id)
                        localStorage.setItem('token', JSON.stringify(data?.access_token))
                        navigate('/')
                    } else {
                        alert('Siz kiritgan ma`lumot hato')
                    }
                })
                .catch(err => console.log(err))
        } else {
            fetch(api + '/api/register/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: name.current.value,
                    password: pass.current.value,
                    email: email.current.value
                })
            })
                .then(re => re.json())
                .then(data => {
                    if (data?.access_token) {
                        setToken(data?.access_token)
                        setUser_id(data?.user_id)
                        localStorage.setItem('token', JSON.stringify(data?.access_token))
                        navigate('/')
                    } else {
                        alert('Siz kiritgan ma`lumot hato')
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className="auth">
            <h2>{login ? 'Login' : 'Register'}</h2>
            <input ref={name} type="text" placeholder='Ismingiz' />
            <input ref={pass} type="text" placeholder='Password' />
            {login ? null : <input ref={email} type="text" placeholder='Email' />}
            <button onClick={send}>Jo'natish</button>
            <p>Sizda akkaunt {login ? 'yoq' : 'bor'} bolsa <span onClick={() => setLogin(!login)}>{login ? 'register' : 'login'}</span> ga o'ting</p>
        </div>
    );
}

export default Auth;
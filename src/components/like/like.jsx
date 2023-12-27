import like from '../../img/like (1).svg'
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { sum } from '../../utils/func';
import { useNavigate } from 'react-router-dom';
import error from '../../img/404-page-not-found-illustration-2048x998-yjzeuy4v.png'
import './like.scss'

function Like() {
    const [data, setData] = useState([]);
    const { user_id, count, setCount } = useContext(State)
    const navigate = useNavigate()

    useEffect(() => {
        if (user_id)
            fetch(api + '/like/user/' + user_id)
                .then(re => re.json())
                .then(data => setData(data))
                .catch(err => console.log(err))
        else {
            navigate('/auth')
        }
    }, [user_id, navigate, count]);

    const del = (id) => {
        fetch(api + `/like/user/${user_id}/pro/${id}`, {
            method: "DELETE"
        })
            .then(re => re.json())
            .then(data => {
                if (data?.message) {
                    setCount(count + 1)
                } else {
                    alert('Hatolik chiqdi')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <ul className="like">
            {data?.length ? data.map(e => (
                <li key={e.id}>
                    <div className='junior'>
                        <img className='main' src={api + e.pro_id?.image} alt="Card_product" />
                    </div>
                    <div className='middle'>
                        <h3>{e.pro_id.title}</h3>
                        <span>{sum(e.pro_id.price)}so'm</span>
                    </div>
                    <div className="senior">
                        <img src={like} onClick={() => del(e.pro_id.id)} alt="Like Icon" />
                        <span>{sum(e.pro_id.price)}so'm</span>
                    </div>
                </li>
            )) : <div style={{ margin: "0 auto" }} className="error">
                <img style={{ width: '609px' }} src={error} alt="Error Page" />
                <h3>Sizning Like sahifangiz bosh</h3>
                <button onClick={() => navigate('/')}>Ortga qaytish</button>
            </div>}
        </ul>
    );
}

export default Like;
import like from '../../img/like (1).svg'
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import { sum } from '../../utils/func';
import './like.scss'

function Like() {
    const [data, setData] = useState([]);
    const { user_id, count, setCount } = useContext(State)

    useEffect(() => {
        fetch(api + '/like/user/' + user_id)
            .then(re => re.json())
            .then(data => setData(data))
    }, [user_id]);

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
            )) : null}
        </ul>
    );
}

export default Like;
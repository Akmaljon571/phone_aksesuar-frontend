import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext, useEffect, useState } from 'react';
import delImage from '../../img/del.svg'
import map from '../../img/Rectangle 6.png'
import das from '../../img/das.svg'
import error from '../../img/Illustration.png'
import { useNavigate } from 'react-router-dom';
import { State, api } from '../../context';
import { sum } from '../../utils/func';
import './order.scss'

function Order() {
    const [list, setList] = useState([1]);
    const [jami, setJami] = useState(0);
    const { user_id, setCount, count } = useContext(State)
    const navigate = useNavigate()

    useEffect(() => {
        if (user_id) {
            fetch(api + '/order/user/' + user_id)
                .then(re => re.json())
                .then(data => {
                    setList(data.data)
                    setJami(data.jami)
                })
                .catch(err => console.log(err))
        } else {
            navigate('/auth')
        }
    }, [user_id, navigate, count]);

    const del = (id) => {
        fetch(api + `/order/user/${user_id}/pro/${id}`, {
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
        <div className='order'>
            <h2>Korzina</h2>
            {list.length ?
                <div className='order-fath'>
                    <ul className="left">
                        {list.map((e, i) => (
                            <li key={i}>
                                <div className='junior'>
                                    <img className='main' src={api + e.product?.image} alt="Card_product" />
                                    <div>
                                        <button className='no'>
                                            <RemoveIcon />
                                        </button>
                                        <span>
                                            {e.count}
                                        </span>
                                        <button>
                                            <AddIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className='middle'>
                                    <h3>{e.product?.title}</h3>
                                    <span>{sum(e.product?.price)}so'm</span>
                                </div>
                                <div className="senior">
                                    <img onClick={() => del(e.product.id)} src={delImage} alt="Delete" />
                                    <span>{sum(e.product?.price)}so'm</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="right">
                        <div className="jami">
                            <p className="top">
                                Jami <span>{sum(jami)}so'm</span>
                            </p>
                            <div onClick={() => navigate('/buy')} className="bottom">Buyurtma berish</div>
                        </div>
                        <div className="dastavka">
                            <h3>Yetkazib berish</h3>
                            <img className='main' src={map} alt="Map" />
                            <div className="bottom">
                                <p><img src={das} alt="Dastavka iconkasi" /> Kuryer orqali etkazib berish</p>
                                <span>10%</span>
                            </div>
                        </div>
                    </div>
                </div> : <div className='error'>
                    <img src={error} alt="Length None" />
                    <h3>Savat bo'sh</h3>
                    <p>Lekin buni tuzatish hech qachon kech emas :)</p>
                    <button onClick={() => navigate('/')}>Ortga qaytish</button>
                </div>
            }
        </div >
    );
}

export default Order;
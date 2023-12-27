import like from '../../img/like.svg'
import like1 from '../../img/like (1).svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { State, api } from '../../context';
import { sum } from '../../utils/func';
import './product.scss'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Products({ image, title, price, liked, ordered, id }) {
    const { user_id, count, setCount } = useContext(State)
    const navigate = useNavigate()

    const createLike = () => {
        if (user_id) {
            fetch(api + '/like/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id,
                    pro_id: id
                })
            })
                .then(re => re.json())
                .then(data => {
                    if (data.message) {
                        setCount(count + 1)
                    } else {
                        alert('Hatolik bor')
                    }
                })
                .catch(err => console.log(err))
        } else {
            navigate('/auth')
        }
    }

    const createOrder = () => {
        if (user_id) {
            fetch(api + '/order/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: user_id,
                    product: id
                })
            })
                .then(re => re.json())
                .then(data => {
                    if (data.message) {
                        setCount(count + 1)
                    } else {
                        alert('Hatolik bor')
                    }
                })
                .catch(err => console.log(err))
        } else {
            navigate('/auth')
        }
    }

    return (
        <li>
            <img className='like' onClick={createLike} src={!liked ? like : like1} alt="Like Icon" />
            <img className='main_img' src={image} alt="Profuct_img" />
            <div>
                <h4>{title}</h4>
                <span>{sum(price)}so'm</span>
            </div>
            <p onClick={createOrder}><ShoppingCartIcon className='order' /> {!ordered ? '+1' : null}</p>
        </li>
    );
}

export default Products;
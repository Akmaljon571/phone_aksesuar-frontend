import { Link, useLocation, useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import logo from '../../img/Frame 9.svg'
import like from '../../img/Vector.svg'
import order from '../../img/Vector (1).svg'
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';
import './header.scss'

function Header() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const { token, user } = useContext(State)
    const id = useLocation().pathname.split('/').reverse()[0]
    const cat = useLocation().pathname.split('/')[1]
    const navigate = useNavigate()

    const click = () => {
        setOpen(!open)
    }

    useEffect(() => {
        fetch(api + '/category', {
            method: 'GET'
        })
            .then(re => re.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <header className="header">
            <ul>
                <li>
                    <Link to={'/'}>
                        <img className='logo' src={logo} alt="Company Logo" />
                    </Link>
                    <p onClick={click}>Category <KeyboardArrowDownIcon /></p>
                </li>
                <li>
                    {token ? '' : <a href='/auth'>Login</a>}
                    <Badge badgeContent={user.like_count} color="success">
                        <Link to={'/like'}>
                            <img src={like} alt="like icon" />
                        </Link>
                    </Badge>
                    <Badge badgeContent={user.order_count} color="primary">
                        <Link to={'/order'}>
                            <img src={order} alt="like icon" />
                        </Link>
                    </Badge>
                </li>
            </ul>
            <ul className={!open ? 'category height' : 'category'}>
                <li onClick={() => { navigate(`/`) }} className={cat !== 'category' ? 'active' : ''}>
                    All
                </li>
                {data?.length ? data.map(e => (
                    <li key={e.id} onClick={() => { navigate(`category/${e.title}/${e.id}`) }} className={Number(id) === e.id ? 'active' : ''}>
                        {e.title}
                    </li>
                )) : null}
            </ul>
        </header>
    )
}

export default Header
import { Link, useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import logo from '../../img/Frame 9.svg'
import like from '../../img/Vector.svg'
import order from '../../img/Vector (1).svg'
import './header.scss'
import { useContext, useEffect, useState } from 'react';
import { State, api } from '../../context';

function Header() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [active, setActive] = useState(0);
    const { token, user } = useContext(State)
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
                <li onClick={() => { setActive(0); navigate(`/`) }} className={active === 0 ? 'active' : ''}>
                    All
                </li>
                {data?.length ? data.map(e => (
                    <li key={e.id} onClick={() => { setActive(0); navigate(`category/${e.title}/${e.id}`) }} className={active === e.id ? 'active' : ''}>
                        {e.title}
                    </li>
                )) : null}
            </ul>
        </header>
    )
}

export default Header
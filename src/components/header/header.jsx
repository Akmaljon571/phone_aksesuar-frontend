import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import logo from '../../img/Frame 9.svg'
import like from '../../img/Vector.svg'
import order from '../../img/Vector (1).svg'
import './header.scss'
import { useState } from 'react';

function Header() {
    const [open, setOpen] = useState(false);

    const click = () => {
        setOpen(!open)
    }

    return (
        <header className="header">
            <ul>
                <li>
                    <Link to={'/'}>
                        <img src={logo} alt="Company Logo" />
                    </Link>
                    <p onClick={click}>Category <KeyboardArrowDownIcon /></p>
                </li>
                <li>
                    <Badge badgeContent={0} color="success">
                        <Link to={'/like'}>
                            <img src={like} alt="like icon" />
                        </Link>
                    </Badge>
                    <Badge badgeContent={0} color="primary">
                        <Link to={'/order'}>
                            <img src={order} alt="like icon" />

                        </Link>
                    </Badge>
                </li>
            </ul>
            <ul className={!open ? 'category height' : 'category'}>
                <li>
                    Erkak Kiyimlari
                </li>
                <li className='active'>
                    Ekran
                </li>
                <li>
                    Iphone
                </li>
                <li>
                    Oyoq kiyimla
                </li>
            </ul>
        </header>
    )
}

export default Header
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../img/Frame 9.svg'
import like from '../../img/Vector (1).svg'
import order from '../../img/Vecto.svg'
import './header.scss'

function Header() {
    return (
        <header className="header">
            <ul>
                <li>
                    <Link to={'/'}>
                        <img src={logo} alt="Company Logo" />
                    </Link>
                    <p>Category <KeyboardArrowDownIcon /></p>
                </li>
                <li>
                    <img src={like} alt="like icon" />
                    <img src={order} alt="like icon" />
                </li>
            </ul>
        </header>
    )
}

export default Header
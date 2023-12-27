import { Link } from 'react-router-dom'
import logo from '../../img/Frame 9.svg'
import vk from '../../img/VK.svg'
import ins from '../../img/Instagram.svg'
import tg from '../../img/Telegram.svg'
import w from '../../img/Whatsapp.svg'
import './footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <Link to={'/'}>
                <img src={logo} alt="Company Logo" />
            </Link>
            <ul>
                <li>
                    Samsung
                </li>
                <li>
                    Iphone
                </li>
                <li>
                    Redmi
                </li>
            </ul>
            <ul>
                <li>
                    Zashita
                </li>
                <li>
                    Ekran
                </li>
                <li>
                    Maska
                </li>
            </ul>
            <ul className='tarmoq'>
                <li>
                    <img src={vk} alt="Ichtimoiy Tarmoq" />
                </li>
                <li>
                    <img src={ins} alt="Ichtimoiy Tarmoq" />
                </li>
                <li>
                    <img src={tg} alt="Ichtimoiy Tarmoq" />
                </li>
                <li>
                    <img src={w} alt="Ichtimoiy Tarmoq" />
                </li>
            </ul>
        </footer>
    )
}

export default Footer
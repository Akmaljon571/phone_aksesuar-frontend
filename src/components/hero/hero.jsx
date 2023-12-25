import phones from '../../img/iPhone-13-Pro-Max-silver-1000x1000 1.png'
import './hero.scss'

function Hero() {
    return (
        <div className="hero">
            <p>Aksessuarlar
                Iphone 13 Pro Max</p>
            <img src={phones} alt="Phones" />
        </div>
    );
}

export default Hero

import like from '../../img/like (1).svg'
import rasm from '../../img/Image.png'
import './like.scss'

function Like() {
    return (
        <ul className="like">
            <li>
                <div className='junior'>
                    <img className='main' src={rasm} alt="Card_product" />
                </div>
                <div className='middle'>
                    <h3>Apple BYZ S852I</h3>
                    <span>2 927 ₸</span>
                </div>
                <div className="senior">
                    <img src={like} alt="Like Icon" />
                    <span>2 927 ₸</span>
                </div>
            </li>
            <li>
                <div className='junior'>
                    <img className='main' src={rasm} alt="Card_product" />
                </div>
                <div className='middle'>
                    <h3>Apple BYZ S852I</h3>
                    <span>2 927 ₸</span>
                </div>
                <div className="senior">
                    <img src={like} alt="Like Icon" />
                    <span>2 927 ₸</span>
                </div>
            </li>
            <li>
                <div className='junior'>
                    <img className='main' src={rasm} alt="Card_product" />
                </div>
                <div className='middle'>
                    <h3>Apple BYZ S852I</h3>
                    <span>2 927 ₸</span>
                </div>
                <div className="senior">
                    <img src={like} alt="Like Icon" />
                    <span>2 927 ₸</span>
                </div>
            </li>
        </ul>
    );
}

export default Like;
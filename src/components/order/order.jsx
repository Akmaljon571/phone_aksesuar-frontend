import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import rasm from '../../img/Image.png'
import del from '../../img/del.svg'
import map from '../../img/Rectangle 6.png'
import das from '../../img/das.svg'
import error from '../../img/Illustration.png'
import './order.scss'
import { useNavigate } from 'react-router-dom';

function Order() {
    const [list, setList] = useState([1]);
    const navigate = useNavigate()

    return (
        <div className='order'>
            <h2>Korzina</h2>
            {list.length ?
                <div className='order-fath'>
                    <ul className="left">
                        <li>
                            <div className='junior'>
                                <img className='main' src={rasm} alt="Card_product" />
                                <div>
                                    <button className='no'>
                                        <RemoveIcon />
                                    </button>
                                    <span>
                                        1
                                    </span>
                                    <button>
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                            <div className='middle'>
                                <h3>Apple BYZ S852I</h3>
                                <span>2 927 ₸</span>
                            </div>
                            <div className="senior">
                                <img src={del} alt="Delete" />
                                <span>2 927 ₸</span>
                            </div>
                        </li>
                        <li>
                            <div className='junior'>
                                <img className='main' src={rasm} alt="Card_product" />
                                <div>
                                    <button className='no'>
                                        <RemoveIcon />
                                    </button>
                                    <span>
                                        1
                                    </span>
                                    <button>
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                            <div className='middle'>
                                <h3>Apple BYZ S852I</h3>
                                <span>2 927 ₸</span>
                            </div>
                            <div className="senior">
                                <img src={del} alt="Delete" />
                                <span>2 927 ₸</span>
                            </div>
                        </li>
                        <li>
                            <div className='junior'>
                                <img className='main' src={rasm} alt="Card_product" />
                                <div>
                                    <button className='no'>
                                        <RemoveIcon />
                                    </button>
                                    <span>
                                        1
                                    </span>
                                    <button>
                                        <AddIcon />
                                    </button>
                                </div>
                            </div>
                            <div className='middle'>
                                <h3>Apple BYZ S852I</h3>
                                <span>2 927 ₸</span>
                            </div>
                            <div className="senior">
                                <img src={del} alt="Delete" />
                                <span>2 927 ₸</span>
                            </div>
                        </li>
                    </ul>
                    <div className="right">
                        <div className="jami">
                            <p className="top">
                                Jami <span>₸ 2 927</span>
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
                </div>}
        </div>
    );
}

export default Order;
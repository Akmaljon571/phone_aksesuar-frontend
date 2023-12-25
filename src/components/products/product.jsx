import rasm from '../../img/Image.png'
import like from '../../img/like.svg'
import like1 from '../../img/like (1).svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './product.scss'

function Products() {
    return (
        <div className="products">
            <h3>Naushniklar</h3>
            <ul>
                <li>
                    <img className='like' src={like || like1} alt="Like Icon" />
                    <img className='main_img' src={rasm} alt="Profuct_img" />
                    <div>
                        <h4>Apple BYZ S852I</h4>
                        <span>2 327 000 so'm</span>
                    </div>
                    <p><ShoppingCartIcon className='order' /> +1</p>
                </li>
            </ul>
        </div>
    );
}

export default Products;
import { useNavigate } from "react-router-dom";
import error from '../../img/404-page-not-found-illustration-2048x998-yjzeuy4v.png'
import './error.scss'

function Error() {
    const navigate = useNavigate()

    return (
        <div className="error">
            <img style={{ width: '609px' }} src={error} alt="Error Page" />
            <h3>Bunday sahifa topilmadi</h3>
            <button onClick={() => navigate('/')}>Ortga qaytish</button>
        </div>
    );
}

export default Error;
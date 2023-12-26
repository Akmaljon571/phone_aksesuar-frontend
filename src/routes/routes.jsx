import { Route, Routes } from 'react-router-dom'
import { Home } from '../page';
import { Order } from '../components';

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            {/* <Route path='/' element={} /> */}
            {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
    )
}

export default Routers;
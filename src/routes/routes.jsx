import { Route, Routes } from 'react-router-dom'
import { Home } from '../page';
import { Like, Order } from '../components';

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/order' element={<Order />} />
            <Route path='/like' element={<Like />} />
            {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
    )
}

export default Routers;
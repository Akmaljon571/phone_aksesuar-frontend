import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Products from "../products/product";
import { State, api } from "../../context";

function HomeProducts() {
    const [cat, setCat] = useState([]);
    const { user_id, count } = useContext(State)
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api + '/category')
            .then(re => re.json())
            .then(data => {
                setCat(data)
                setProducts([])
            })
            .catch(err => console.log(err))
    }, [user_id]);

    useEffect(() => {
        if (cat.length) {
            let arr = []
            cat.map(e => (
                fetch(api + `/product/${e.id}/user/${user_id}/`)
                    .then(re => re.json())
                    .then(data => {
                        setProducts([{ id: e.id, data: data.slice(0, 3) }, ...arr])
                        arr.push({ id: e.id, data: data.slice(0, 3) })
                    })
            ))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cat, count]);

    return (
        <>
            {cat.length ? cat.map((e, i) => (
                <div key={e.id}>
                    <h3 onClick={() => navigate('/category/' + e.id)} className="title">{e.title}</h3>
                    <ul className="products">
                        {products.sort((a, b) => a.id - b.id)[i]?.id === e.id ? products.sort((a, b) => a.id - b.id)[i]?.data?.map((prod, index) => (
                            <Products key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} liked={prod.liked} ordered={prod.ordered} />
                        )) : null}
                    </ul>
                </div>
            )) : null}
        </>
    );
}

export default HomeProducts;
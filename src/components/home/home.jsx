import { useContext, useEffect, useState } from "react";
import Products from "../products/product";
import { State, api } from "../../context";
import { useNavigate } from "react-router-dom";

function HomeProducts() {
    const [cat, setCat] = useState([]);
    const { user_id } = useContext(State)
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(api + '/category')
            .then(re => re.json())
            .then(data => {
                setCat(data)
                data.map(e => (
                    fetch(api + `/product/${e.id}/user/${user_id}/`)
                        .then(re => re.json())
                        .then(data => setProducts([...products, data.slice(0, 3)]))
                ))
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user_id]);

    return (
        <>
            {cat.length ? cat.map((e, i) => (
                <div key={e.id}>
                    <h3 onClick={() => navigate('/category/' + e.id)} className="title">{e.title}</h3>
                    <ul className="products">
                        {products[i]?.map((prod, index) => (
                            <Products key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} />
                        ))}
                    </ul>
                </div>
            )) : null}
        </>
    );
}

export default HomeProducts;
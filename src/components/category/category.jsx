import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { State, api } from "../../context";
import Products from "../products/product";

function Category() {
    const [pro, setPro] = useState([]);
    const { id, title } = useParams()
    const { user_id, count } = useContext(State)

    useEffect(() => {
        fetch(api + `/product/${id}/user/${user_id}/`)
            .then(re => re.json())
            .then(data => {
                setPro(data)
            })
    }, [id, user_id, count]);

    return (
        <div className="category">
            <h3 className="title">{title}</h3>
            <ul className="products">
                {pro.length ? pro.map((prod, index) => (
                    <Products key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} liked={prod.liked} ordered={prod.ordered} />
                )) : null}
            </ul>
        </div>
    );
}

export default Category;
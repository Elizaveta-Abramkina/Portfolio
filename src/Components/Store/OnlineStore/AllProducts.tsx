import React, {useContext} from "react";
import {OnlineStoreContext} from "./OnlineStoreContext";
import {Link} from "react-router-dom";

const AllProducts = () => {

    const {context} = useContext(OnlineStoreContext)

    if (context.length === 1) return <h1>All products</h1>

    return (
        <div>
            {context.map((el) => {
                if (el.title === '') return null

                return (<div key={Math.random()}>
                        <div className='card'>
                            <Link to={`/store/products/`+ el.productLink}>ссылка</Link>
                            <p>{el.linkAllProducts +"/"+ el.productLink}</p>
                            <img src={el.img} alt="0"/>
                            <h3>{el.title}</h3>
                            <p>{el.price}</p>
                            <p>{el.newPrice}</p>
                            <button>buy</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default AllProducts;



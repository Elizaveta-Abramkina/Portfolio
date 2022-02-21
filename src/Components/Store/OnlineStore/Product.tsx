import React, {useContext, useEffect, useState} from "react"
import {OnlineStoreContext} from "./OnlineStoreContext";
import {useParams} from "react-router-dom";
import '../../../styles/Product.css'

const Product: React.FC = () => {

    const {context} = useContext(OnlineStoreContext)

    const {productLink} = useParams()

    const productArr = context.filter((el)=>{
        if (el.productLink === productLink) return true
    })

    // const productArr = [
    //     {
    //         title: 'The Ordinary AHA 30% + BHA 2% Peeling Solution',
    //         price: 650,
    //         discountPrice: null,
    //         description: 'An exfoliating peel.\n' +
    //             '\n' +
    //             'Treating the top layer of skin, AHA 30% + BHA 2% Peeling Solution exfoliates for a brighter and clearer complexion. Fighting visible blemishes, continued weekly use reduces pore congestion and fine lines for a bright, youthful complexion.',
    //         available: 10,
    //         vendorCode: 'PRD-003',
    //         category: 'Bicecles',
    //         img: ['https://cdn1.ozone.ru/s3/multimedia-m/wc1200/6101625682.jpg',
    //             'https://opt-1646020.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/18a/450_450_140cd750bba9870f18aada2478b24840a/18a818c6228e15ecb8164b40d9868ea1.jpg?159059222546105',
    //             'https://opt-1646020.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/1cf/450_450_140cd750bba9870f18aada2478b24840a/1cf6acd1ad00addefc10509e510cf59c.jpg?159059222528596',
    //             'https://opt-1646020.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/d6e/450_450_140cd750bba9870f18aada2478b24840a/d6e4d6496f9948ecdfb11ab646046bfc.jpg?159059222524853',
    //         ],
    //         linkAllProducts: 'http://localhost:3000/store/products',
    //         productLink: ''
    //     }]


    const [index, setIndex] = useState(0)

    const swipeLeft = () => {
        if (index == 0) {
            setIndex(productArr[0].img.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const swipeRight = () => {
        if (index === productArr[0].img.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    if (productArr.length === 0) return <h3>Товары еще не добавлены</h3>
    return (
        <div className="container">
            <div className="page-product">
                <div className="page-product__img-box">
                    <div className="page-product__main-box">
                        <button className="arrow-left" onClick={swipeLeft}></button>
                        <button className="arrow-right" onClick={swipeRight}>сюда</button>
                        <img className='page-product__main-img animation' key={Math.random()}
                             src={productArr[0].img[index]} alt="#"/>
                    </div>

                {/*    <div className="page-product__img-container">*/}
                {/*        {productArr[0].img.map((e, i) => {*/}
                {/*            return (*/}
                {/*                <img className="page-product__img-small" src={e} onClick={() => setIndex(i)} alt="#"/>*/}
                {/*            )*/}
                {/*        })*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="details">*/}
                {/*    <h3 className="details__title">{productArr[0].title}</h3>*/}
                {/*    {productArr[0].discountPrice ?*/}
                {/*        <div className="price">*/}
                {/*            <p className='price_sales'>{productArr[0].discountPrice} ₽</p>*/}
                {/*            <p className='price_default-sales'>{productArr[0].price} ₽</p>*/}
                {/*        </div>*/}
                {/*        : <div className="price">*/}
                {/*            <p className='price_default'>{productArr[0].price} ₽</p>*/}
                {/*        </div>}*/}
                {/*    <div className="button-available">*/}
                {/*        <div className="background"> <button className="button button_mode_accent">Add to cart</button></div>*/}
                {/*        {productArr[0].available <= 0 ? <p>Don't available</p> : productArr[0].available > 5 ?<p>Available</p> :  <p>Available {productArr[0].available} items</p>}*/}
                {/*    </div>*/}

                    <p>{productArr[0].description}</p>
                    <p className="text_type_simple">{productArr[0].vendorCode}</p>
                </div>
            </div>
        </div>
    )
}


export default Product;



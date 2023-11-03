import React from 'react'
import Image from 'next/image'
import { FaSearch, FaRegHeart, FaShoppingBasket, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa'

function Vip({data}) {
    return (
        <section className='vip'>
            <h2 className='heading-secondary'>Specialy for You</h2>
            <div className='vip--body'>

                {data && data.map((val, index) => {
                    // Just for show beter images :)
                    if ((index > 3 && index < 8) || (index > 15 && index < 20))
                        return (
                            <div onClick={() => console.log("iam here")} className="card">
                                <div className="card__image">
                                    <img src={val.image} alt={val.title} />
                                    <div className="card__image--icon">
                                        <FaRegHeart />
                                        {/* <FaHeart color='red' /> */}
                                    </div>
                                </div>
                                <div className="card__header">
                                    <h1 className="card__header--title">{val.title}</h1>
                                    <p className="card__header--price">$
                                        <span>{val.price.toString()?.split(".")[0]}</span>
                                        {val.price.toString()?.split(".")[1] ? `.${val.price.toString()?.split(".")[1]}` : `.${(index + 1) * 2}`}
                                    </p>
                                </div>
                                <p className="card__header--description">{val.description}</p>
                                <p className="card__header--rate">{[...Array(Math.round(val.rating.rate))].map((_, i) => (<FaStar key={i} color='#d27a4b' fontSize={20} />))}</p>
                                <button className="btn--card">Add to Cart</button>
                            </div>
                        )
                })
                }
            </div>
        </section>
    )
}

export default Vip

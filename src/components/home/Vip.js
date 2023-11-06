import React from 'react'
import Image from 'next/image'
import { FaSearch, FaRegHeart, FaShoppingBasket, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

function Vip({ data, addLike, removeLike, liked }) {
    return (
        <section className='vip'>
            <h2 className='heading-secondary'>Specialy for You</h2>
            <div className='vip--body'>

                {data && data.map((val, index) => {
                    // Just for show beter images :)
                    if ((index > 3 && index < 8) || (index > 15 && index < 20))
                        return (
                            <div key={val.id} className="card">
                                <div className="card__image">
                                    <img src={val.image} alt={val.title} />
                                    <div className="card__image--icon">
                                        {liked.find(like => like.id === val.id) ?
                                            <FaHeart color='red' onClick={() => removeLike(val)} />
                                            :
                                            <FaRegHeart color='black' onClick={() => addLike(val)} />
                                        }
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
                                <Link href={`/products/${val.id}`}>
                                    <button className="btn--card">Add to Cart</button>
                                </Link>
                            </div>
                        )
                })}
            </div>
        </section>
    )
}

export default Vip

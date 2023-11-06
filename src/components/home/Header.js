"use client"
import React from 'react'
import Image from 'next/image'
import { FaSearch, FaRegHeart, FaShoppingBasket, FaHeart, FaStar } from 'react-icons/fa'
import Link from 'next/link';

function Header({ myFont2, bagHandeler, liked }) {
    const [selectSize, setSelectSize] = React.useState(2);
    const handelSize = (index) => {
        setSelectSize(index);
    }
    return (
        <header className='header'>
            <div className='header--btn btn--animation' onClick={bagHandeler}>Add to Bag</div>
            <div className='header--layout'>
                <div className='header--white'>
                    <div className='header--white--icon'>
                        <FaHeart />
                    </div>
                </div>
            </div>
            <div className='header__nav'>
                <div className='header__nav--logo'>
                    <div style={{
                        background: "#000",
                        padding: "0",
                        backgroundClip: "content-box",
                        borderRadius: "1000px",
                    }}>

                        <Image
                            src="/sizeer-logo.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={120}
                            height={45}
                            priority
                        />
                    </div>
                </div>
                <ul className='header__nav--navbar'>
                    <li className=''>Brands</li>
                    <li className=''>Men</li>
                    <li className=''>Women</li>
                    <li className=''>Kids</li>
                </ul>
                <ul className='header__nav--dashboard'>
                    <li className='header__nav--dashboard--1 header__nav--dashboard--search'>
                        <FaSearch className='header__nav--dashboard--search--icon' />
                        <input type='checkbox' className='header__nav--dashboard--search--icon-check' />
                        <input className='header__nav--dashboard--search--input' placeholder='search here' />
                    </li>
                    <Link href="/checkout" className='header__nav--dashboard--2'>
                        <FaRegHeart />
                        <div className='header__nav--dashboard--label'>
                            <span>{liked.length}</span>
                        </div>
                    </Link>
                    <Link href="/checkout" className='header__nav--dashboard--3'>
                        <FaShoppingBasket />
                        <div className='header__nav--dashboard--label'>
                            <span>1</span>
                        </div>
                    </Link>
                </ul>
            </div>
            <div className='header__text'>
                <h1 className={myFont2.className + ' header__text--1'}>Jor<span>da</span>n</h1>
                <h1 className={myFont2.className + ' header__text--2'}>MA2</h1>
            </div>
            <div className='header__footer'>
                <ul className='header__footer--detail'>
                    <li className='header__footer--detail--1'>
                        <span className='header__footer--detail--1--span'><FaStar /> <span>5.0</span></span>
                        <span>Highly Rated</span>
                    </li>
                    <li className='header__footer--detail--2'>
                        <Image
                            src="/home-add-1.jpg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={160}
                            height={75}
                            priority
                        />
                    </li>
                    <li className='header__footer--detail--3'>-35%</li>
                    <li className='header__footer--detail--4'>
                        <Image
                            src="/home-add-2.jpg"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={160}
                            height={75}
                            priority
                        />
                    </li>
                </ul>
                <div className='header__footer--price'>
                    <p className='header__footer--price--1'>$225.00</p>
                    <p className='header__footer--price--2'>$146.25</p>
                </div>
                <div className='header__footer--size'>
                    <div className='header__footer--size--text'>
                        <p className='header__footer--size--text--1'>Select Size</p>
                        <p className='header__footer--size--text--2'></p>
                        <p className='header__footer--size--text--3'>Size Guide</p>
                    </div>
                    <ul className='header__footer--size--list'>
                        <li className='deactive'>36</li>
                        <li onClick={() => handelSize(1)} className={selectSize === 1 ? "active" : ""}>36,5</li>
                        <li onClick={() => handelSize(2)} className={selectSize === 2 ? "active" : ""}>37</li>
                        <li onClick={() => handelSize(3)} className={selectSize === 3 ? "active" : ""}>37,5</li>
                        <li onClick={() => handelSize(4)} className={selectSize === 4 ? "active" : ""}>38</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header

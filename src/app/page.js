'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaSearch, FaRegHeart, FaShoppingBasket, FaHeart, FaStar, FaArrowRight } from 'react-icons/fa'
import localFont from 'next/font/local'
import Navbar from '../components/Navbar'

const myFont = localFont({ src: '../fonts/Borel-Regular.ttf' })
const myFont2 = localFont({
  src: '../fonts/Vollkorn-VariableFont_wght.ttf'
})

import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../redux/Features/counter/counterSlice"
import { incrementBird } from "../redux/Features/counter/counterSlice"

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products', {
    // cache: "force-cache" // SSG get static side props
    // cache: "no-store" // SSR get server side props
    // next: {
    //   revalidate: 60 //ISR
    // }
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

export default async function Home({ params, searchParams }) {
  // const { id } = params
  const [data, setData] = React.useState(null);
  // const [stucky, setStucky] = React.useState(false);
  React.useEffect(() => {
    getData().then(valuse => setData(valuse));
  }, []);

  // const count = useSelector(state => state);
  // const dispatch = useDispatch();
  // console.log(count)
  // {/* <button onClick={() => dispatch(incrementBird("robin"))}>increment</button> */ }
  // {/* <h1>here is {count[0].views}</h1> */ }




  return (
    <React.Fragment>
      {data &&
        (<main className="">
          <header className='header'>
            <div className='header--btn btn--animation'>Add to Bag</div>
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
                <li className='header__nav--dashboard--2'>
                  <FaRegHeart />
                  <div className='header__nav--dashboard--label'>
                    <span>3</span>
                  </div>
                </li>
                <li className='header__nav--dashboard--3'>
                  <FaShoppingBasket />
                  <div className='header__nav--dashboard--label'>
                    <span>1</span>
                  </div>
                </li>
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
                  <li className=''>36,5</li>
                  <li className='active'>37</li>
                  <li className=''>37,5</li>
                  <li className=''>38</li>
                </ul>
              </div>
            </div>
          </header>
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
          <section className='video'>
            <div className='bg-video'>
              {/* <video className='bg-video__content' src='./cover.mp4' autoPlay /> */}
            </div>
            <div className='story'>
              <h1 className='heading-secondary'>Best experience with Us</h1>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-6 d-flex justify-content-center">
                  <div className="ih-item circle colored effect7 left_to_right card-story-main"><a href="#">
                    <div className="img"><img src="/story1.jpg" alt="img" /></div>
                    <div className="info">
                      <h3>Heading here</h3>
                      <p>Description goes here</p>
                    </div></a></div>
                </div>
                <div className="col-sm-6 d-flex justify-content-center">
                  <div className="ih-item circle colored effect7 right_to_left card-story-main"><a href="#">
                    <div className="img"><img src="/story2.jpg" alt="img" /></div>
                    <div className="info">
                      <h3>Heading here</h3>
                      <p>Description goes here</p>
                    </div></a></div>
                </div>
              </div>
            </div>
          </section>
          <section className='header-offer'>
            <h2 className='heading-secondary'>New Offfer</h2>
            <div className='header-offer--cards'>
              <div className="card__offer">
                <div className="card__offer__side card__offer__side--front">
                  <div className="card__offer__picture card__offer__picture--1">
                    &nbsp;
                  </div>
                  <h4 className="card__offer__heading">
                    <span className="card__offer__heading-span card__offer__heading-span--1">90%</span>
                  </h4>
                  <div className="card__offer__details">
                    <ul>
                      <li>5 day offer</li>
                      <li>Up to 15 people</li>
                      <li>3 offer guides</li>
                      <li>Sleep in provided tents</li>
                    </ul>
                  </div>

                </div>
                <div className="card__offer__side card__offer__side--back card__offer__side--back-1">
                  <div className="card__offer__cta">
                    <div className="card__offer__price-box">
                      <p className="card__offer__price-only">Only</p>
                      <p className="card__offer__price-value">$897</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
              <div className="card__offer">
                <div className="card__offer__side card__offer__side--front">
                  <div className="card__offer__picture card__offer__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="card__offer__heading">
                    <span className="card__offer__heading-span card__offer__heading-span--2">55%</span>
                  </h4>
                  <div className="card__offer__details">
                    <ul>
                      <li>5 day offer</li>
                      <li>Up to 15 people</li>
                      <li>2 offer guides</li>
                      <li>Sleep in provided tents</li>
                    </ul>
                  </div>

                </div>
                <div className="card__offer__side card__offer__side--back card__offer__side--back-2">
                  <div className="card__offer__cta">
                    <div className="card__offer__price-box">
                      <p className="card__offer__price-only">Only</p>
                      <p className="card__offer__price-value">$897</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
              <div className="card__offer">
                <div className="card__offer__side card__offer__side--front">
                  <div className="card__offer__picture card__offer__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="card__offer__heading">
                    <span className="card__offer__heading-span card__offer__heading-span--3">70%</span>
                  </h4>
                  <div className="card__offer__details">
                    <ul>
                      <li>5 day offer</li>
                      <li>Up to 15 people</li>
                      <li>3 offer guides</li>
                      <li>Sleep in provided tents</li>
                    </ul>
                  </div>

                </div>
                <div className="card__offer__side card__offer__side--back card__offer__side--back-3">
                  <div className="card__offer__cta">
                    <div className="card__offer__price-box">
                      <p className="card__offer__price-only">Only</p>
                      <p className="card__offer__price-value">$897</p>
                    </div>
                    <a href="#popup" className="btn btn--white">Book now!</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main >)
      }
      <Navbar />
    </React.Fragment>
  )
}

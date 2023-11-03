"use client"

import React, { useState, useEffect, useRef } from "react";
import { Badge, Image, Carousel } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight, FaMinus, FaPlus, FaSave, FaShippingFast, FaStar } from "react-icons/fa";
import ModalComponent from "../../../components/ModalComponent";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
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
function pages({ params, searchParams }) {
  // const { id } = params
  const [data, setData] = React.useState(null);
  const [imageGallery, setImageGallery] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const carouselContainerRef = useRef(null);

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);

  const galleryHandler = (idx) => {
    setActiveIndex(idx);
    if (window.innerWidth < 768 && carouselContainerRef.current) {
      carouselContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    getData(params.product).then(valuse => {
      setData(valuse)
      setImageGallery([valuse.image, valuse.image, valuse.image])
    });
  }, []);
  return (
    <React.Fragment>
      {data && imageGallery &&
        <div className='container'>
          <div className='product'>
            <div className='product__gallery'>
              {imageGallery.length > 0 ? (
                <React.Fragment>
                  <div className="product__gallery--box">
                    <Carousel
                      prevIcon={
                        <span
                          aria-hidden="true"
                          className="carousel-arrow carousel-arrow-dark"
                          style={{
                            width: "100%",
                            textAlign: "start"
                          }}
                        >
                          <FaAngleLeft color="#000" fontSize={20} />
                        </span>
                      }
                      nextIcon={
                        <span
                          aria-hidden="true"
                          className="carousel-arrow carousel-arrow-dark"
                          style={{
                            width: "100%",
                            textAlign: "end"
                          }}
                        >
                          <FaAngleRight color="#000" fontSize={20} />
                        </span>
                      }
                      interval={null}
                      defaultActiveIndex={0}
                      activeIndex={activeIndex}
                      onSelect={(idx) => setActiveIndex(idx)}
                      indicators={false}
                    >
                      {imageGallery.map((image, idx) => (
                        <Carousel.Item
                          onMouseEnter={() => setZoom(true)}
                          onMouseLeave={() => setZoom(false)}
                          key={idx}
                        >
                          <Image
                            className={`product__gallery--photos  ${`product__gallery--photos--${idx}`} ${zoom ? "zoomIn" : "zoomOut"}`}
                            src={image}
                            alt={image + "photo"}
                            rounded
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                  <div className="product__gallery--list">
                    {imageGallery?.map((image, idx) => (
                      <div
                        className={`${idx === activeIndex ? "active--photo" : ""
                          }`}
                        key={idx}
                        onClick={() => galleryHandler(idx)}
                      >
                        <Image className={`product__gallery--list--photos ${`product__gallery--list--photos--${idx}`}`} src={image} thumbnail />
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              ) : null}
            </div>
            <div className='product__details'>
              <h3 className="product__details--title">{data.title}</h3>
              <p className="product__details--description">{data.description}</p>
              <p className="product__details--rate">
                {[...Array(Math.round(data.rating.rate))].map((_, i) => (<FaStar key={i} color='#65277b' fontSize={15} />))}
                <span> ({data.rating.count})</span>
              </p>
              <p className="product__details--price">
                <span>
                  ${data.price} or {Math.floor(+data.price / 6)}/month
                </span>
                Suggested payments with 6 months special financing
              </p>
              <div className="product__details--color">
                <p>Choose a color</p>
                <ul className="product__details--color--list">
                  <li className="product__details--color--list__li product__details--color--list__li--1 active"></li>
                  <li className="product__details--color--list__li product__details--color--list__li--2"></li>
                  <li className="product__details--color--list__li product__details--color--list__li--3"></li>
                  <li className="product__details--color--list__li product__details--color--list__li--4"></li>
                  <li className="product__details--color--list__li product__details--color--list__li--5"></li>
                </ul>
              </div>
              <div className="product__details--counter">
                <div className="product__details--counter--box">
                  <button className="btn--counter"><FaPlus /></button>
                  <p>1</p>
                  <button className="btn--counter"><FaMinus /></button>
                </div>
                <div>
                  <div className="product__details--counter--text">
                    <p> Only <span>12 items</span> Left!</p>
                    <p>Don't miss it</p>
                  </div>
                </div>
              </div>
              <div className="product__details--buttons">
                <button className="btn product__details--buttons--1">Buy Now</button>
                <button className="btn product__details--buttons--2">Add to Cart</button>
              </div>
              <div className="product__details--delivery">
                <div className="product__details--delivery--box">
                  <span><FaShippingFast /></span>
                  <h6>Free Delivery</h6>
                  <p><a href="#">Enter your Postal code for Delivery Avalilabality</a></p>
                </div>
                <div className="product__details--delivery--box">
                  <span><FaSave /></span>
                  <h6>Return Delivery</h6>
                  <p>Freee 30day Delivary Returns. <a href="#">Details</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      {/* <ModalComponent show={show} setShow={setShow} justAccept={true} /> */}
    </React.Fragment >
  )
}

export default pages

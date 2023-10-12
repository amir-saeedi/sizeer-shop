"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaRegUser, FaSearch, FaShoppingCart, FaStar, FaStarHalf } from "react-icons/fa"

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

function NavbarCom() {
    const [data, setData] = React.useState(null);
    const navSerch = React.useRef(null);
    // const [stucky, setStucky] = React.useState(false);
    React.useEffect(() => {
        getData().then(valuse => setData(valuse));
    }, []);
    const nav = React.useRef(null)
    useEffect(() => {
        const navbar = (screen.height) * 0.80;
        const handleScroll = () => {
            if (window.pageYOffset >= navbar) {
                nav.current?.classList.add("sticky");
                nav.current?.classList.remove("noSticky");
            } else {
                nav.current?.classList.add("noSticky");
                nav.current?.classList.remove("sticky");
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    console.log(navSerch.current)
    return (
        // <div className='nav'>
        //     <Link href="/dashboard" >dashboard</Link >
        // </div>
        // <div id="navbar" className='navbar noSticky' ref={nav} >
        //     <a href="#home">Home</a>
        //     <a href="#news">News</a>
        //     <a href="#contact">Contact</a>
        // </div>
        <div id="navbarC" className='navAnimation noSticky' ref={nav}>
            <Navbar collapseOnSelect expand="lg" className="" bg='red'>
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src="/sizeer-logo.png"
                            alt="Vercel Logo"
                            className="dark:invert"
                            width={120}
                            height={45}
                            priority
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar-nav'>
                        <Nav className="me-auto">
                            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Women
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Kids</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Brands
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">Deals</Nav.Link>
                            <Nav.Link href="#features">What's New</Nav.Link>
                            <Nav.Link href="#features">Delivery</Nav.Link>
                        </Nav>
                        <div className='navbar__search'>
                            <FaSearch />
                            <input className='navbar__search--input'
                                onFocus={(e) => console.log(e)}
                                onBlur={(e) => console.log(e)}
                                placeholder='Search product' />
                            {data &&
                                <ul className='nav__search__list'>
                                    {data.map(val => {
                                        return (
                                            <Link href={"#"}>
                                                <li key={val.id}>
                                                    <img src={val.image} alt={val.title} className='nav__search__list--img' />
                                                    <p className='nav__search__list--title'>{val.title}</p>
                                                    <div className='nav__search__list--rate'>
                                                        {[...Array(Math.round(val.rating.rate))].map((_, i) => (<FaStar key={i*100} color='#d27a4b'  />))}
                                                    </div>
                                                    <p className='nav__search__list--price'>${val.price.toFixed(1)}</p>
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            }
                        </div>
                        <Nav>
                            <Nav.Link href="#deets" className='nav-link-icon'><FaRegUser />Account</Nav.Link>
                            <Nav.Link href="#deets" className='nav-link-icon'><FaShoppingCart />Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarCom

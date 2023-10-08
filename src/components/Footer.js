import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__list'>
                <ul className='footer__list--1'>
                    <li className='footer__list--header'>Resources</li>
                    <li className=''>Why this shop?</li>
                    <li className=''>Coustomer stories</li>
                    <li className=''>blog</li>
                    <li className=''>Guides</li>
                    <li className=''>Webinars</li>
                    <li className=''>Workplace Management</li>
                </ul>
                <ul className='footer__list--2'>
                    <li className='footer__list--header'>Company</li>
                    <li className=''>Aboutus</li>
                    <li className=''>Careers</li>
                    <li className=''>Leadeship</li>
                    <li className=''>Partners</li>
                    <li className=''>Press</li>
                    <li className=''>Contact Us</li>
                </ul>
                <ul className='footer__list--3'>
                    <li className='footer__list--header'>Social</li>
                    <li className=''>Linkedin</li>
                    <li className=''>Twitter</li>
                    <li className=''>Facebook</li>
                    <li className=''>Telegram</li>
                    <li className=''>Instagram</li>
                    <li className=''>WhatsApp</li>
                </ul>
            </div>
            <div className='footer__form'>
                <h3>Request a demo</h3>
                <form>
                    <div className='footer__form--input'>
                        <input placeholder='Enter your email' />
                        <FaArrowRight className='footer__form--input--icon' />
                    </div>
                </form>
            </div>
            <div className='footer__bg'>
                <img className='footer__bg--1' src="./undraw_shopping_app_flsj.svg" />
                <img className='footer__bg--2' src="./undraw_wishlist_re_m7tv.svg" />
            </div>
        </footer>
    )
}

export default Footer

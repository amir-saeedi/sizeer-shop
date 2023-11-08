"use client"

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form"
import Image from "next/image";
import Input from "../../components/Input"
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { decreaseCarts, increaseCarts, removeCarts } from "../../redux/cart/carts";

function pages({ params, searchParams }) {
    const carts = useSelector(state => state.carts);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            checkbox: 2,
            first_name:"hello"
        },
    })
    const sumWithInitial = carts.reduce((accumulator, currentValue) => accumulator + currentValue?.price * currentValue?.number, 0);

    const onSubmit = (data) => console.log(data);

    const increaseCart = (product) => {
        dispatch(increaseCarts({ ...product }));
    }
    const decreaseCart = (product) => {
        dispatch(decreaseCarts({ ...product }));
    }
    const removeCart = (product) => {
        dispatch(removeCarts(product));
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container carts">
                <section className="carts__review">
                    <ul className="carts__review__list">
                        <div className="carts--container">
                            <h3 className="carts__review__list--title">Review item and shipping</h3>
                            {carts.length > 0 ? carts.map(cart => (
                                <li key={cart.id}>
                                    <div className="carts__review__list--image">
                                        <img
                                            src={cart.image}
                                            alt={cart.title}
                                        />
                                    </div>
                                    <h5>{cart.title}</h5>
                                    <h5 className="carts__review__list--price">${cart.price}</h5>
                                    <p>Color: <span>pink</span></p>
                                    <p className="carts__review__list--quantity">Quantinty:
                                        {cart.number > 1 ?
                                            <FaMinus onClick={() => decreaseCart(cart)}
                                                className="carts__review__list--quantity--icon" /> :
                                            <FaTrash onClick={() => removeCart(cart)}
                                                className="carts__review__list--quantity--icon" />
                                        }
                                        <span>{cart.number}</span>
                                        <FaPlus onClick={() => increaseCart(cart)}
                                            className="carts__review__list--quantity--icon" />
                                    </p>
                                </li>
                            ))
                                : <li className="d-block"><h3>No any Product</h3></li>}
                        </div>
                    </ul>
                </section>
                <section className="carts__order">
                    <div className="carts--container">
                        <h3 className="carts__order--title">Order Summery</h3>
                        <div className="carts__order__coupon">
                            <div className="carts__order__coupon--form">
                                {/* <form> */}
                                <input placeholder='Enter Coupon code' />
                                <span className='carts__order__coupon--form--icon'>Apply coupon</span>
                                {/* </form> */}
                            </div>
                        </div>
                        <div className="carts__order__payment">
                            <h3 className="carts__order--title--2">Payment Details</h3>
                            <div className="carts__order__payment--checkboxs">
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-1" value={1} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label htmlFor="checkbox-1">Cash on Delivery</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-2" value={2} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label htmlFor="checkbox-2">Shopcart Card</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-3" value={3} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label htmlFor="checkbox-3">Paypal</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-4" value={4} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label htmlFor="checkbox-4">Credit or debit card</label>
                            </div>
                        </div>
                        <div className="carts__order__filds">
                            <div className="input__filds">
                                <input name="email" type="email" id="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="email">Email</label>
                            </div>
                            <div className="input__filds">
                                <input name="card-holder-name" id="card-holder-name" type="text"
                                    placeholder="Card Holder Name"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="card-holder-name">Card Holder Name</label>
                            </div>
                            <div className="input__filds">
                                <input name="card-number" id="card-number" type="number"
                                    placeholder="Card Number"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="card-number">Card Number</label>
                            </div>
                            <div className="carts__order__filds--spec">
                                <div className="input__filds">
                                    <input name="expiry" id="expiry" type="text"
                                        placeholder="expiry"
                                        autoComplete="off"
                                        className="input__filds--input" />
                                    <label className="input__filds--label" htmlFor="expiry">expiry</label>
                                </div>
                                <div className="input__filds">
                                    <input name="CVC" id="CVC" type="number"
                                        placeholder="CVC"
                                        autoComplete="off"
                                        className="input__filds--input" />
                                    <label className="input__filds--label" htmlFor="CVC">CVC</label>
                                </div>
                            </div>
                        </div>
                        <div className="carts__order__price">
                            <p>Sub Total</p>
                            <p>${Math.floor(sumWithInitial)}</p>
                            <p>Tax(10%)</p>
                            <p>${sumWithInitial ? Math.floor(sumWithInitial * 0.1) : 0}</p>
                            <p>Coupon Discount</p>
                            <p>$-0.00</p>
                            <p>Shipping Cost</p>
                            <p>$-0.00</p>
                            <h6>Total</h6>
                            <h6> =${sumWithInitial ? Math.floor(sumWithInitial) + Math.floor(sumWithInitial * 0.1) : 0}</h6>
                            <button className="btn carts__order__price--btn">Pay ${sumWithInitial ? Math.floor(sumWithInitial) + Math.floor(sumWithInitial * 0.1) : 0}</button>
                        </div>
                    </div>
                </section>
                <section className="carts__information">
                    <div className="carts--container">
                        <h3 className="carts__information--title">Delivery Information</h3>
                        <div className="carts__information--filds">
                            <div className="input__filds">
                                <input name="first_name" type="text" id="first_name"
                                    autoComplete="off"
                                    placeholder="First Name"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input__filds">
                                <input name="last_name" type="text" id="last_name"
                                    autoComplete="off"
                                    placeholder="Last Name"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="last_name">Last Name</label>
                            </div>
                            <div className="input__filds carts__information--filds--address">
                                <input name="address" type="text" id="address"
                                    autoComplete="off"
                                    placeholder="Address"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="address">Address</label>
                            </div>
                            <div className="input__filds">
                                <input name="city" type="text" id="city"
                                    autoComplete="off"
                                    placeholder="City/Town"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="city">City/Town</label>
                            </div>
                            <div className="input__filds">
                                <input name="zip_code" type="number" id="zip_code"
                                    autoComplete="off"
                                    placeholder="Zip Code"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="zip_code">Zip Code</label>
                            </div>
                            <div className="input__filds">
                                <input name="phone" type="number" id="phone"
                                    autoComplete="off"
                                    placeholder="Mobile"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="phone">Mobile</label>
                            </div>
                            <div className="input__filds">
                                <input name="email" type="email" id="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    className="input__filds--input" />
                                <label className="input__filds--label" htmlFor="email">Email</label>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </form>
    )
}

export default pages

// < section >
// <form onSubmit={handleSubmit(onSubmit)}>
//     {/* <input {...register("example")} />
//         <input {...register("exampleRequired", { required: true })} /> */}
//     {/* {errors.exampleRequired && <span>This field is required</span>} */}
//     <Input
//         name={"email"}
//         type="text"
//         register={register}
//         watch={watch}
//         required={{
//             required: "Email Address is required",
//             pattern: {
//                 value: /\d+/,
//                 message: "This input is number only."
//             },
//             maxLength: {
//                 value: 10,
//                 message: "This input exceed maxLength."
//             }
//         }}
//         errors={errors}
//     />
//     <input type="submit" />
// </form>
//         </section >


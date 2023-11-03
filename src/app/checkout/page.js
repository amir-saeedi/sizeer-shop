"use client"

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form"
import Image from "next/image";
import Input from "../../components/Input"
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight, FaMinus, FaPlus, FaTrash } from "react-icons/fa";

// async function getData(id) {
//     const res = await fetch(`https://fakestoreapi.com/products/${1}`, {
//         // cache: "force-cache" // SSG get static side props
//         // cache: "no-store" // SSR get server side props
//         // next: {
//         //   revalidate: 60 //ISR
//         // }
//     });
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
//     return res.json();
// }
function pages({ params, searchParams }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
        },
    })
    const onSubmit = (data) => console.log(data)
    // console.log(errors)

    const [data, setData] = React.useState(null);
    // React.useEffect(() => {
    //     getData(params.product).then(valuse => setData(valuse));
    // }, []);

    const carts = useSelector(state => state.carts);
    const dispatch = useDispatch();
    // {/* <button onClick={() => dispatch(incrementBird("robin"))}>increment</button> */ }
    // {/* <h1>here is {count[0].views}</h1> */ }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container carts">
                <section className="carts__review">
                    <div className="carts--container">
                        {carts && carts.length > 0 &&
                            <ul className="carts__review__list">
                                <h3 className="carts__review__list--title">Review item and shipping</h3>
                                {carts.map(cart => (
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
                                            <FaMinus className="carts__review__list--quantity--icon" />
                                            {/* <FaTrash className="carts__review__list--quantity--icon" /> */}
                                            <span>1</span>
                                            <FaPlus className="carts__review__list--quantity--icon" />
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
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
                                <label for="checkbox-1">Cash on Delivery</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-2" value={2} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label for="checkbox-2">Shopcart Card</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-3" value={3} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label for="checkbox-3">Paypal</label>
                                <div className="carts__order__payment--checkboxs--box">
                                    <input id="checkbox-4" value={4} name="checkbox" type="radio" />
                                    <span className="carts__order__payment--checkboxs--box--span"></span>
                                </div>
                                <label for="checkbox-4">Credit or debit card</label>
                            </div>
                        </div>
                        <div className="carts__order__filds">
                            <div className="input__filds">
                                <input name="email" type="email" id="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="email">Email</label>
                            </div>
                            <div className="input__filds">
                                <input name="card-holder-name" id="card-holder-name" type="text"
                                    placeholder="Card Holder Name"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="card-holder-name">Card Holder Name</label>
                            </div>
                            <div className="input__filds">
                                <input name="card-number" id="card-number" type="number"
                                    placeholder="Card Number"
                                    autoComplete="off"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="card-number">Card Number</label>
                            </div>
                            <div className="carts__order__filds--spec">
                                <div className="input__filds">
                                    <input name="expiry" id="expiry" type="text"
                                        placeholder="expiry"
                                        autoComplete="off"
                                        className="input__filds--input" />
                                    <label className="input__filds--label" for="expiry">expiry</label>
                                </div>
                                <div className="input__filds">
                                    <input name="CVC" id="CVC" type="number"
                                        placeholder="CVC"
                                        autoComplete="off"
                                        onKeyDown="return false"
                                        className="input__filds--input" />
                                    <label className="input__filds--label" for="CVC">CVC</label>
                                </div>
                            </div>
                        </div>
                        <div className="carts__order__price">
                            <p>Sub Total</p>
                            <p>$949.00</p>
                            <p>Tax(10%)</p>
                            <p>$51.00</p>
                            <p>Coupon Discount</p>
                            <p>$-5.23</p>
                            <p>Shipping Cost</p>
                            <p>-0.00</p>
                            <h6>Total</h6>
                            <h6> =$454.10</h6>
                            <button className="btn carts__order__price--btn">Pay $454.10</button>
                        </div>
                    </div>
                </section>
                <section className="carts__information">
                    <div className="carts--container">
                        <h3 className="carts__information--title">Delivery Information</h3>
                        <div className="carts__information--filds">
                            <div className="input__filds">
                                <input name="fist_name" type="text" id="fist_name"
                                    autoComplete="off"
                                    placeholder="First Name"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="fist_name">First Name</label>
                            </div>
                            <div className="input__filds">
                                <input name="last_name" type="text" id="last_name"
                                    autoComplete="off"
                                    placeholder="Last Name"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="last_name">Last Name</label>
                            </div>
                            <div className="input__filds carts__information--filds--address">
                                <input name="address" type="text" id="address"
                                    autoComplete="off"
                                    placeholder="Address"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="address">Address</label>
                            </div>
                            <div className="input__filds">
                                <input name="city" type="text" id="city"
                                    autoComplete="off"
                                    placeholder="City/Town"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="city">City/Town</label>
                            </div>
                            <div className="input__filds">
                                <input name="zip_code" type="number" id="zip_code"
                                    autoComplete="off"
                                    placeholder="Zip Code"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="zip_code">Zip Code</label>
                            </div>
                            <div className="input__filds">
                                <input name="phone" type="number" id="phone"
                                    autoComplete="off"
                                    placeholder="Mobile"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="phone">Mobile</label>
                            </div>
                            <div className="input__filds">
                                <input name="email" type="email" id="email"
                                    autoComplete="off"
                                    placeholder="Email"
                                    className="input__filds--input" />
                                <label className="input__filds--label" for="email">Email</label>
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


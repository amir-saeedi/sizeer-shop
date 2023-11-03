'use client'

import React, { useEffect } from 'react'
import localFont from 'next/font/local'
// const myFont = localFont({ src: '../fonts/Borel-Regular.ttf' })
const myFont2 = localFont({
  src: '../fonts/Vollkorn-VariableFont_wght.ttf'
})
import { Header, Vip, Video, Offer, } from "../components/home";
import ModalComponent from "../components/ModalComponent";

// import { RootState } from "../redux/store";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../redux/Features/counter/counterSlice"
// import { incrementBird } from "../redux/Features/counter/counterSlice";


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

// export default async function Home({ params, searchParams }) {
export default function Home({ params, searchParams }) {
  // const { id } = params
  const [data, setData] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const bagHandeler = () => setShow(true);
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
          <Header
            myFont2={myFont2}
            bagHandeler={bagHandeler}
          />
          <Vip data={data} />
          <Video />
          <Offer />
        </main >)
      }
      <ModalComponent show={show} setShow={setShow} justAccept={true}
        text={<>
          <h4>Congratulations</h4>
          <p>Jordan MA2 added to your shopping cart</p>
        </>}
      />
    </React.Fragment>
  )
}

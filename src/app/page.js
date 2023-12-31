'use client'
import React from 'react'
import localFont from 'next/font/local'
// const myFont = localFont({ src: '../fonts/Borel-Regular.ttf' })
const myFont2 = localFont({
  src: '../fonts/Vollkorn-VariableFont_wght.ttf'
})
import { Header, Vip, Video, Offer, } from "../components/home";
import ModalComponent from "../components/ModalComponent";

// import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement, incrementByAmount } from "../redux/Features/counter/counterSlice"
import { addLikes, RemoveLikes } from "../redux/like/like";
import Loading from "./loading"



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
  const [loading, setLoading] = React.useState(true);
  const liked = useSelector(state => state.like);
  const dispatch = useDispatch();
  const [data, setData] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const bagHandeler = () => setShow(true);
  React.useEffect(() => {
    getData().then(valuse => setData(valuse)).then(() => setLoading(false));
  }, []);

  const addLike = (product) => {
    dispatch(addLikes(product));
  }
  const removeLike = (product) => {
    dispatch(RemoveLikes(product));
  }

  // This code for make a responsive page in scolling time at spicial element. {"RED BOX"}
  // const [observerStyle, setObserverStyle] = useState(0);
  // const redBox = useRef(null);
  // useEffect(() => {
  //   let accepter = false;
  //   let boundingTop = 0;
  //   const obsorver = new IntersectionObserver(entries => {
  //     const entry = entries[0];
  //     accepter = (entry.isIntersecting)
  //     boundingTop = (entry.boundingClientRect.top)
  //     // console.log(entry.boundingClientRect.top)
  //   })
  //   obsorver.observe(redBox.current)

  //   const handleResize = (e) => {
  //     if (accepter) {
  //       setObserverStyle(window.scrollY - boundingTop)
  //     }
  //   };
  //   window.addEventListener('scroll', handleResize);
  //   return () => {
  //     window.removeEventListener('scroll', handleResize);
  //   };
  // }, []);
  // console.log(observerStyle)

  return (
    <React.Fragment>
      {loading && <Loading />}
      {data && !loading &&
        (<main className="">
          <Header myFont2={myFont2} bagHandeler={bagHandeler} liked={liked} />
          <Vip data={data} addLike={addLike} removeLike={removeLike} liked={liked} />
          <Video bagHandeler={bagHandeler} />
          <Offer bagHandeler={bagHandeler} />
        </main >)
      }
      <ModalComponent show={show} setShow={setShow} justAccept={true}
        text={<>
          <h4>Congratulations</h4>
          <p>Jordan MA2 added to your shopping cart</p>
        </>}
      />
      {/* <div ref={redBox} className="redBox" style={{
        height: "300px",
        background: "red",
        position: "relative"
      }}>
        <div style={{
          height: "150px",
          width: "150px",
          background: "green",
          position: "absolute",
          top: observerStyle,
          left: 0,
        }}>
        </div>
        <div style={{
          height: "150px",
          width: "150px",
          background: "yellow",
          position: "absolute",
          bottom: observerStyle,
          right: 0,
        }}>
        </div>
      </div> */}
    </React.Fragment>
  )
}

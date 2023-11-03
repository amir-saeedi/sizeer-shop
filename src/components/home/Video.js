import React from 'react'

function Video() {
    return (
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
    )
}

export default Video

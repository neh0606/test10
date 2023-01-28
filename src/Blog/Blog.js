import React from 'react';
import laptop from '../../src/Images/laptop.jpg';
import { HiArrowNarrowRight } from "react-icons/hi";

export const Blog = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
                        <img src={laptop} alt="blog-image" style={{ width: "100%", height: "420px" }} />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 mt-5'>
                        <h2 className='heading_Col fw-bold'>Lorem Ipsum is simply dummy text  </h2>
                        <p className='text-left fs-4 blog-padding'>Lorem ipsum dolor sit amet, consectetuer

                            adipiscing elit, sed diam nonummy nibh

                            euismod tincidunt ut laoreet dolore magna

                            aliquam erat volutpat. Ut wisi enim ad minim

                            veniam, quis nostrud exerci tation ullamcorper

                            suscipit lobortis nisl ut
                        </p>
                        <div className='row all-image-display'>
                            <div className='col-3'>
                                <img src={laptop} alt="blog-image" style={{ width: "100%", height: "150px" }} />
                            </div>
                            <div className='col-3'>
                                <img src={laptop} alt="blog-image" style={{ width: "100%", height: "150px" }} />
                            </div>
                            <div className='col-3'>
                                <img src={laptop} alt="blog-image" style={{ width: "100%", height: "150px" }} />
                            </div>
                            <div className='col-3'>
                                <button type="button" className="btn btn-primary text_btn_style">Learn More  <HiArrowNarrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

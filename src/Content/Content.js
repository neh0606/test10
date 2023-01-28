import React from 'react'
import laptop from '../../src/Images/laptop.jpg';
import { HiArrowNarrowRight } from "react-icons/hi";
export const Content = () => {
    return (
        <>
            <div className='container-fluid margin_top_triangle'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                        <h2 className='heading_Col fw-bold fs-1'>Lorem ipsum

                            dolor sit amet, </h2>
                        <p className='fs-3 lh-lg'>Lorem ipsum dolor sit amet, consectetuer

                            adipiscing elit, sed diam nonummy nibh

                            euismod tincidunt ut laoreet dolore magna

                            aliquam erat volutpat. Ut wisi enim ad minim

                            veniam, quis nostrud exerci tation ullamcorper

                            suscipit lobortis nisl ut
                        </p>
                        <button type="button" className="btn btn-primary btn-lg no-btn-radius">Learn More  <HiArrowNarrowRight /></button>
                    </div>

                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 triangle_parent'>
                        <div className='col-12 triangle'>
                            <div className='col-12 image_on_triangle'>
                                <img src={laptop} alt="blog-image" style={{ width: "90%", height: "500px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

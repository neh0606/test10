import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import laptop from '../../src/Images/laptop.jpg';
import { HiArrowNarrowRight } from "react-icons/hi";
export const Tabimg = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='heading_Col fw-bold text-center mt-5'>Lorem Ipsum text,  </h3>
                        <Tabs
                            defaultActiveKey="longer-tab"
                            id="justify-tab-example"
                            className="mb-3 mt-5"
                            justify
                        >
                            <Tab eventKey="home" title="Lorem Ipsum 1">
                            <div className='row'>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <img src={laptop} alt="blog-image" style={{ width: "90%", height: "400px" }} />
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <h3 className='heading_Col fw-bold text-left fs-2 mt-5'>Lorem ipsumdolor sit amet, </h3>
                                        <p className='text-left fs-4 blog-padding mt-5'> Lorem ipsum dolor sit amet, consectetuer

                                            adipiscing elit, sed diam nonummy nibh

                                            euismod tincidunt ut laoreet dolore magna

                                            aliquam erat volutpat. Ut wisi enim ad minim

                                            veniam, quis nostrud exerci tation ullamcorper

                                            suscipit lobortis nisl ut
                                        </p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Lorem Ipsum 2">
                            <div className='row'>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <img src={laptop} alt="blog-image" style={{ width: "90%", height: "400px" }} />
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <h3 className='heading_Col fw-bold text-left fs-2 mt-5'>Lorem ipsumdolor sit amet, </h3>
                                        <p className='text-left fs-4 blog-padding mt-5'> Lorem ipsum dolor sit amet, consectetuer

                                            adipiscing elit, sed diam nonummy nibh

                                            euismod tincidunt ut laoreet dolore magna

                                            aliquam erat volutpat. Ut wisi enim ad minim

                                            veniam, quis nostrud exerci tation ullamcorper

                                            suscipit lobortis nisl ut
                                        </p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="longer-tab" title="Lorem Ipsum 3">
                                <div className='row'>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <img src={laptop} alt="blog-image" style={{ width: "90%", height: "400px" }} />
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <h3 className='heading_Col fw-bold text-left fs-2 mt-5'>Lorem ipsumdolor sit amet, </h3>
                                        <p className='text-left fs-4 blog-padding mt-5'> Lorem ipsum dolor sit amet, consectetuer

                                            adipiscing elit, sed diam nonummy nibh

                                            euismod tincidunt ut laoreet dolore magna

                                            aliquam erat volutpat. Ut wisi enim ad minim

                                            veniam, quis nostrud exerci tation ullamcorper

                                            suscipit lobortis nisl ut
                                        </p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Lorem Ipsum 4">
                            <div className='row'>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <img src={laptop} alt="blog-image" style={{ width: "90%", height: "400px" }} />
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                                        <h3 className='heading_Col fw-bold text-left fs-2 mt-5'>Lorem ipsumdolor sit amet, </h3>
                                        <p className='text-left fs-4 blog-padding mt-5'> Lorem ipsum dolor sit amet, consectetuer

                                            adipiscing elit, sed diam nonummy nibh

                                            euismod tincidunt ut laoreet dolore magna

                                            aliquam erat volutpat. Ut wisi enim ad minim

                                            veniam, quis nostrud exerci tation ullamcorper

                                            suscipit lobortis nisl ut
                                        </p>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className='text-center mt-4'>
                <button type="button" className="btn btn-primary btn-lg no-btn-radius">Learn More  <HiArrowNarrowRight /></button>
            </div>
            </div>
        </>
    )
}

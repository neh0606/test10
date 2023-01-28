import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { HiArrowNarrowRight } from "react-icons/hi";

import laptop from '../../src/Images/laptop.jpg';

export const Tabcontent = () => {
    return (
        <>
            <div className='container-fluid tab-content-set-top'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <h2 className='heading_style fw-bold text-center'>dolor sit amet, </h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <Tabs
                            defaultActiveKey="longer-tab"
                            id="justify-tab-example"
                            className="mb-3 mt-5"
                            justify
                        >
                            <Tab eventKey="home" title="Ut wisi enim ad minim">
                                <h3 className='heading_Col fw-bold text-center'>dolor sit amet,  </h3>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                            </Tab>
                            <Tab eventKey="profile" title="Ut wisi enim ad minim">
                                <h3 className='heading_Col fw-bold text-center'>Lorem Ipsum text 2 </h3>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                            </Tab>
                            <Tab eventKey="longer-tab" title="Ut wisi enim ad minim">
                                <h3 className='heading_Col fw-bold text-center'>Lorem Ipsum text 3 </h3>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <div className='text-center'>
                                    <button type="button" className="btn btn-primary btn-lg no-btn-radius">Learn More  <HiArrowNarrowRight /></button>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Ut wisi enim ad minim">
                                <h3 className='heading_Col fw-bold text-center'>Lorem Ipsum text 4</h3>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
           
        </>
    )
}

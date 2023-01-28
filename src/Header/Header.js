import React from 'react'
import Headerimg from '../../src/Images/Headerimg.jpg';
import beacon_logo from '../../src/Images/beacon_logo.png';
import { MdOutlineMail } from "react-icons/md";
import { BiPhone} from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";
export const Header = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                        <div className='set-logo-m'>
                  <h2 className='logo-head'>Beacon<span className='logo-span'>4.0</span></h2>
                  <p>Creating Value Stream</p>
                  </div>
                        {/* <img src={beacon_logo} alt="header image" style={{ width: "70%", height: "100px" }} /> */}
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6  display-flex contact-desk'>
                        <li className='li_style mt-4'>
                            <BiPhone className="circl myreact-icons" />
                            &nbsp;
                            <span className=''>56677 89000</span>
                            &nbsp;   &nbsp;
                            <MdOutlineMail className="circl myreact-icons" />
                            &nbsp;
                            <span className=''>support@gmail.com</span>
                        </li>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 head-text'>
                        <img src={Headerimg} alt="header image" style={{ width: "100%", height: "400px" }} />
                        <div className="position-absolute litem-5 text-on-image">
                            <h2 className='fs-1 font_color'>Lorem ipsum dolor sit amet, </h2>
                            <button type="button" className="btn btn-primary btn-lg no-btn-radius btn1-margin btn1-margin-mob">Book A Demo </button>
                            <button type="button" className="btn btn-primary btn-lg no-btn-radius btn2-margin btn2-margin-mob">Watch Video </button>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="white"></div>
                    <div className='orange'></div>
                    <div className="gray"></div>
                    <div className="red"></div>
                    <div className="black"></div>
                </div>
            </div>

        </>
    )
}

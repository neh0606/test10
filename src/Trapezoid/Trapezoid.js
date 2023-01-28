import React from 'react';
import Headerimg from '../../src/Images/Headerimg.jpg';

export const Trapezoid = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row container-position'>
                    <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 trapezoid_1 trapezoid_1_mob '>

                    </div>
                    <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 trapezoid_2 trapezoid_2_mob'>

                        <div className='para-over-trapezoid para-over-trapezoid-mob'>
                            <p className='trapezoid-para trapezoid-para-mob trapezoid-para-tab'>Lorem ipsum dolor sit amet, consectetuer

                                adipiscing elit, sed diam nonummy nibh

                                euismod tincidunt ut laoreet dolore magna

                                aliquam erat volutpat. Ut wisi enim ad minim

                                veniam, quis nostrud exerci tation ullamcorper

                                suscipit lobortis nisl ut
                            </p>
                        </div>
                    </div>
                    <div className='circle-img-div'>
                        <img src={Headerimg} alt="header image" style={{ width: "20%", height: "170px" }} />
                    </div>
                </div>

            </div>
        </>
    )
}

import React from 'react';
import Headerimg from '../../src/Images/Headerimg.jpg';

export const Multitab = () => {
    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-12 parent_img'>
                        <div className="text-on-div">
                            <h2 className='fs-1 font_color'>Lorem Ipsum is simply dummy text  </h2>
                        </div>
                        <img src={Headerimg} alt="header image" style={{ width: "100%", height: "500px" }} />
                        <div className="litem-5 div-on-image">
                            <div className='profile-img'>
                                <img src={Headerimg} alt="header image" style={{ width: "50%", height: "200px" }} />
                            </div>
                            <div className='div-over-div'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam

                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat

                                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation

                                    ullamcorper suscipit lobortis nisl ut
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

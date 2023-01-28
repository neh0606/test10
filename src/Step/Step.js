import React from 'react'

export const Step = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 col-md-6 col-lg-6 col-xl-6'>
                    <div class="vertical-line vertical-line-m"></div> 
                        <div class="circle-singleline-odd circle-singleline-odd-m "> 01</div>
                        <div class="vertical-line vertical-line-m"></div> 
                        <div class="circle-singleline circle-singleline-m">02</div>
                        <div class="vertical-line vertical-line-m"></div> 
                        <div class="circle-singleline-odd circle-singleline-odd-m ">03</div>
                        <div class="vertical-line vertical-line-m"></div> 
                    </div>
                    <div className='col-sm-10 col-md-6 col-lg-6 col-xl-6'>
                    <h2 className='heading_Col fw-bold text-center'>Step</h2>          
                    <h3 className='heading_Col fw-bold text-center mt-4'>Lorem Ipsum text</h3>
                                <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </p>
                    </div>
                </div>

            </div>
        </>
    )
}

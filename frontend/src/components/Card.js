import React from 'react'


export default function Card() {
    return (
        <div>

            <div>
                <div className='card mt-3' style={{ "width": "18rem", "maxHeight": "430px" }}>
                    <img src='https://img.freepik.com/free-vector/hand-drawn-retro-space-poster-template_52683-143329.jpg?w=740&t=st=1708095917~exp=1708096517~hmac=0c990cb1e37cddb038cfe95fb37a06e3ccffed1176df615d47b1fe5835f0caf8' className='card-img-top' alt='placeholder' style={{ "maxHeight": "270px" }} />
                    <div className='card-body'>
                        <h5 className='card-title'>Card Title</h5>
                        <p className='card-text'>This is some text</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success ' >
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

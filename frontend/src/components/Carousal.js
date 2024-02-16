import React from 'react';

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "9" }}>
                        <form className="d-flex justify-content-center">
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in ..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/people-outside-bookstore-vector_53876-17179.jpg?w=740&t=st=1708089768~exp=1708090368~hmac=efccdc1689196febf31f2f44023bbf6ed9e82065c97c97c61ff5e928ec1eb78a" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px", margin: "0 auto" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-vector/home-study-room-with-books_25030-38995.jpg?w=740&t=st=1708090687~exp=1708091287~hmac=b8a6c86e738f381ebf3ecaba9e354cc92817ba3222703b5ec8e59f52326fd14e" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px", margin: "0 auto" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-vector/illustration-library-vector-set_53876-16948.jpg?w=740&t=st=1708089828~exp=1708090428~hmac=8f8eac9a7c85a54506aed54035c3d2cd39c45f72c1d45ff4e848f2d7e28df24a" className="d-block w-100" style={{ filter: "brightness(30%)", maxWidth: "100%", maxHeight: "500px", margin: "0 auto" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

import { Component } from 'react';
class Slide extends Component {
render(){
  return (
    <div>
      <div className='Slide'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../123.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../345.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="../123.webp" className="d-block w-100" alt="..." />
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
            </button>
        </div>
      </div>
     
    </div>
  );
  }
}

export default Slide;

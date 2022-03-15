import { Component } from 'react';

class Product extends Component {
render(){
  return (
      <div className='product'>
        <div className="card" style={{width: '18rem'}}>
            {/*tips: add .text-center,.text-right to the .card to change card text alignment*/}
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="btn btn-primary">Card button</a>
            </div>
        </div>
    </div>
  );
  }
}

export default Product;

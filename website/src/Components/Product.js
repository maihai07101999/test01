import { Component } from 'react';

class Product extends Component {
render(){
  return (
      <div className='product'>
        <div className="card" style={{width: '15rem'}}>
            <img src="../anh1.webp" className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.price}</h6>
            <p className="card-text">{this.props.dsc}</p>
            </div>
        </div>
    </div>
  );
  }
}

export default Product;

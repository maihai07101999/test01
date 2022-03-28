import { Component } from 'react';

class Product extends Component {
render(){
  return (
      <div>
              <div className='new'>
                <h4>{this.props.name}</h4>
                <div className='newMin'>
                  <img src={this.props.image} alt='...' />
                  <p><small>{this.props.price}-</small>{this.props.dsc}</p>
                </div>
              </div>
      </div>
  );
  }
}

export default Product;

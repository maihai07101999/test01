import { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Menu from './Components/Menu';
import Slide from './Components/Slide';
import Product from './Components/Product';

class App extends Component {
render(){
  const items =[
    {
      name: "Iphone",
      price: 1000000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "samsung",
      price: 154588000,
      dsc: "Ram 12GB",
      free: true
    },
    {
      name: "Nokia",
      price: 25000000,
      dsc: "cứng như cục gạch",
      free: true
    },
    {
      name: "Iphone",
      price: 6650000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "HTC",
      price: 19990000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "Iphone",
      price: 15000000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "HTC",
      price: 19990000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "Iphone",
      price: 15000000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "HTC",
      price: 19990000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "Iphone",
      price: 15000000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "HTC",
      price: 19990000,
      dsc: "Màn hình 120Hz",
      free: true
    },
    {
      name: "Iphone",
      price: 15000000,
      dsc: "Màn hình 120Hz",
      free: true
    },
   
  ]
  const isCheck = items.map((item, index) => 
  <Product key= {index} name={item.name} price={item.price} dsc={item.dsc} free={item.free} ></Product>
 )
  return (
    <div>
      <Header/>
      <div className='menu'>
         <Menu/>
         <Slide/>
      </div>
      <div className='bodyWeb'>
        <div className='bringOut'>
            <h2>Sản Phẩm Nổi bật</h2>
            <ul>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                Apple
              </button></li>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                Nokia
              </button></li>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                Xiaomi
              </button></li>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                Sony
              </button></li>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                HTC
              </button></li>
              <li><button type="button" class="btn btn-light" data-toggle="button" aria-pressed="false">
                LG
              </button></li>
            </ul>
        </div>
      </div>
      <div className='products'>
        {isCheck}
      </div>
      
    </div>
  );
  }
}

export default App;

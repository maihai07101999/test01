import { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Menu from './Components/Menu';
import Slide from './Components/Slide';
import Product from './Components/Product';

class App extends Component {
render(){
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
      <Product/>
    </div>
  );
  }
}

export default App;

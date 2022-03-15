import { Component } from 'react';

class Menu extends Component {
render(){
  return (
    <div className='menu_left'>
       <select className="form-select" aria-label="Default select example">
        <option selected>Điện thoại</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select" aria-label="Default select example">
        <option selected>Laptop, PC</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select" aria-label="Default select example">
        <option selected>Table</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select" aria-label="Default select example">
        <option selected>Đồng hồ</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
      <select className="form-select" aria-label="Default select example">
        <option selected>Âm thanh</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
  );
  }
}

export default Menu;

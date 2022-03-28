import { Component } from 'react';

class Product2 extends Component {
render(){
  return (
    <div>
        <div className='listName'>
            <ul>
                <li className='listTd'>Kinh doanh</li>
                <li>Quốc tế</li>
                <li>Doanh nghiệp</li>
                <li>Chứng khoán</li>
                <li>Bất động sản</li>
                <li>Bảo hiểm</li>
            </ul>
        </div>
        <div className='content'>
            <div className='contLeft'>
                <img src='../content1.jpg' alt='content'/>
                <h4>Vàng được dự báo hướng tới ngưỡng 2.000 USD</h4>
                <p>Giới phân tích và các nhà đầu tư nhỏ lẻ chưa từ bỏ kỳ vọng vàng trở lại ngưỡng 2.000 USD khi tâm lý tăng giá chiếm ưu thế trên thị trường. </p>
            </div>
            <div className='contRight'>
                <h4>Vàng được dự báo hướng tới ngưỡng 2.000 USD</h4>
                <p>Giới phân tích và các nhà đầu tư nhỏ lẻ chưa từ bỏ kỳ vọng vàng trở lại ngưỡng 2.000 USD khi tâm lý tăng giá chiếm ưu thế trên thị trường. </p>
            </div>
        </div>
        <div className='contBottom'>
            <ul>
                <li><h4>Biden muốn đánh thuế tỷ phú tối thiểu 20% tổng thu nhập</h4></li>
                <li><h4>Nhiều vi phạm trong phát triển điện mặt trời mái nhà</h4></li>
                <li><h4>Hoàng Quân giải trình việc hoãn tổ chức đại hội cổ đông</h4></li>
            </ul>
        </div>
    </div>
  );
  }
}

export default Product2;

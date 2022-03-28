import { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
 time(){
  var today = new Date();
  var weekday=new Array(7);
      weekday[0]="Thứ Hai";
      weekday[1]="Thứ Ba";
      weekday[2]="Thứ Tư";
      weekday[3]="Thứ Năm";
      weekday[4]="Thứ Sáu";
      weekday[5]="Thứ Bảy";
      weekday[6]="Chủ Nhật";
  var time = weekday[today.getDay()]+ "," +today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  return time;
 }

 
render(){
  return (
    <div>
      <div className='container'>
          <div className='logo'><img src="../logo.svg" alt="..."/></div>
          <div className='time'>{this.time()}</div>
          <button className='btn btn-light bt'>Mới Nhất</button>
          <button className='btn btn-light bt'>International</button>
          <input type="search" className='form' placeholder="Tìm kiếm" aria-label="Search"/>
          <button className='btn btn-outline'>Đăng Nhập</button>
      </div>
      <div className='container-fluid con'>
        <ul>
          <li>Home</li>
          
          <li >Thời sự
            <ul className='menuMin'>
              <li></li>
              <li>covid 19</li>
              <li>Chính trị và chính sách</li>
              <li>Mekong</li>
            </ul>
          </li>
          <li>Góc nhìn
            <ul className='menuMin'>
            <li>Bình luận nhiều <br/></li>
              <li>covid 19</li>
              <li>Chính trị và chính sách</li>
              <li>Y tế & sức khỏe</li>
            </ul>
          </li>
          <li>Thế giới
            <ul className='menuMin'>
              <li>Tư liệu </li>
              <li>Phân tích</li>
              <li>Quân sự</li>
            </ul>
          </li>
          <li>Video
            <ul className='menuMin'>
            <li>Thời sự</li>
              <li>Nhịp sống</li>
              <li>Food</li>
              <li>Tôi kể</li>
              <li>núi rừng</li>
            </ul>
          </li>
          <li>Postcasts
            <ul className='menuMin'>
             <li>VnExpress hôm nay</li>
             <li>Ly hôn</li>
             <li>Thầm thì</li>
             <li>Bạn ổn không?</li>
            </ul>
          </li>
          <li>Kinh doanh
            <ul className='menuMin'>
              <li>Quốc tế</li>
              <li>Doanh nghiệp</li>
              <li>Chứng khoán</li>
            </ul>
          </li>
          <li>Khoa học
            <ul className='menuMin'>
              <li>Khoa học trong nước</li>
              <li>Phát minh</li>
              <li>Tin tức</li>
              <li>Ứng dụng</li>
            </ul>
          </li>
          <li>Giải trí
            <ul className='menuMin'>
              <li>Giới sao</li>
              <li>Video</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Thể thao
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Pháp luật
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Giáo dục
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Sức khỏe
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Đời sống
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Du lịch
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Số Hóa
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
              </ul>
          </li>
          <li>Xe
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Ý kiến
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Tâm sự
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Hài
            <ul className='menuMin'>
              <li>Chính trị</li>
              <li>Dân sinh</li>
              <li>Giao thông</li>
            </ul>
          </li>
          <li>Tất cả</li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Header;

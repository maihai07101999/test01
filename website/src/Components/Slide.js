import { Component } from 'react';
class Slide extends Component {
render(){
  return (
    <div>
      <div className='container ct'>
        <div className='rt'>
          <div className='news'>
            <img src="../news1.jpg" alt="..."/>
            <h3>18.600 tỷ đồng mở đường từ TP HCM đi Long An, Tiền Giang</h3>
            <p>Quốc lộ 50B kết nối TP HCM - Long An - Tiền Giang có tổng vốn đầu tư dự kiến 18.600 tỷ đồng đã được Thủ tướng phê duyệt.</p>
            <p>Chiều 26/3, Giám đốc Sở Giao thông Vận tải Long An</p>
            <small>thời sự</small>
          </div>
          <div className='newsMin'>
            <div className='sMin'>
              <h4>Tìm thấy hộp đen thứ hai của máy bay Trung Quốc</h4>
              <p>Hộp đen chứa dữ liệu hành trình của máy bay rơi ở Quảng Tây hôm 21/3 đã được phát hiện, theo truyền thông nhà nước Trung Quốc.</p>
            </div>
            <div className='sMin'>
              <h4>Dự án chống ngập 10.000 tỷ đồng trễ hẹn năm thứ 4</h4>
              <p><small>TP HCM-</small>Hoàn thành hơn 90% khối lượng công việc, nhưng dự án chống ngập gần 10.000 tỷ đồng tiếp tục dang dở, chậm trễ 4 năm so với kế hoạch.</p>
            </div>
          </div>
          <div className='gocnhin'>
              <a href='/gocnhin'>Góc nhìn</a>
              <h4>Trầm cảm nội sinh</h4>
              <p>Góc nhìn Trầm cảm nội sinh Năm 15 tuổi, khi mới học lớp 9, tôi đã làm một việc dại dột.</p>
            </div>
        </div>
        <div className='lt'><img src="../panel.png" alt="..."/></div>
      </div>
     
    </div>
  );
  }
}

export default Slide;

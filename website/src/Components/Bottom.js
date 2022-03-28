import { Component } from 'react';

class Bottom extends Component {
render(){
  return (
      <div>
           <div className='bottom'>
               <div className='botTop'>
                   <div className='bt1'>
                       <ul className='bttren'>
                           <li>Trang chủ</li>
                           <li>Video</li>
                           <li>Podcasts</li>
                           <li>Video</li>
                       </ul>
                        <ul className='btduoi'>
                            <li>Mới nhất</li>
                            <li>Xem nhiều</li>
                            <li>Tin nóng</li>
                        </ul>
                   </div>
                   <div className='bt2'>
                       <ul>
                           <li>Thời sự</li>
                           <li>Góc nhìn</li>
                           <li>Thế Giới</li>
                           <li>Kinh doanh</li>
                           <li>Giải trí</li>
                       </ul>
                   </div>
                   <div className='bt3'>
                       <ul>
                           <li>Thể thao</li>
                           <li>Pháp luật</li>
                           <li>Giáo dục</li>
                           <li>Sức khỏe</li>
                           <li>Đời sống</li>
                       </ul>
                   </div>
                   <div className='bt4'>
                       <ul>
                           <li>Rao vặt</li>
                           <li>Shop vnexpress</li>
                           <li>Startup</li>
                           <li>Sức khỏe</li>
                           <li>Đời sống</li>
                       </ul>
                   </div>
               </div>
               <div className='botBot'>
               <img src="../logo.svg" alt="..."/>
               <div className='motaL'>
                  <ul>
                      <li><h4>Báo tiếng Việt nhiều người xem nhất</h4></li>
                      <li>Thuộc Bộ Khoa học Công nghệ</li>
                      <li>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</li>
                  </ul>
               </div>
               <div className='motaR'>
               <ul>
                      <li>Phó Tổng Biên tập phụ trách: Phạm Hiếu</li>
                      <li>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</li>
                      <li>Điện thoại: 024 7300 8899 - máy lẻ 4500</li>
                  </ul>
               </div>
               <div className='mota'>
                   <p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
               </div>
               </div>
           </div>
      </div>
  );
  }
}

export default Bottom;

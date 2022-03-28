import { Component } from 'react';
import Header from './Components/Header';
import './App.css';
import Slide from './Components/Slide';
import Video from './Components/Video';
import Product from './Components/Product';
import Product2 from './Components/Product2';
import Postscard from './Components/Postscard';
import Product3 from './Components/Product3';
import Bottom from './Components/Bottom';

class App extends Component {
render(){
  const items =[
    {
      name: "Đổi đời nhờ sốt đất",
      price: "hà tĩnh",
      dsc: "Nhận 1,9 tỷ đồng, bà Trần Thị Lân run rồi khóc vì chưa bao giờ dám tưởng tượng miếng đất cát cằn cỗi 1.800 m2 của gia đình lại có giá đó.",
      image: "../new1.jpg"
    },
    {
      name: "Nga không kích thành phố gần biên giới Ba Lan",
      price: "",
      dsc: "Hai cuộc không kích vào cơ sở nhiên liệu và quân sự ở thành phố Lviv gần biên giới Ukraine - Ba Lan khiến ít nhất 5 người ...",
      image: "../new2.jpg"
    },
    {
      name: "Hơn 82.000 thí sinh chạy đua giành suất sớm vào đại học",
      price: "hà tĩnh",
      dsc: "82.300 thí sinh sáng nay dự thi đánh giá năng lực do Đại học Quốc gia TP HCM tổ chức nhằm tìm kiếm cơ hội vào đại học sớm. ",
      image: "../new3.jpg"
    },
    {
      name: "Kathy Uyên: 'Tôi khóc khi được cầu hôn'",
      price: "",
      dsc: "Khi bạn trai doanh nhân quỳ gối cầu hôn, Kathy Uyên - 41 tuổi, nổi tiếng với 'Để mai tính' - khóc vì lần đầu trải qua khoảnh khắc này. ",
      image: "../new4.jpg"
    },
    {
      name: "Nga không kích thành phố gần biên giới Ba Lan",
      price: "",
      dsc: "Hai cuộc không kích vào cơ sở nhiên liệu và quân sự ở thành phố Lviv gần biên giới Ukraine - Ba Lan khiến ít nhất 5 người ...",
      image: "../new2.jpg"
    },
    {
      name: "Hơn 82.000 thí sinh chạy đua giành suất sớm vào đại học",
      price: "hà tĩnh",
      dsc: "82.300 thí sinh sáng nay dự thi đánh giá năng lực do Đại học Quốc gia TP HCM tổ chức nhằm tìm kiếm cơ hội vào đại học sớm. ",
      image: "../new3.jpg"
    },
    {
      name: "Nga không kích thành phố gần biên giới Ba Lan",
      price: "",
      dsc: "Hai cuộc không kích vào cơ sở nhiên liệu và quân sự ở thành phố Lviv gần biên giới Ukraine - Ba Lan khiến ít nhất 5 người ...",
      image: "../new2.jpg"
    },
    {
      name: "Hơn 82.000 thí sinh chạy đua giành suất sớm vào đại học",
      price: "hà tĩnh",
      dsc: "82.300 thí sinh sáng nay dự thi đánh giá năng lực do Đại học Quốc gia TP HCM tổ chức nhằm tìm kiếm cơ hội vào đại học sớm. ",
      image: "../new3.jpg"
    },
    {
      name: "Hơn 82.000 thí sinh chạy đua giành suất sớm vào đại học",
      price: "hà tĩnh",
      dsc: "82.300 thí sinh sáng nay dự thi đánh giá năng lực do Đại học Quốc gia TP HCM tổ chức nhằm tìm kiếm cơ hội vào đại học sớm. ",
      image: "../new3.jpg"
    },
    {
      name: "Hơn 82.000 thí sinh chạy đua giành suất sớm vào đại học",
      price: "hà tĩnh",
      dsc: "82.300 thí sinh sáng nay dự thi đánh giá năng lực do Đại học Quốc gia TP HCM tổ chức nhằm tìm kiếm cơ hội vào đại học sớm. ",
      image: "../new3.jpg"
    },
  ]
  const isCheck = items.map((item, index) => 
  <Product key= {index} name={item.name} price={item.price} dsc={item.dsc} image={item.image} ></Product>
 )
  return (
    <div>
      <Header/>
      <div className='menu'>
         <Slide/>
      </div>
      <div className='container appjs'>
            <div className="productLeft">
              <div className='products'>
                {isCheck}
              </div>
            </div>
            <div className='productRight'>
              <Product2 />
              <Product2 />
              <Product2 />
              <Product2 />
              <Product2 />
            </div>
            <div className='chude'>
              <ul>
                <li>Chủ đề</li>
                <li><a href='luong'>Lương tối thiểu</a></li>
                <li><a href='mơ'>Mở cửa dịch vụ</a></li>
                <li><a href='ukraine'>Nga mở chiến dịch quân sự ở Ukraine</a></li>
              </ul>
              <Video />
              <Postscard />
              <Product3 />
              <Bottom />
        </div>
      </div>     
    </div>
  );
  }
}

export default App;

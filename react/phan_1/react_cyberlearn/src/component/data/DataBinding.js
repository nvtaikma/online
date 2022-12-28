import React, { Component } from 'react'
import Header from '../LayoutB4/Header';
const TaiTest = () => {
    return <div>
        <h1>test ok</h1>
        <img src="https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg" alt="yế" />
        <Header />
    </div>
};

export default class DataBinding extends Component {
    // thuộc tính
    name = "tai";
   

    render() {
       

        // biến của hàm render chỉ được sử dụng trong hàm này ko được sử dụng cho hàm khác
        // biến cục bộ thì không cần con trỏ this
        const dnew = "dá";
    return (
        <div>
            <h1>{this.name}+{dnew}</h1>
            <div className='h-50'>
            {TaiTest()}
            </div>

      </div>
    )
  }
}

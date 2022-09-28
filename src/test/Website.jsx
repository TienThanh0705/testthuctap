import React from 'react';
import './style.css';
import logoNCC from "./img/logoNCC 1.png";
import cssicon from "./img/css-icon 1.png";
import htmlicon from './img/html-icon 1.png';
import urlicon from './img/url-icon 1.png';

function Website() {
  return (
    <div id="container">
        <div id="menu">
            <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Dịch vụ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Tin tức</a></li>
            <li><a href="#">Diễn đàn</a></li>
            <li><a href="#">Liên hệ</a></li>
            </ul>
        </div>
         <div id="content">
            <div id="header">
            <div id="logo"><img src= {logoNCC} /></div>
        
            </div>
            <div className="action">
            <h3>Lorem ipsum dolor sit amet</h3>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed non dui sodales, faucibus libero ut, posuere felis. 
                            Donec imperdiet suscipit accumsan. 
                            Aenean consequat condimentum velit ut tempor.
                            Nam porta massa in metus bibendum congue. 
                            Pellentesque ultrices vestibulum mattis.
                            Aliquam egestas nunc at ullamcorper ultricies. 
                            Donec feugiat velit nulla, vel sodales est ullamcorper id.
                    </p>
            </div>
            <div className="row">
                <div id="box1" className="col">
                <h2>Lorem ipsum dolor sit amet</h2>
                    <img src={cssicon} alt="CSS" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non dui sodales, faucibus libero ut, posuere felis. 
                        Donec imperdiet suscipit accumsan. 
                        Aenean consequat condimentum velit ut tempor.
                         Nam porta massa in metus bibendum congue. 
                         Pellentesque ultrices vestibulum mattis.
                          Aliquam egestas nunc at ullamcorper ultricies. 
                          Donec feugiat velit nulla, vel sodales est ullamcorper id.</p>
                </div>
                <div id="box2" className="col">
                <h2>Lorem ipsum dolor sit amet</h2>
                <img src={htmlicon} alt="CSS" />
               
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non dui sodales, faucibus libero ut, posuere felis. 
                        Donec imperdiet suscipit accumsan. 
                        Aenean consequat condimentum velit ut tempor.
                         Nam porta massa in metus bibendum congue. 
                         Pellentesque ultrices vestibulum mattis.
                          Aliquam egestas nunc at ullamcorper ultricies. 
                          Donec feugiat velit nulla, vel sodales est ullamcorper id.</p>
                </div>
                <div id="box3" className="col">
                <h2>Lorem ipsum dolor sit amet</h2>
                <img src={urlicon } alt="CSS" />
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non dui sodales, faucibus libero ut, posuere felis. 
                        Donec imperdiet suscipit accumsan. 
                        Aenean consequat condimentum velit ut tempor.
                         Nam porta massa in metus bibendum congue. 
                         Pellentesque ultrices vestibulum mattis.
                          Aliquam egestas nunc at ullamcorper ultricies. 
                          Donec feugiat velit nulla, vel sodales est ullamcorper id.</p>
                </div>
            </div>
         </div>
         <div id="footer">
            <p>Copyright &copy; 2021</p>
         </div>
    </div>
  )
}

export default Website
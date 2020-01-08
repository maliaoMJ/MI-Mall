import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar/index'
import NavHeader from '../components/NavHeader/index'
import AppFooter from '../components/AppFooter/index'
import '../assets/styles/pages/index.less'
import AwesomeSlider from 'react-awesome-slider'
import '../assets/styles/pages/index.scss'
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss'

class IndexPage extends Component {
  render() {
    return (
      <div className="home-page">
        <NavBar></NavBar>
        <NavHeader></NavHeader>
        <div className="index">
          <div className="container">
            <div className="swiper-box">
              <div className="nav-menu">
                <ul className="menu-wrap">
                  <li className="menu-item">
                    <Link to="/">手机 电话卡</Link>
                    <div className="children">
                      <ul>
                        <li>
                          <Link to="/#/product/30">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米CC9
                          </Link>
                        </li>
                        <li>
                          <Link to="/#/product/31">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-2.png"
                              alt=""
                            />
                            小米8青春版
                          </Link>
                        </li>
                        <li>
                          <Link to="/#/product/32">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-3.jpg"
                              alt=""
                            />
                            Redmi K20 Pro
                          </Link>
                        </li>
                        <li>
                          <Link to="/#/product/33">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-4.jpg"
                              alt=""
                            />
                            移动4G专区
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <img
                              src="http://mi.futurefe.com/imgs/item-box-1.png"
                              alt=""
                            />
                            小米9
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <Link to="/">电视 盒子</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">笔记本 平板</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">家电 插线板</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">出行 穿戴</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">智能 路由器</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">电源 配件</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/">生活 箱包</Link>
                  </li>
                </ul>
              </div>

              <div className="swiper-container">
                <AwesomeSlider
                  cssModule={AwesomeSliderStyles}
                  className="slider-container"
                >
                  <div data-src="http://mi.futurefe.com/imgs/slider/slide-1.jpg" />
                  <div data-src="http://mi.futurefe.com/imgs/slider/slide-2.jpg" />
                  <div data-src="http://mi.futurefe.com/imgs/slider/slide-3.jpg" />
                </AwesomeSlider>
              </div>
            </div>
            <div className="ads-box">
              <Link to="/#/product/33">
                <img alt="" src="http://mi.futurefe.com/imgs/ads/ads-1.png" />
              </Link>
              <Link to="/#/product/48">
                <img alt="" src="http://mi.futurefe.com/imgs/ads/ads-2.jpg" />
              </Link>
              <Link to="/#/product/45">
                <img alt="" src="http://mi.futurefe.com/imgs/ads/ads-3.png" />
              </Link>
              <Link to="/#/product/47">
                <img alt="" src="http://mi.futurefe.com/imgs/ads/ads-4.jpg" />
              </Link>
            </div>
            <div className="banner">
              <Link to="/#/product/30">
                <img alt="" src="http://mi.futurefe.com/imgs/banner-1.png" />
              </Link>
            </div>
          </div>
          <div className="product-box">
            <div className="container">
              <h2>手机</h2>
              <div className="wrapper">
                <div className="banner-left">
                  <Link to="/#/product/35">
                    <img
                      alt=""
                      src="http://mi.futurefe.com/imgs/mix-alpha.jpg"
                    />
                  </Link>
                </div>
                <div className="list-box"></div>
              </div>
            </div>
          </div>
          <div className="service">
            <div className="container">
              <ul>
                <li>
                  <span className="icon-setting"></span>预约维修服务
                </li>
                <li>
                  <span className="icon-7day"></span>7天无理由退货
                </li>
                <li>
                  <span className="icon-15day"></span>15天免费换货
                </li>
                <li>
                  <span className="icon-post"></span>满150元包邮
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AppFooter></AppFooter>
      </div>
    )
  }
}

export default IndexPage

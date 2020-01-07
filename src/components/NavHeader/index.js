import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
class NavHeader extends Component {
  render() {
    return (
      <div className="nav-header">
        <div className="container">
          <div className="header-logo">
            <Link to={'/'}></Link>
          </div>
          <div className="header-menu">
            <div className="item-menu">
              <span>小米手机</span>
              <div className="children">
                <ul></ul>
              </div>
            </div>
            <div className="item-menu">
              <span>RedMi红米</span>
            </div>
            <div className="item-menu">
              <span>电视</span>
              <div className="children">
                <ul>
                  <li className="product">
                    <Link
                      rel="noopener noreferrer"
                      to="https://www.baidu.com"
                      target="_blank"
                    >
                      <div className="pro-img">
                        <img
                          alt=""
                          data-src="imgsnav-imgnav-3-1.jpg"
                          src="imgsnav-imgnav-3-1.jpg"
                          lazy="loaded"
                        />
                      </div>
                      <div className="pro-name">小米壁画电视 65英寸</div>
                      <div className="pro-price">6999元</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-search">
            <div className="wrapper">
              <input type="text" name="keyword" />
              <Link to="/"></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavHeader

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import shopCartImg from '../../assets/images/icon-cart-checked.png'
export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-topbar">
        <div className="container">
          <div className="topbar-menu">
            <Link to="/">小米商城</Link>
            <Link to="/">MUI</Link>
            <Link to="/">云服务</Link>
            <Link to="/">协议规则</Link>
          </div>
          <div className="topbar-user">
            <Link to="/login">登录</Link>
            <Link to="/" className="my-cart">
              <img
                src={shopCartImg}
                className="icon-cart"
                alt="shop-cart-icon"
              ></img>
              购物车(0)
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

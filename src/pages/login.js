import React, { Component } from 'react'
import '../assets/styles/pages/login.less'
import logoImg from '../assets/images/login-logo.png'
import { Link } from 'react-router-dom'
import { Divider, Icon } from 'antd'
import { ICON_URL } from '../constants/icon'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: ICON_URL
})

class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <header className="login-header">
          <div className="header-container">
            <Link to="/">
              <img src={logoImg} alt="login-logo" />
            </Link>
          </div>
        </header>
        <section className="login-container">
          <div className="container">
            <div className="login-form-container">
              <h3>
                <span className="checked">帐号登录</span>
                <span className="sep-line">|</span>
                <span>扫码登录</span>
              </h3>
              <div className="input" tabIndex="0">
                <input type="text" placeholder="请输入帐号 / 邮箱 / 手机号" />
              </div>
              <div className="input" tabIndex="0">
                <input type="password" placeholder="请输入密码" />
              </div>
              <div className="btn-box">
                <div className="btn">登录</div>
              </div>
              <div className="tips">
                <div className="sms">手机短信登录/注册</div>
                <div className="reg">
                  <span className="text">立即注册</span>
                  <span>|</span>
                  <span className="text"> 忘记密码？</span>
                </div>
              </div>
              <Divider className="divider-line">第三方登录</Divider>
              <div className="other-login-types">
                <IconFont className="icon-item weixin" type={'icon-weixin'} />
                <IconFont
                  className="icon-item zhifubao"
                  type={'icon-umidd17'}
                />
                <IconFont className="icon-item weibo" type={'icon-weibo'} />
                <IconFont className="icon-item QQ" type={'icon-icon'} />
              </div>
            </div>
          </div>
        </section>
        <footer className="login-footer">
          <div className="footer">
            <div className="footer-link">
              <a
                href="https://carlosme.fun"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carlos博客主页
              </a>
              <span>|</span>
              <a
                href="https://github.com/maliaoMJ"
                rel="noopener noreferrer"
                target="_blank"
              >
                Carlos GitHub主页
              </a>
              <span>|</span>
              <a
                href="https://github.com/maliaoMJ/"
                rel="noopener noreferrer"
                target="_blank"
              >
                MI-Mall 商城
              </a>
              <span>|</span>
              <a
                href="https://github.com/maliaoMJ/react-admin-template"
                rel="noopener noreferrer"
                target="_blank"
              >
                React-Admin-Template (基于React 的后台管理模板)
              </a>
            </div>
            <p className="copyright">
              Copyright ©2019 carlosme.fun All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default LoginPage

import React, { Component } from 'react'
import './index.less'
class AppFooter extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src="http://mi.futurefe.com/imgs/logo-footer.png" alt="" />
          <p>小米商城</p>
        </div>
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
            href="https://github.com/maliaoMJ/MI-Mall"
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
        <div className="copyright">
          Copyright &copy;2019
          <a
            className="domain"
            rel="noopener noreferrer"
            href="https://carlosme.fun"
            target="_blank"
          >
            &nbsp;carlosme.fun
          </a>{' '}
          All Rights Reserved.
        </div>
      </div>
    )
  }
}
export default AppFooter

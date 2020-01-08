import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
class ProductItem extends Component {
  render() {
    return (
      <Link to="/" className="product-item">
        <span className="new-pro">新品</span>
        <div className="item-img">
          <img
            alt=""
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg"
          />
        </div>
        <div className="item-info">
          <h3>Redmi Note 8 Pro</h3>
          <p>6400万全场景四摄</p>
          <p className="price">1399元</p>
        </div>
      </Link>
    )
  }
}

export default ProductItem

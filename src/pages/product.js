import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import NavBar from '../components/NavBar/index'
import NavHeader from '../components/NavHeader/index'
import AppFooter from '../components/AppFooter/index'
import ServiceNav from '../components/ServiceNav/index'
import '../assets/styles/pages/product.less'
class ProductPage extends Component {
  render() {
    return (
      <div className="product-page">
        <NavBar></NavBar>
        <NavHeader></NavHeader>
        <ServiceNav></ServiceNav>
        <AppFooter></AppFooter>
      </div>
    )
  }
}
export default ProductPage

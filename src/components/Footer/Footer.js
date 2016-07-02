import React, { Component, PropTypes } from 'react'
import { Link, IndexLink, browserHistory  } from 'react-router'
import styles from './Footer.css'

export default class Footer extends Component {

  render () {
    return (
      <div>
        <nav className="bar bar-tab nav-bg-c">
          <IndexLink className="tab-item" to="/" activeClassName="active">
            <span className="icon icon-home"></span>
            <span className="tab-label">首页</span>
          </IndexLink>
          <Link className="tab-item" to={`/category`} activeClassName="active">
            <span className="icon icon-list"></span>
            <span className="tab-label">发现</span>
          </Link>
          <Link className="tab-item" to={`/cart`} activeClassName="active">
            <span className="icon icon-pages"></span>
            <span className="tab-label">购物车</span>
          </Link>
          <Link className="tab-item" to={`/my`} activeClassName="active">
            <span className="icon icon-person"></span>
            <span className="tab-label">个人中心</span>
          </Link>
        </nav>

    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}

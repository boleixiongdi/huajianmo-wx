import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './Package.css'

class CategoryIndex extends Component {

  render () {

    return (
      <div className={styles.package}>
        这是分类业的默认选项
      </div>
    )
  }
}

/**
* 接收store中state和props，state就是数据，此方法讲数据绑定到props上
**/
function mapStateToProps(state) {
  console.log(state)
  return {
    state
  }
}

export default connect(mapStateToProps)(CategoryIndex)

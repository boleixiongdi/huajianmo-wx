import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackage } from '../../actions/npmPackage'
import styles from './Package.css'
import Loader from '../../components/Loader/Loader'
import PackageItem from '../../components/PackageItem/PackageItem'
import { isEmpty } from '../../utils'

class Package extends Component {

  static fetchData({ params, store, url }) {
    console.log("请求参数"+params);
    console.log("请求地址"+url);
    return store.dispatch( fetchPackage(url, params.name) )
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.setState({
      loading: true
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log("组件接收到新的 props 的时候调用")
    this.setState({
      loading: !isEmpty(nextProps.params.npmPackage)
    })
  }

  componentDidMount () {
    console.log("组件渲染完成,去获取数据")
    this.props.dispatch(fetchPackage(location.origin, this.props.params.name))
  }

  render () {

    const { npmPackage } = this.props
    let loading = this.state.loading
    let packageItem = loading ? null : <PackageItem item={npmPackage} />
    let loader = loading ? <Loader /> : null

    return (
      <div className={styles.package}>
        { loader }
        { packageItem }
      </div>
    )
  }
}

/**
* 接收store中state和props，state就是数据，此方法讲数据绑定到props上
**/
function mapStateToProps(state) {
  console.log("接收store中state和props，state就是数据，此方法讲数据绑定到props上")
  console.log(state)
  return {
    npmPackage: state.npmPackage
  }
}

export default connect(mapStateToProps)(Package)

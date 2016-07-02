import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackage } from '../../actions/category'
import styles from './Package.css'
import Loader from '../../components/Loader/Loader'
import CategoryItem from '../../components/Category/CategoryItem'
import { isEmpty } from '../../utils'

class Category extends Component {

  static fetchData({ params, store, url }) {
    console.log("获取数据参数"+params);
    console.log("获取数据地址"+url);
    return store.dispatch( fetchPackage(url, params.id) )
  }

  constructor (props) {
    console.log("开始调用组件");
    super(props)
  }

  componentWillMount () {
    this.setState({
      loading: true
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log("接受的数据"+nextProps.params.category)
    this.setState({
      loading: !isEmpty(nextProps.params.category)
    })
  }

  componentDidMount () {
    console.log("分类组件渲染完成");
    this.props.dispatch(fetchPackage(location.origin, this.props.params.id))
  }

  render () {

    const { category } = this.props
    let loading = this.state.loading
    let categoryItem = loading ? null : <CategoryItem item={category} />
    let loader = loading ? <Loader /> : null

    return (
      <div className={styles.package}>
        { loader }
        { categoryItem }
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
    category: state.category
  }
}

export default connect(mapStateToProps)(Category)

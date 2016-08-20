import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPackages } from '../../actions/categories'
import styles from './Categories.css'
import Loader from '../../components/Loader/Loader'
import { isEmpty } from '../../utils'
import { Link, IndexLink } from 'react-router'

function Categories({ pushPath, children }) {
  return (
    <div>
      <div className={styles.leftNav}>
        <ul className={styles.ul_pd}>
        <li key="1" className={styles.ul_pd_li}>
          <IndexLink to={`/category`}　activeClassName="active">
            <p className={styles.name}>热门</p>
          </IndexLink>
        </li>
        <li key="2" className={styles.ul_pd_li}>
          <Link to={`/category/1`}　activeClassName="active">
            <p className={styles.name}>大理</p>
          </Link>
        </li>
        <li key="3" className={styles.ul_pd_li}>
          <Link to={`/category/2`}　activeClassName="active">
            <p className={styles.name}>丽江</p>
          </Link>
        </li>
        <li key="4" className={styles.ul_pd_li}>
          <Link to={`/category/3`}　activeClassName="active">
            <p className={styles.name}>西双版纳</p>
          </Link>
        </li>
        </ul>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
};

module.exports = connect(
  null
)(Categories)

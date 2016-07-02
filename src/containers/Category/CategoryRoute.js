import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
/* generic styles */
import styles from '../../styles/base.css'
import normalize from '../../styles/normalize.css'
Object.assign(styles, normalize)


function CategoryRoute({ pushPath, children }) {
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
};

module.exports = connect(
  null
)(CategoryRoute)

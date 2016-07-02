import React from 'react'
import styles from './PackageItem.css'
import marked from 'marked'

function CategoryItem(props) {

    const { name, status, priority } = props.item


    return (
      <div className={styles.item}>
        {
          name &&
            <h2 className={styles.name}>{name} </h2>
        }

        {
          status &&
            <h2 className={styles.authorName}>by {status} </h2>
        }

        {
          priority &&
          <h2 className={styles.authorName}>by {priority} </h2>
        }

      </div>

    );
}

export default CategoryItem

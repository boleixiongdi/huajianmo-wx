import React from 'react'
import styles from './GoodsGroup.css'
import marked from 'marked'

function GoodsGroup(props) {

    //const { name, status, priority } = props.item
    return (
      <div className={styles.w_room}>
        <div className={styles.mall_title}>
          大理美食
        </div>
        <a className={styles.w_room_title}>
          <div className={styles.title}>
            <h3>大理美食</h3>
          </div>
          <div className={styles.op}>
            <span className={styles.tip}></span>
          </div>
        </a>
        <div>
          <div className={styles.mod_row_span_30}>
            <div className={styles.w_sidebox}>
              <a>
                <div className={styles.w_sidebox_img}><img className={styles.img} src="http://img12.360buyimg.com/focus/jfs/t2974/41/389861368/19906/bf55b2c1/57577172N1e0e6815.jpg.webp" /></div>
              </a>
            </div>
          </div>
          <div className={styles.mod_row_span_70}>
            <div className={styles.w_room_grid}>
              <div className={styles.w_room_item}>
                <a>
                  <div className={styles.w_room_item_img}><img className={styles.img} src="http://img30.360buyimg.com/focus/jfs/t2845/358/2100946917/7532/d1fae664/5758170dNa8a9626c.jpg.webp"/></div>
                  <div>
                    <div>大理专场</div>
                    <div>乳扇</div>
                  </div>
                </a>
              </div>
              <div className={styles.w_room_item}>
                <a>
                  <div className={styles.w_room_item_img}><img className={styles.img} src="http://img30.360buyimg.com/focus/jfs/t2641/181/2204368530/12632/45b4e939/575d2fd1Nccf5e95a.jpg.webp" /></div>
                  <div>
                    <div>大理专场</div>
                    <div>乳扇</div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.w_room_grid}>
              <div className={styles.w_room_item}>
                <a>
                  <div className={styles.w_room_item_img}><img className={styles.img} src="http://img13.360buyimg.com/focus/jfs/t2770/174/2218052757/11931/c48ce66/575d3087N595f7c8d.jpg.webp"/></div>
                  <div>
                    <div>大理专场</div>
                    <div>乳扇</div>
                  </div>
                </a>
              </div>
              <div className={styles.w_room_item}>
                <a>
                  <div className={styles.w_room_item_img}><img className={styles.img} src="http://img13.360buyimg.com/focus/jfs/t2926/289/520049931/11197/b38a14e4/575e1e7fNd724a0ef.jpg.webp" /></div>
                  <div>
                    <div>大理专场</div>
                    <div>乳扇</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cl}></div>
      </div>
    );
}

export default GoodsGroup

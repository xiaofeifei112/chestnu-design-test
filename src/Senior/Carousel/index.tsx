import React, {memo, useState} from "react";
// @ts-ignore
import styles from "./index.scss";


interface Params {
  /**
   * 初始化值
   * */
  index?: number;
  /**
   * 数据列表
   * */
  dataArr: any[];
  /**
   * 关闭模态框事件
   * */
  closeModal: () => void;
  /**
   * url 名字
   * */
  urlName: string | "self"
}


// 图片预览，轮播图
const Carousel:(params: Params) => JSX.Element = ({dataArr = [], closeModal, urlName = ""}: Params) => {
  // 左边距
  const [left, setLeft] = useState<number>(0);
  // 最大左边距
  const maxLeft = (dataArr.length - 1 ) *- 800;
  // 移动
  const changeLeft = (flag: 'right' | 'left') => {
    if(flag === 'right' && left > maxLeft) {
      setLeft(left - 800)
    }else if(flag === 'left' && left < 0){
      setLeft(left + 800)
    }
  }

  return (<div className={styles.Carousel} onClick={(event) => event.stopPropagation()}>

    {dataArr.length ? <em onClick={() => changeLeft('left')} className={`${styles.leftArrow} iconfont icon_backpage_d ${left >= 0 ? 'none' : ''}`}/> : null}

    <div className={styles['Carousel-box']}>
      <em className={`${styles['close-btn']} iconfont icon_close`} onClick={closeModal} />
      <div className={styles['showImg-box']}>
        <ul className={styles['imgArr-box']} style={{left , width: `${dataArr.length * 800}px`}}>
          {dataArr.map((value: any, index: number) => (<li key={index} style={{backgroundImage: `url(${urlName === 'self' ? value: value[urlName]})`}}/>))}
        </ul>
      </div>
    </div>
    {dataArr.length > 1 && (<em className={`${styles['rightArrow']} iconfont icon_nextpage_d ${left<=maxLeft ? 'none' : ''}`} onClick={()=>changeLeft('right')} />
    )}
  </div>)
}

export default memo(Carousel);

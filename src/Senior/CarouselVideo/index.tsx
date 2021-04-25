import React, {useState, memo} from "react";
// @ts-ignore
import {Player} from "video-react";
import 'video-react/dist/video-react.css';
// @ts-ignore
import styles from './index.scss';

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

const CarouselVideo: (params: Params) => JSX.Element = ({dataArr, closeModal}: Params) => {

  // 左边距
  const [left, setLeft] = useState<number>(0);
  // 最大左边距
  const maxLeft = (dataArr.length - 1) * -800;
  // 当前下标
  const [activeIndex, setActiveIndex] = useState<number>(0)
  // 移动
  const changeLeft = (flag: 'right' | 'left') => {
    if (flag === 'right' && left > maxLeft) {
      setLeft(left - 800)
      setActiveIndex(activeIndex + 1)
    } else if (flag === 'left' && left < 0) {
      setLeft(left + 800)
      setActiveIndex(activeIndex - 1)
    }
  }


  return (<div className={styles['carousel-video']}>
    {dataArr.length > 1 && (<em
      className={`${styles.leftArrow} iconfont icon_backpage_d ${left >= 0 ? 'none' : ''}`}
      onClick={() => {
        changeLeft('left')
      }}/>)}

    <div className={styles['carousel-video-box']}>
      <em className={`${styles['close-btn']} iconfont icon_close`} onClick={closeModal}/>
      <div className={styles['showImg-box']}>
        <ul className={styles['imgArr-box']} style={{left: left, width: `${dataArr.length * 800}px`}}>
          {dataArr.map((value, i) => (
            <li key={i}> {activeIndex === i && (
              <Player width={'100%'} height={'100%'} fluid={false} autoPlay={true} poster={value.poster}>
                <source src={dataArr[activeIndex].url}/>
              </Player>)} </li>
          ))}
        </ul>
      </div>
    </div>

    {dataArr.length > 1 && (<em onClick={() => changeLeft('right')}
                                className={`${styles["rightArrow"]} iconfont icon_nextpage_d ${left <= maxLeft ? 'none' : ''}`}/>)}
  </div>)
}


export default memo(CarouselVideo);

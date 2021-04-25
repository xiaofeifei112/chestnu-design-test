import React, {memo} from "react";
// @ts-ignore
import styles from "./index.scss";
// @ts-ignore
import play from "./play.png";

type ParamsType = 'video' | 'avatar' | 'content' | 'link' | 'sucai';

export interface Params {
  /**
   * 类型
   * */
  type: 'video' | 'avatar' | 'content' | 'link' | 'sucai';
  /**
   * 数据
   * */
  data: ParamsData;
  /**
  * 头像链接
  * */
  handleLink?: (linkUrl: string) => void;
}

export interface ParamsData {
  /**
   * 内容
   * */
  content?: JSX.Element | string;
  /**
   * 头像链接
   * */
  linkUrl?: string;
  /**
   * 头像标题
   * */
  linkTitle?: JSX.Element | string;
  /**
   * 数字条件
   * */
  openPeopleCount?: number;
  /**
   * 数字条件
   * */
  openCount?: number;
  /**
   * 头像内容
   * */
  videoThumbMediaId?: string;
  /**
   * 图片组
   * */
  imgeList?: string[]
}
/**
 * API 类型导出
 * */
export const paramsData: (params:ParamsData) => void = (params: ParamsData) => {};

// 头像
const ViewAvatar = ({imgArr: Arr, type, handleLink, data: {content, linkUrl, linkTitle, openPeopleCount, openCount}}
: {imgArr?: string[], type: ParamsType, handleLink?: (linkUrl: string) => void, data: ParamsData}) => {


  return (<div className={styles["QymomentsList-content"]}>

    {Arr?.length && (<div className={styles["left-box"]}>

      {Arr.length === 1 && (<div className={styles["avatar-box-1"]}>
        <img src={Arr[0]} alt=""/>
        {type === "video" && <img src={play} className={styles['video-play-img']} alt=""/>}
      </div>)}

      {Arr.length === 2 && Arr.map((item: string, index:number) => (<div key={index} className={styles['avatar-box-2']}>
        <img className={styles.avatar} src={item} alt=""/>
      </div>))}

      {Arr.length === 3 && (<>
        <div className={styles['avatar-box-3']}>
          <img src={Arr[0]} alt=""/>
        </div>
        <div className={styles['two-imgbox']}>
          <div className={styles['top-img']}>
            <img src={Arr[1]} className={styles.avatar} alt=""/>
          </div>
          <div className={styles['bottom-img']}>
            <img src={Arr[2]} className={styles.avatar} alt=""/>
          </div>
        </div>
      </>)}

      {Arr.length === 4 && (<>
        <div className={styles["four-imgbox"]}>
          <div className={styles["top-img"]}>
            <img src={Arr[0]} className={styles.avatar} alt=""/>
          </div>
          <div className={styles['bottom-img']}>
            <img src={Arr[1]} className={styles.avatar} alt=""/>
          </div>
        </div>
        <div className={styles['four-imgbox']}>
          <div className={styles['top-img']}>
            <img className={styles.avatar} src={Arr[2]} alt="" />
          </div>
          <div className={styles['bottom-img']}>
            <img className={styles.avatar} src={Arr[3]} alt="" />
          </div>
        </div>
      </>)}
    </div>)}

    {(type === 'video' || type === 'avatar' || type === 'content') && (
      <div className={styles['right-box'] + " " + styles['right-box1']}>
        <span>{content}</span>
      </div>
    )}

    {type === 'link' && (<div className={styles['right-box2']}>
      {content && <div className={styles['title']}>{content}</div>}
      <p className={styles.desc} >
        <i onClick={()=>handleLink && handleLink(linkUrl || "")} className={`iconfont icon_lianjie ${styles['link-icon']}`} />
        <span className={ `${styles['desc-text']} ${!content && styles['desc-text-hide']}`}>{linkTitle}</span>
      </p>
    </div>)}

    {type === "sucai" && (<div className={`${styles['right-box']} ${styles['right-box3']}`}>
      {content && <span className={styles.title}>{content}</span>}
      <p className={styles.desc}>
        {(openPeopleCount != -1 && openPeopleCount && openCount != -1 && openCount) && (
          <i className={`iconfont icon_sucaizhongxing link-icon`}/>
        )}
        <span className={styles['desc-text1']}>{linkTitle}</span>
        {(openPeopleCount != -1 && openPeopleCount && openCount != -1 && openCount) && (
          <span className={styles['desc-text2']}>{openPeopleCount}人打开{openCount}次</span>)}
      </p>
    </div>)}

  </div>)
}


// 头像组件
const AvatarGroup: (props: Params) => JSX.Element = (
  {type, data, handleLink}: Params) => {
  return (<>
    {type === "video" && <ViewAvatar type={type} data={data} imgArr={[data.videoThumbMediaId || ""]} />}
    {type === "avatar" && <ViewAvatar type={type} data={data} imgArr={data.imgeList}/>}
    {type === "link" && <ViewAvatar type={type} data={data} handleLink={handleLink}/>}
    {(type === "sucai" || type === "content") && <ViewAvatar type={type} data={data}/>}
  </>)
}

export default memo(AvatarGroup);

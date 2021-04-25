import React, {memo, Fragment} from "react";
// @ts-ignore
import styles from "./index.scss";

interface Params {
  /**
   * 返回事件
   * */
  backHandle?: () => void;
  /**
   * 配置节点
   * */
  crumbs?: {isCurrent: boolean, clickHandle: () => void, name: JSX.Element | string}[];
  /**
   * 自定义样式
   * */
  style?: React.CSSProperties;
  /**
   * 内容
   * */
  tips?: JSX.Element | string;
}

const BreadCrumb: (params: Params) => JSX.Element = ({backHandle, crumbs = [], style, tips}: Params) => {

  return (<div className={styles['lzc-breadcrumb']} style={style}>
  <span className={styles.back} onClick={backHandle}><em className='icon-back iconfont icon_back_d'/> 返回</span>
    <span className={styles.bread}>
      {crumbs.map((crumb: any, index) => <Fragment key={index}>
        <span className={!crumb.isCurrent ? styles['bread-back'] : ""} onClick={crumb.clickHandle}>{crumb.name}</span>
        <span className={styles['slash']}> / </span>
      </Fragment>)}
    </span>
    <span style={{marginLeft: '24px'}}> {tips} </span>
  </div>)
}

export default memo(BreadCrumb);

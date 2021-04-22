import React, {} from "react";
// @ts-ignore
import styles from "./index.scss";

interface Params {
  /**
   * check 参数 默认 false
   * */
  disabled: boolean;
  /**
   * 样式
   * */
  styles?: React.CSSProperties;
  /**
   * 默认参数
   * */
  defaultValue?: any;
  /**
   * 配置参数
   * */
  options?: any;
  /**
   * 类目
   * */
  className?: string;
}

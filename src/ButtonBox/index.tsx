import React from "react";
import './index.scss';

export interface Params {
  //子元素
  children?: JSX.Element | string;
  //点击事件
  btnFunction?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  // 标签文本
  btnTxt?: JSX.Element | string;
  // 自定义样式类名
  styleName?: string;
  // 删除
  isDelete?: boolean;
  // 取消
  isCancel?: boolean;
  // 自定义样式
  btnStyle?: React.CSSProperties | undefined;
  // 按钮图标
  afterIcon?: JSX.Element;
}

const ButtonBox: (props: Params) => JSX.Element = (
  {children, btnFunction, btnTxt, styleName = "", isCancel, isDelete, btnStyle, afterIcon}: Params
) => {


  return (<div
    className={`ButtonBox ${styleName} ${isCancel ? 'cancel' : (isDelete ? 'delete' : 'confirm')}`}
    style={btnStyle}
    onClick={btnFunction}
  >
    {styleName === "downloadBtn" && <em/>}
    {styleName === "uploadBtn" && <em/>}
    {children}
    {btnTxt}
    {afterIcon}
  </div>)
}

export default ButtonBox;

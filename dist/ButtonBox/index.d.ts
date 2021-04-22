import React from "react";
export interface Params {
    /**
     * 子元素
     * */
    children?: JSX.Element | string;
    /**
     * 点击事件
     * */
    btnFunction?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    /**
     * 标签文本
     * */
    btnTxt?: JSX.Element | string;
    /**
     * 自定义样式类名
     * */
    styleName?: string;
    /**
     * 删除
     * */
    isDelete?: boolean;
    /**
     * 取消
     * */
    isCancel?: boolean;
    /**
     * 自定义样式
    * */
    btnStyle?: React.CSSProperties | undefined;
    /**
     * 按钮图标
     * */
    afterIcon?: JSX.Element;
}
declare const _default: React.MemoExoticComponent<(props: Params) => JSX.Element>;
export default _default;

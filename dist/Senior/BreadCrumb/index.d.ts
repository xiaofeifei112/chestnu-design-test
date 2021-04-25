import React from "react";
interface Params {
    /**
     * 返回事件
     * */
    backHandle?: () => void;
    /**
     * 配置节点
     * */
    crumbs?: {
        isCurrent: boolean;
        clickHandle: () => void;
        name: JSX.Element | string;
    }[];
    /**
     * 自定义样式
     * */
    style?: React.CSSProperties;
    /**
     * 内容
     * */
    tips?: JSX.Element | string;
}
declare const _default: React.MemoExoticComponent<(params: Params) => JSX.Element>;
export default _default;

import React from "react";
import 'video-react/dist/video-react.css';
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
    urlName: string | "self";
}
declare const _default: React.MemoExoticComponent<(params: Params) => JSX.Element>;
export default _default;

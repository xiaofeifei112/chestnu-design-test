import React from "react";
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
    imgeList?: string[];
}
/**
 * API 类型导出
 * */
export declare const paramsData: (params: ParamsData) => void;
declare const _default: React.MemoExoticComponent<(props: Params) => JSX.Element>;
export default _default;

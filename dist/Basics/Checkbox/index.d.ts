import React from "react";
import { CheckboxOptionType } from "antd";
declare type CheckBoxValue = boolean | string | number;
interface Params {
    /**
     * 多选框值
     * */
    disabled?: boolean;
    /**
     * 多选框样式
     * */
    style?: React.CSSProperties;
    /**
     * 多选框参数
     * */
    options?: (string | CheckboxOptionType)[] | undefined;
    /**
     * 多选框参数
     * */
    className?: string;
    /**
     * 参数字段
     * */
    paramName?: string;
    /**
     * 子元素
     * */
    children?: JSX.Element;
}
interface CheckBoxGroup extends Params {
    /**
     * 事件
     * */
    onChange?: (key: string, value: any) => void;
    /**
     * 默认参数
     * */
    defaultValue?: Array<CheckBoxValue>;
}
declare const MyCheckBox: (params: CheckBoxGroup) => JSX.Element;
export default MyCheckBox;
interface CheckBox extends Params {
    /**
     * 事件
     * */
    onChange?: (value: any) => void;
    /**
     * 默认参数
     * */
    defaultValue?: boolean | undefined;
    /**
     * 选中参数
     * */
    checked?: boolean;
}
export declare const OneCheckbox: (params: CheckBox) => JSX.Element;

import React, { useState } from "react";
import {CheckboxOptionType, Checkbox} from "antd";
// @ts-ignore
import styles from "./index.scss";

type CheckBoxValue = boolean | string | number;

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

const MyCheckBox: (params: CheckBoxGroup) => JSX.Element =
  ({
     onChange = () => {
     },
     paramName = "",
     className,
     options,
     defaultValue,
     disabled,
    children
   }: CheckBoxGroup) => {


    return (
      <Checkbox.Group
        onChange={(checkedValues: any) => {
          onChange(paramName, checkedValues);
        }}
        className={className}
        options={options}
        style={styles}
        defaultValue={defaultValue}
        disabled={disabled}
        children={children}
      />
    );
  };

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

export const OneCheckbox: (params: CheckBox) => JSX.Element = (
  {
    disabled, defaultValue, className, checked, children, onChange = () => {
  }
  }: CheckBox) => {
  const [_checked, setChecked] = useState<boolean | undefined>(checked || defaultValue);
  const onChangeFunc = (checkedValues: any) => {
    if (checked === undefined) {
      setChecked(checkedValues.target.checked);
    }
    onChange(checkedValues.target.checked);
  };

  return (
    <Checkbox
      onChange={onChangeFunc}
      className={`${styles["w-checkbox"]} ${className}`}
      style={styles}
      disabled={disabled}
      checked={checked === undefined ? _checked : checked}
      children={children}
    />
  );

};

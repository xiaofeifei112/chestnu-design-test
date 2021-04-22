import React from "react";
import './index.scss';
export interface Params {
    children?: JSX.Element | string;
    btnFunction?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
    btnTxt?: JSX.Element | string;
    styleName?: string;
    isDelete?: boolean;
    isCancel?: boolean;
    btnStyle?: React.CSSProperties | undefined;
    afterIcon?: JSX.Element;
}
declare const ButtonBox: (props: Params) => JSX.Element;
export default ButtonBox;

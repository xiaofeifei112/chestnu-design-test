import React, { useState } from 'react';
// @ts-ignore
import './index.scss';

interface Params {
    /**
     * 参数名
     * */
    paramsname: string;
    /**
     * class类名
     * */
    className: string;
    /**
     * 输入框label
     * */
    label: string;
    /**
     * 是否必填
     * */
    must?: boolean;
    /**
     * value
     * */
    value?: number;
    /**
     * maxLength
     * */
    maxLength: number;
    /**
     * blurFun
     * */
    blurFun?: (e: any) => void;
    /**
     * disabled
     * */
    disabled?: boolean;
    /**
     * styles
     * */
    styles?: object;
    /**
     * placeholder
     * */
    placeholder: string;
    /**
     * onFocus
     * */
    onFocus?: (e: any) => void;
    /**
     * 是否只读
     * */
    readOnly: boolean;
    /**
     * 输入框大小
     * */
    inputSize: string; // input_medium input_small
    /**
     * value改变回调
     * */
    iptChangeParams?: (n: string, v: number) => void;
}

const Input: React.FC<Params> = ({
    paramsname = '',
    className = '',
    label = '',
    must,
    value,
    maxLength = 50,
    blurFun,
    disabled,
    styles,
    placeholder = '请输入',
    onFocus,
    readOnly = false,
    inputSize = '',
    iptChangeParams,
}: Params) => {

    function handleChangeIpt(e: any) {
        iptChangeParams?.(paramsname, e.target.value);
        console.log(paramsname, className);
    }

    return (
        <div className={'public-input ' + className}>
            {label && (
                <div className="label">
                    {must && (
                        <span
                            style={{
                                color: 'red',
                                position: 'absolute',
                                transform: 'translateX(-8px)',
                            }}
                        >
                            *
                        </span>
                    )}
                    {label}
                </div>
            )}
            <input
                type="text"
                maxLength={maxLength}
                className={`input ${disabled ? 'disabled' : ''} ${inputSize}`}
                value={value}
                placeholder={placeholder}
                style={styles}
                disabled={disabled}
                readOnly={readOnly}
                onBlur={blurFun}
                onFocus={onFocus}
                onChange={e => handleChangeIpt(e)}
            />
        </div>
    );
};

export default Input;


## ButtonBox

Demo:

```tsx
import React from 'react';
import {ButtonBox} from "chestnut-design";

export default () => <ButtonBox>我是一个按钮</ButtonBox>
```

> 配置

```tsx
import React from 'react';
import {ButtonBox} from "chestnut-design";

export default () => {
    
    const btnFunction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log("我被点击了")
    }
    
    return (<ButtonBox
      btnFunction={btnFunction}
      isDelete={true}
      btnTxt={"删除按钮"}
    />)
}

```

> 参数

| 参数 | 类型 | 描述 | 
| ---- | ---- | ----|
| children | JSX.Element or string | 子元素 |
| btnFunction | (event) => void or undefined | 点击事件 |
| btnTxt | JSX.Element or string | 按钮内元素 |
| styleName | string | 自定义样式类名 |
| isDelete | boolean | 删除按钮 |
| isCancel | boolean | 取消按钮 |
| btnStyle | css or undefined  | 自定义样式 |
| afterIcon | JSX.Element | 按钮图标 |


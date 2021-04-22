---
title: 按钮
---

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
      btnTxt={"更新按钮"}
      styleName={"uploadBtn"}
    />)
}

```

<API src="./index.tsx"></API>


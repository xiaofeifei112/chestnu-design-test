---
title: 轮播图
---

## Carousel

Demo:

```tsx
import React, {useState} from "react";
import {Carousel, ButtonBox} from "chestnut-design";



export default () => {
  const [show, setShow] = useState<boolean>(false);
    return (<div>
      <p>控制模态框显示和隐藏</p>
      <ButtonBox btnFunction={() => setShow(!show)} >显示</ButtonBox>
      {show && <Carousel closeModal={() => setShow(!show)} index={0} urlName={'self'} dataArr={['https://www.gemii.cc/imagesV3/gemiilogo.png', 'https://www.gemii.cc/imagesV3/gemiilogo.png']} />}

    </div>)
}
```


<API src="./index.tsx"></API>

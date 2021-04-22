---
title: 图片预览，轮播图
---

## CarouselVideo

Demo:

```tsx
import React, {useState} from "react";
import {CarouselVideo, ButtonBox} from "chestnut-design";


export default () => {
    
  const [showCarouse, setShowCarouse] = useState<boolean>(false);
  
    return (<div>
      <p>控制模态框显示和隐藏</p>
      <ButtonBox btnFunction={() => setShowCarouse(!showCarouse)} >显示</ButtonBox>
      {showCarouse && <CarouselVideo closeModal={() => setShowCarouse(!showCarouse)} index={0} urlName={'self'} dataArr={['https://www.gemii.cc/imagesV3/gemiilogo.png', 'https://www.gemii.cc/imagesV3/gemiilogo.png']} />}
    </div>)
}
```

<API src="./index.tsx"></API>

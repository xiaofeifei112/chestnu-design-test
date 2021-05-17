---
title: 分页
---

## CirclePageRule

Demo:

```tsx
import React from "react";
import {CirclePageRule} from "chestnut-design";

export default () => {
  
  return (<CirclePageRule pageInfo={{
    pageSize: 1,
    currentPage: 1,
    totalRecords: 1
  }} showSizeChanger={true} searchParams={{
    pageSize: 1,
    currentPage: 1,
    totalRecords: 1
  }} />)
}

```

<API src="./index.tsx"></API>

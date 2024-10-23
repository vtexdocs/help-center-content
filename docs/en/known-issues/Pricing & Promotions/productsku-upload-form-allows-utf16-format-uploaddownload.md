---
title: 'Product/SKU upload form allows UTF-16 format upload/download'
id: 3NSxmGXvgFKHd2C4v2EwWV
status: PUBLISHED
createdAt: 2022-06-08T20:04:18.508Z
updatedAt: 2024-02-16T20:26:55.864Z
publishedAt: 2024-02-16T20:26:55.864Z
firstPublishedAt: 2022-06-08T20:04:19.062Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: productsku-upload-form-allows-utf16-format-uploaddownload
locale: en
kiStatus: No Fix
internalReference: 493402
---

## Summary


Currently, if a user attempts to upload an SKU list to the regular promotion form using a .txt file, if the uploaded file is in the UTF-16 encoding format, so will be the downloaded file afterward.






## Simulation


1) Create a regular promotion and in section #2 "To which **items** will this promotion apply?", upload a UTF-16 formatted, valid SKU list to either the SKU or Product files

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/known-issues/Pricing & Promotions/productsku-upload-form-allows-utf16-format-uploaddownload_1.png)​

2) Save the promotion

3) Open it again and attempt to download the given file, its encoding format will still be UTF-16, which can often cause confusion amongst other store operators.






## Workaround


Manually input the SKUs and/or make sure the uploaded file is UTF-8


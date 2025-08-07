---
title: "Switching from html editor mode in product description removes <p> tags"
id: 4758mIGzPpJwo8YEmAfbxK
status: PUBLISHED
createdAt: 2025-04-09T20:12:33.784Z
updatedAt: 2025-04-09T20:12:34.957Z
publishedAt: 2025-04-09T20:12:34.957Z
firstPublishedAt: 2025-04-09T20:12:34.957Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: switching-from-html-editor-mode-in-product-description-removes-p-tags
locale: en
kiStatus: Backlog
internalReference: 1208549
---

## Summary


Currently, in the new catalog description editor for products, if you switch the view from the regular mode to HTML, you will be able to see all tags that the current HTML formatting is using in the text.

If you manually insert a paragraph opening and closing tag <p></p> in the editor and switch back to the regular mode, these tags will be automatically removed and no paragraph will be created.


##

## Simulation


1 - in a product description with 2+ paragraphs, switch to the HTML editor mode available by pressing the </> button in the bottom

 ![](https://vtexhelp.zendesk.com/attachments/token/4WtexfuFAhq9kNA6yCac7kXeS/?name=image.png)

2 - manually add a <p> </p> tag set

3 - switch back to the regular mode

4 - switch once again to the HTML mode, the <p> tags will no longer be present


##

## Workaround


Use the legacy catalog text editor or do not switch form and to the HTML editing mode when editing product descriptions.

OR

Create product descriptions via sheets/API






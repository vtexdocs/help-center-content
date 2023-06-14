---
title: 'Using custom controls'
id: 1G2MTHr1fAMCi7t2ZXoa9k
status: DRAFT
createdAt: 2020-01-09T22:10:24.741Z
updatedAt: 2022-01-10T22:46:01.216Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:29:53.371Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: using-custom-controls
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
---

In addition to VTEX's native controls, you can create your own controls.

Like native controls, custom controls must be added to templates and subtemplates and can be replicated in multiple parts of the same page and in multiple pages.

Also like native controls, they render elements of the following types:
- Banner
- DHTML Banner
- Collection
- HTML

### Creating a Custom Control

To create a custom control, follow the walk-through below:
1. Access the CMS module.
2. Click on __Layout__.
3. Click on the __CMS__ folder.
4. Click on the __Custom Elements__ folder.
5. Click on the __Add__ button.
![8 1](//images.ctfassets.net/alneenqid6w5/2O1QkWg7UoaHzM7r1kZetq/aae42e4de48ea2bb9845f5607d14332c/8_1.png)
6. Fill in the __Name__ field with the custom control name.
7. Fill in the __Tag name__ field. This is the name that will be used in the control when adding it to the template.
8. Select the control type on __Type__.
9. In the right part of the page, click on the __Save Content__ button.

From now on, when you go to the Custom Elements section, you'll see the new control listed next to the others.

You can configure it and add content, as with a VTEX's native control.


### Apply a Custom Control to a Page Template

Applying a custom control is similar to applying a native control.

The difference is in the control syntax.

To identify the custom control you should use, enter the name of the tag registered when the control was created.

Below are the syntaxes for each control type:
- __Banner Type__: `<vtex:tagname />`
- __HTML Type__: `<vtex.cmc:tagname />`
- __Collection Type__: `<vtex.cmc:tagname />`

In all three cases, `tagname` must be replaced by the name of the tag registered in step 8 of the control creation.

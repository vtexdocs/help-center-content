---
title: 'Managing page and template content'
id: 3tMbx6HXy4Fy5r9EhboG37
status: PUBLISHED
createdAt: 2021-05-07T03:32:03.808Z
updatedAt: 2023-03-24T22:17:48.424Z
publishedAt: 2023-03-24T22:17:48.424Z
firstPublishedAt: 2021-05-07T06:03:50.121Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-page-and-template-content
locale: en
legacySlug: managing-page-and-template-content
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

The Site Editor natively reflects the Store Theme app, enabling you to overwrite the predefined configurations for blocks and create new content for your store pages and templates.

>ℹ️ The Site Editor does not allow you to add a new block to a template or specific page, only overwrite existing block configurations from the Store Theme app.

Exercise your autonomy over code and build the desired storefront scenario according to your business needs using a friendly interface in your favor!

In the VTEX Admin:

1. Access **Storefront > Site Editor**.
2. Use the URL field on your top corner to navigate to the page that displays the block whose content will be overwritten. 

## Creating content

1. Select the block to which you desire to create a new content. You can select it using the list on your right corner or through the interface:

![seta-interface-en](https://images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/7969df97b1d05d70fe0a555052cf4011/img-two-en.png)

2. Click on `Versions` on your top-right corner.

>ℹ️ The content you see when you click on a block is the one currently active. For more information about **Versions**, access [Managing content versions](https://help.vtex.com/en/tutorial/managing-content-versions--4loXo98CZncY0NnjKrScbG) and [Scheduling content `updates`](https://help.vtex.com/en/tutorial/scheduling-content-updates--5L93gED3wgSRoWpFJlJ2ns)

3. Click on the `New content` button.
4. Perform the desired changes according to the available configurations for the block. 
5. Define if the content should be activated once saved by clicking on the `Activate now` checkbox. You can also define a start date and end date if desired. To do so, toggle the respective buttons and choose the suitable date in the calendar.

  >⚠️ Once the `this URL` checkbox is checked, the content will only be visible in the specific URL in which you saved your changes. Therefore, be careful with parameters and other URL components that may impact the content display — the more specific your URL is, i.e., the more it has parameters and query strings, the more restricted the new content will be.

  >ℹ️ The Site Editor applies content configurations according to the parameter hierarchy. Natively reproduce content for all pages under the same parent parameter by only creating content for the latter. Consider a given category URL, for example. By creating content for it, all product pages' URLs whose father parameter is the category will also be updated.

6. Still in the `Visibility` section, check whether the content will only be created in the URL to which you initially navigated or in the whole template — including the URL you are currently on and all others from the template. 
7. Save your changes.

## Editing content

1. Select the desired block whose content will be overwritten. You can select it using the list on your right corner or through the interface:

![seta-interface-en](//images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/7969df97b1d05d70fe0a555052cf4011/img-two-en.png)

2. The available content is from the current active one. Edit the fields with the new values or click on `Versions` to edit other contents' configurations. 
3. Save your changes.

  >⚠️ Contents derived from the source code, i.e., the Store Theme app, can not have their visibility updated by you through Site Editor. Regardless of your actions, they are always displayed per template and not URL. Contents that were manually created on Site Editor, in turn, can have their visibility changed to URL or template, according to your needs.

## Deleting and resetting content

1. Select the desired block whose content will be deleted or reset. You can select it using the list on your right corner or through the interface:

![seta-interface-en](//images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/7969df97b1d05d70fe0a555052cf4011/img-two-en.png)

2. Click on `Versions` on your top-right corner. 
3. Click on the desired content's kebab menu (three points). 
4. Click on `Delete` or `Reset` and confirm your action.

>⚠️ The actions `Delete` and `Reset` depend on the content type. Native contents, i.e., contents created in the source code, can not be deleted in the admin, only reset (if any update was performed using Site Editor). You can only delete contents that you manually created through the Site Editor.

## Setting active and inactive content

Every configuration performed on Site Editor natively overwrites the one set through the Store Theme app. 

In practice, this means that the newly created or updated content through the module is mostly classified as active automatically, depending on if a start and/or end date was predefined.

Notice that by clicking on a given content's kebab menu (three dots), the only available action is to delete or reset it — there is no button regarding its activation.

The successful path to define which content should be active and inactive is to delete or reset the current active content to let the first inactive inline become activated instead. 

>ℹ️ The line for inactive contents starts from the newest content to the oldest. Keep in mind that the contents created through Site Editor always prevail over what was defined in the Store Theme.


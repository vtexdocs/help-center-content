---
title: 'How to identify a page template'
id: 78Qm35VpIIeS0iQ0ik0Og4
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.453Z
updatedAt: 2023-03-29T18:10:51.105Z
publishedAt: 2023-03-29T18:10:51.105Z
firstPublishedAt: 2019-01-24T22:08:36.556Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_35
slugEN: how-to-identify-a-page-template
legacySlug: how-to-identify-a-page-template
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

This is a question very often asked by VTEX clients. The CMS is an old module (which is being completely renewed), and it was designed at a time when it was difficult to manipulate content. The new platform will be more flexible and intuitive, but in the meantime we will give here a step-by-step description of how you can identify the template of a specific page.

First we must briefly explain how the `{AccountName}.myvtex.com/admin/a` **Legacy CMS Portal** is structured.

The main function of the CMS is to allow you to manage the layout of your store. It is here that the Directories and Templates that will bring your e-commerce to life will be created.

Traditionally, in the world of technology, we organize pages and files inside folders, as they are in your computer.

VTEX uses the same principle. The directory (folder) is where all the information on that specific section of your website is kept.

We can create any number of templates but we have to specify in the directory which template is to be exhibited. Using the __Account__ page as an example:

![cms-template-pagina EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-to-identify-a-page-template_1.png)

Storefront > Layout > CMS Foulder > Sites and channels > Account Name > (/) Foulder > Account *(following the example)* > Click on the link with the red "ok" arrow.

In the above case, we can see that the *"Account"* Template is the active one on the Account page. To edit this file we have to find it in the list of Templates:

Storefront > Layout > CMS Foulder > HTML templates > *Account*

To make this more flexible, it is also possible to include subtemplates and any number of other resources inside a template, such as other native controls or one customized for you. The *"Header"* and *"Footer"*, for example, are default subtemplates that are identified in the Template of the Homepage. This makes it easier to edit a file and the same code can also be used in more than one template.

Now a real example: I want to know what page I am browsing on right now:

![página-loja EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-to-identify-a-page-template_2.png)

The domain itself often helps me identify it, but some stores may customize this, making this identification more difficult. If I am unsure if I am on a __Departament__ or __Category__ page, this may well be that the shelf has been customized. 

The best way is checking the Source Code for the page (Ctrl + U). VTEX stores will have an indication of the directory to which the page belongs.

![template-cms-exemplo en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-to-identify-a-page-template_3.png)

In the example above: `<!-- CommerceContext.Current.VirtualFolder.Name: @Produto@ -->`
Now that we know that it is a category page, we have to find out which template is active for Categoria. To this, you need only repeat the process described in the previous example.

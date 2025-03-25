---
title: "Setting up inStore's page and template"
id: o1J8pnO0lE44A8KeOoOkG
status: ARCHIVED
createdAt: 2018-03-06T22:27:06.192Z
updatedAt: 2020-08-20T18:55:38.251Z
publishedAt: 
firstPublishedAt: 2018-03-06T22:39:03.183Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: setting-up-instores-page-and-template
locale: en
legacySlug: setting-up-instores-page-and-template
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

In the __Portal__ module you can set up the __inStore's template__, the __customization file__ and the __page path__.

To do this, you need to enter the __Portal__ module in VTEX Admin, select the website and click on the __gear button__, which will redirect you to the settings.

*Click on the gear button to be directed to the configurations of the inStore store created.*

## inStore template configuration

- After clicking the gear button, click the __Code__ tab.
- On this tab, click the __New__ button, and then click __Template__.
- Type `instore` in the template name and click __Create__.
- In the created template, copy and paste the code below:

`---`

  `vtex_io:`  
  
  `app_name: checkout-instore`
    
  `file_path: index.html`
    
`---`

- Click __Save__.

## Setting up the checkout-instore-custom.js file

After creating the template, you need to create the `checkout-instore-custom.js` file.

- Still in the __Code__ tab, click the __New__ button.
- Click __File__.
- Type `checkout-instore-custom.js` in the file name and click __Create__.

This file must be saved empty. Once it's been saved, add the code below to the file and click Save.

    window.INSTORE_CONFIG = {
    
    topbarTitle: 'Instore QA'
    
    }

## inStore page setup

In order to allow access to inStore, a page needs to be created.

- Enter the __Pages__ tab.
- Click __New Page__.
- In the __Path__ field, fill in with `checkout/instore`.
- In the __Template__ field, fill in with `instore`.
- Check the option __Require HTTPS__.
- Click __Save__.

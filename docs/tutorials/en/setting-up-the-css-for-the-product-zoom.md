---
title: 'Setting up the CSS for the product zoom'
id: 3Ak5dP6A5iSIuAuMOWsGAG
status: DRAFT
createdAt: 2017-10-12T15:38:41.766Z
updatedAt: 2021-02-03T16:37:52.170Z
publishedAt: 
firstPublishedAt: 2017-10-12T15:42:39.994Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: setting-up-the-css-for-the-product-zoom
locale: en
legacySlug: setting-up-the-css-for-the-product-zoom
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

To set up the zoom, the first thing to do is to set up the CSS of the page to be opened with an approximate image of the product at the moment the user passes the mouse over the photos of the product. To do this, save a file with the CSS of the page and upload it to your store’s server.

Below we reproduce an excerpt of CSS that you can use as a starting point for this purpose. Copy and paste it into a text editor and save it as “zoom.css”, for example.

```
.zoomPad{position:relative;float:left;z-index:99;cursor:crosshair} .zoomPreload{-moz-opacity:.8;opacity:.8;filter:alpha(opacity=80);color:#333;font-size:12px;font-family:Tahoma;text-decoration:none;border:1px solid #CCC;background-color:#fff;padding:8px;text-align:center;background-image:url(/arquivos/ajax-loader.gif);background-repeat:no-repeat;background-position:center center;z-index:110;width:100%;height:100%;position:absolute;top:0;left:0;} .zoomPup{overflow:hidden;background-color:#FFF;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60);z-index:120;position:absolute;border:1px solid #CCC;z-index:101;cursor:crosshair} .zoomOverlay{position:absolute;left:0;top:0;background:#FFF;z-index:5000;width:100%;height:100%;display:none;z-index:101} .zoomWindow{position:absolute; left:445px !important; top:40px; background:#FFF; z-index:6000; height:auto; z-index:10000; z-index:110;} .zoomWrapper{position:relative;border:1px solid #999;z-index:110; width:531px !important; height:400px !important;} .zoomWrapperTitle{display:block;background:#999;color:#FFF;height:18px;line-height:18px;width:100%;overflow:hidden;text-align:center;font-size:10px;position:absolute;top:0;left:0;z-index:120;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60)} .zoomWrapperImage{display:block;position:relative;overflow:hidden;z-index:110; height:400px !important;} .zoomWrapperImage img{border:0;display:block;position:absolute;z-index:101} .zoomIframe{z-index:-1;filter:alpha(opacity=0);-moz-opacity:.8;opacity:.8;position:absolute;display:block}
```

Next we are going to send the saved CSS file to the server. To do this, click on the _Configurações&gt; Portal_ menu in Admin.

![](https://images.contentful.com/alneenqid6w5/3uLeF6wpvq4m4Wis48eeE8/4f79bf7753fb25309b670e9ea702a3ad/configuracao_zoom.gif)

In the window that opens on the right, click on **Adicionar**.

Then find the CSS file you saved and send it to the server, clicking on **Localizar** and then on **Salvar arquivo**.

Your file will then be listed in the window, as shown below:

![](https://images.contentful.com/alneenqid6w5/2pWBIqL3So2wm04oU8CyQ8/ab9f623fd28f15e2708cc3fcbecafe03/gerenciador_arq_css-560x373.jpg)

---
title: 'Configurar el CSS del zoom del producto'
id: 3Ak5dP6A5iSIuAuMOWsGAG
status: ARCHIVED
createdAt: 2017-10-12T15:38:41.766Z
updatedAt: 2021-02-03T16:37:52.170Z
publishedAt: 
firstPublishedAt: 2017-10-12T15:42:39.994Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: setting-up-the-css-for-the-product-zoom
locale: es
legacySlug: configurar-el-css-del-zoom-del-producto
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Para configurar el zoom, lo primero que hay que hacer es configurar el CSS de la página que se abrirá con una imagen aproximada del producto cuando el usuario pase el mouse sobre la foto del producto. Para eso, grabe un archivo con el CSS de la página y súbalo al servidor de su tienda.

Abajo reproducimos un trecho de CSS que puede usar como punto de partida para esta finalidad. Copie y pegue el contenido en un editor de texto y grábelo con el nombre “zoom.css”, por ejemplo.

```
.zoomPad{position:relative;float:left;z-index:99;cursor:crosshair} .zoomPreload{-moz-opacity:.8;opacity:.8;filter:alpha(opacity=80);color:#333;font-size:12px;font-family:Tahoma;text-decoration:none;border:1px solid #CCC;background-color:#fff;padding:8px;text-align:center;background-image:url(/arquivos/ajax-loader.gif);background-repeat:no-repeat;background-position:center center;z-index:110;width:100%;height:100%;position:absolute;top:0;left:0;} .zoomPup{overflow:hidden;background-color:#FFF;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60);z-index:120;position:absolute;border:1px solid #CCC;z-index:101;cursor:crosshair} .zoomOverlay{position:absolute;left:0;top:0;background:#FFF;z-index:5000;width:100%;height:100%;display:none;z-index:101} .zoomWindow{position:absolute; left:445px !important; top:40px; background:#FFF; z-index:6000; height:auto; z-index:10000; z-index:110;} .zoomWrapper{position:relative;border:1px solid #999;z-index:110; width:531px !important; height:400px !important;} .zoomWrapperTitle{display:block;background:#999;color:#FFF;height:18px;line-height:18px;width:100%;overflow:hidden;text-align:center;font-size:10px;position:absolute;top:0;left:0;z-index:120;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60)} .zoomWrapperImage{display:block;position:relative;overflow:hidden;z-index:110; height:400px !important;} .zoomWrapperImage img{border:0;display:block;position:absolute;z-index:101} .zoomIframe{z-index:-1;filter:alpha(opacity=0);-moz-opacity:.8;opacity:.8;position:absolute;display:block} 
```

Luego, vamos a enviar el archivo CSS grabado al servidor. Para eso, haga clic en el menú _Configurações__&gt; Portal_ dentro del Admin.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/configurar-el-css-del-zoom-del-producto_1.gif)

En la ventana que se despliega a la derecha, haga clic en el botón **Adicionar**.

Luego, localice el archivo CSS grabado arriba y envíelo al servidor haciendo clic en el botón **Localizar** y luego en el botón **Salvar arquivo**.

Así, su archivo figurará en la ventana, como en la imagen abajo:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Layout/configurar-el-css-del-zoom-del-producto_2.jpg)

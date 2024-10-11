---
title: 'Configurar el zoom'
id: frequentlyAskedQuestions_586
status: ARCHIVED
createdAt: 2019-01-24T20:45:54.975Z
updatedAt: 2022-09-08T16:44:37.881Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:42.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-set-up-the-zoom
locale: es
legacySlug: como-configurar-el-zoom
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Un recurso muy común en tiendas online es el zoom.

Esto permite ver detalles de una imagen cuando el cliente va pasando el mouse sobre las fotos de un producto. Vamos a ver cómo configurar e implementar esta funcionalidad.

![zoom-configurações](https://images.ctfassets.net/alneenqid6w5/2syaIncF2UeOw0YgOcOSIq/02d931bb81ef413ad248f21e518fbd24/zoom.png)

## Configurando el CSS

Lo primero que hay que hacer es configurar el CSS de la página que se abrirá con una imagen aproximada del producto cuando el usuario pase el mouse sobre la foto del producto. Para eso, grabe un archivo con el CSS de la página y súbalo al servidor de su tienda.

Abajo reproducimos un trecho de CSS que puede usar como punto de partida para esta finalidad. Copie y pegue el contenido en un editor de texto y grábelo con el nombre “zoom.css”, por ejemplo.

```
.zoomPad{position:relative;float:left;z-index:99;cursor:crosshair} .zoomPreload{-moz-opacity:.8;opacity:.8;filter:alpha(opacity=80);color:#333;font-size:12px;font-family:Tahoma;text-decoration:none;border:1px solid #CCC;background-color:#fff;padding:8px;text-align:center;background-image:url(/arquivos/ajax-loader.gif);background-repeat:no-repeat;background-position:center center;z-index:110;width:100%;height:100%;position:absolute;top:0;left:0;} .zoomPup{overflow:hidden;background-color:#FFF;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60);z-index:120;position:absolute;border:1px solid #CCC;z-index:101;cursor:crosshair} .zoomOverlay{position:absolute;left:0;top:0;background:#FFF;z-index:5000;width:100%;height:100%;display:none;z-index:101} .zoomWindow{position:absolute; left:445px !important; top:40px; background:#FFF; z-index:6000; height:auto; z-index:10000; z-index:110;} .zoomWrapper{position:relative;border:1px solid #999;z-index:110; width:531px !important; height:400px !important;} .zoomWrapperTitle{display:block;background:#999;color:#FFF;height:18px;line-height:18px;width:100%;overflow:hidden;text-align:center;font-size:10px;position:absolute;top:0;left:0;z-index:120;-moz-opacity:.6;opacity:.6;filter:alpha(opacity=60)} .zoomWrapperImage{display:block;position:relative;overflow:hidden;z-index:110; height:400px !important;} .zoomWrapperImage img{border:0;display:block;position:absolute;z-index:101} .zoomIframe{z-index:-1;filter:alpha(opacity=0);-moz-opacity:.8;opacity:.8;position:absolute;display:block} 
```

Luego, vamos a enviar el archivo CSS grabado al servidor. Para eso, haga clic en el módulo de *CMS* > **Layout** > Haga click en la carpeta **CMS** > **Files Manager** > Haga click en **.css** > En la ventana que se despliega a la derecha, haga clic en el botón **Add**.

![add-cms-.css ](//images.ctfassets.net/alneenqid6w5/ZXAryRqp4AAosaKM2qmQa/40058a1db81bde2207c60158c682b667/add_.css.png)

Luego, localice el archivo CSS grabado arriba y envíelo al servidor haciendo clic en el botón **Localizar** y luego en el botón **Salvar arquivo** ("salvar archivo").

Así, su archivo figurará en la ventana, como en la imagen arriba.

## Activar el zoom en el template de página

Una vez efectuados los procedimientos de arriba, hay que insertar el control que activa el zoom en el template de la página de producto. El proceso para eso también ocurre dentro del **CMS**, sólo que, ahora, localizando el template de página de producto que debe estar dentro de la carpeta **CMS** > **HTML Templates**. Una vez localizado el template, hay que colocar la referencia para el archivo .css que acabamos de subir. Para eso, debe incluir una tag como
`<link href="/archivos/zoom.css" rel="stylesheet" type="text/css">`
dentro del head template, como lo haríamos con cualquier otro archivo css. 

Ahora sólo hay que insertar `zoom="on"` en la tag del producto. Como se ve abajo:
`<vtex.cmc:ProductImage zoom="on">`

## Condiciones de funcionamiento

Usted debe también configurar el tamaño estándar de la imagen de zoom. Puede definir eso en el módulo de **CMS** > **Configuraciones** > **Tipos de archivos**. Como estándar, ese tipo de imagen de zoom ya viene configurada con 1000×1000 pixels.

![zoom-tiposdearquivos ES](//images.ctfassets.net/alneenqid6w5/4Re3BTK1hSSMOQcsWwQy8k/0eea4e4c0e26855df5a1e5346fff421f/zoom_tipo_de_archivos.png)

---
title: Configurar el template y la página del inStore
id: o1J8pnO0lE44A8KeOoOkG
status: DRAFT
createdAt: 2018-03-06T22:27:06.192Z
updatedAt: 2020-08-20T18:55:38.251Z
publishedAt: 
firstPublishedAt: 2018-03-06T22:39:03.183Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slug: configurar-el-template-y-la-pagina-del-instore
legacySlug: configurar-el-template-y-la-pagina-del-instore
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

En el módulo __Portal__ se realizan las configuraciones del __template del inStore__, del __archivo de customización__ y del __camino de la página__.

Para ello, es necesario acceder al módulo __Portal__ en el Admin de VTEX, seleccionar el web site y hacer clic en el __botón de engranaje__ para ser dirigido a la configuración.

*Haga clic en el botón de engranaje para ser dirigido a las configuraciones de la tienda inStore creada.*

## Configuración del template de inStore

- Después de hacer clic en el botón de engranaje, haga clic en la pestaña __Código__.
- En esta pestaña, haga clic en el botón __Nuevo__ y, a continuación, haga clic en __Template__.
- Introduzca `instore` en el nombre del template y haga clic en __Crear__.
- En el template creado, copie y pegue el siguiente código:

`---`

  `vtex_io:`  
  
  `app_name: checkout-instore`
    
  `file_path: index.html`
    
`---`

- Haga clic en __Guardar__.

## Configuración del archivo checkout-instore-custom.js

Después de crear el template, es necesario crear el archivo `checkout-instore-custom.js`.

- En la pestaña __Código__, haga clic en el botón __Nuevo__.
- Haga clic en __Archivo__.
- Escriba `checkout-instore-custom.js` en el nombre del archivo y haga clic en __Crear__.

Este archivo debe guardarse vacío. Después de guardarlo, incluya el código siguiente en el archivo y haga clic en __Guardar__.

    window.INSTORE_CONFIG = {
    
    topbarTitle: 'Instore QA'
    
    }

## Configuración de la página del inStore

Para que el inStore pueda ser accedido, es necesario crear una página.

- Entre en la pestaña __Páginas__.
- Haga clic en __Nueva Página__.
- En el campo __Ruta__, rellene con `checkout/instore`.
- En el campo __Template__, rellene con `instore`.
- Marque la opción __Requiere HTTPS__.
- Haga clic en __Guardar__.

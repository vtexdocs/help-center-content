---
title: 'Las traducciones del catálogo no se reflejan en el frontend'
id: 4c6Qzdn6NQfHhEN5U76WOi
status: PUBLISHED
createdAt: 2023-07-13T19:43:10.669Z
updatedAt: 2023-07-13T19:43:11.858Z
publishedAt: 2023-07-13T19:43:11.858Z
firstPublishedAt: 2023-07-13T19:43:11.858Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-translations-not-reflecting-on-the-frontend
locale: es
kiStatus: Backlog
internalReference: 861892
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando el comerciante realiza una acción en la aplicación Mensajes para que se traduzcan algunos datos del producto en el frontend, esta acción no se está reflejando realmente.


##

## Simulación



1. Realiza un cambio en la aplicación de mensajes;
2. 2. Compruebe en el indexInfo si el campo GenerateAndSaveTranslationsDocument está configurado como 'false'.
3. No vuelva a indexar el producto;
4. 4. Compruebe que el cambio no se ha reflejado en el sitio web traducido.



## Workaround


Para forzar la aparición de las traducciones es necesario reindexar el producto. Una de las siguientes acciones debe hacer el truco:

- Cambiar el nombre;
- Cambiar las palabras clave;
- Cambiar el texto;
- Cambiar la categoría;
- Cambiar la marca;
- Cambiar la bandera activa.






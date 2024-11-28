---
title: "Al exportar imágenes SKU para cuentas que empiezan por 'h','t' o 'p' se corta este carácter en las filas'URL de la imagen'."
id: 1IZdnE8IGwkBlbcFhjLrzn
status: PUBLISHED
createdAt: 2023-10-13T15:20:49.703Z
updatedAt: 2023-10-13T15:20:50.483Z
publishedAt: 2023-10-13T15:20:50.483Z
firstPublishedAt: 2023-10-13T15:20:50.483Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: exporting-sku-images-for-accounts-starting-with-ht-or-p-get-this-character-cut-in-the-image-url-rows
locale: es
kiStatus: Backlog
internalReference: 919199
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El informe de imágenes SKU, /admin/Site/ProdutoImagemExportacao.aspx, para nombres de cuenta que empiezan por "h", "t" o "p", como "testaccount", mostrará un carácter que falta en la hoja de exportación para la fila imageURL.



## Simulación


1 - para una cuenta que comienza con los caracteres iniciales mencionados, vaya a /admin/Site/ProdutoImagemExportacao.aspx y exporte una hoja para cualquier sku que tenga por lo menos 1 imagen.
2 - abra la hoja exportada y compruebe la columna "UrlImagem": será sin el carácter inicial

Por ejemplo, si la cuenta se llama "testaccount":

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/al-exportar-imagenes-sku-para-cuentas-que-empiezan-por-ht-o-p-se-corta-este-caracter-en-las-filas-url-de-la-imagen_1.png)



## Workaround


Cree una subcuenta que empiece por otro carácter (por ejemplo, "mytestaccount") y acceda a la interfaz de usuario de exportación utilizando esta subcuenta. La exportación mostrará entonces la cadena URL completa sin ningún recorte incorrecto.






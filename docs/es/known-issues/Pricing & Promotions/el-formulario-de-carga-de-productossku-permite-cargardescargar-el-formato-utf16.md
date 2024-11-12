---
title: 'El formulario de carga de productos/SKU permite cargar/descargar el formato UTF-16'
id: 3NSxmGXvgFKHd2C4v2EwWV
status: PUBLISHED
createdAt: 2022-06-08T20:04:18.508Z
updatedAt: 2024-02-16T20:26:55.864Z
publishedAt: 2024-02-16T20:26:55.864Z
firstPublishedAt: 2022-06-08T20:04:19.062Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: productsku-upload-form-allows-utf16-format-uploaddownload
locale: es
kiStatus: No Fix
internalReference: 493402
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, si un usuario intenta cargar una lista de SKU en el formulario de promoción habitual utilizando un archivo .txt, si el archivo cargado está en el formato de codificación UTF-16, también lo estará el archivo descargado después.






## Simulación


1) Cree una promoción regular y en la sección #2 "¿A qué **artículos** se aplicará esta promoción?", cargue una lista de SKU válida con formato UTF-16 en los archivos SKU o Producto

 ![](https://vtexhelp.zendesk.com/attachments/token/v2q7rCm249CNqnRQjXxKRdjnx/?name=inline-242501829.png)

2) Guarde la promoción

3) Abrirla de nuevo e intentar descargar el archivo dado, su formato de codificación seguirá siendo UTF-16, lo que a menudo puede causar confusión entre otros operadores de la tienda.






## Workaround


Introduzca manualmente los SKUs y/o asegúrese de que el archivo cargado es UTF-8


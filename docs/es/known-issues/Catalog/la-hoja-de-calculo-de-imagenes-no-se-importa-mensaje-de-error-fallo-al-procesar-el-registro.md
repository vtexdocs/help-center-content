---
title: 'La hoja de cálculo de imágenes no se importa. Mensaje de error: Fallo al procesar el registro.'
id: 4HKn7B4b4Au5NFfg87Zu6T
status: PUBLISHED
createdAt: 2022-11-04T12:17:16.480Z
updatedAt: 2022-11-25T21:41:55.540Z
publishedAt: 2022-11-25T21:41:55.540Z
firstPublishedAt: 2022-11-04T12:17:17.206Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: image-spreadsheet-not-importing-error-message-fail-to-process-record
locale: es
kiStatus: Backlog
internalReference: 691803
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



A veces, al intentar importar una hoja de cálculo de imágenes con URLs de vteximg.com.br o vtexassets.com que están configuradas como "https://' en lugar de "http://" la importación falla. El mensaje de error es:

"Fallo al procesar el registro. Asegúrese de que los datos de su hoja de cálculo son coherentes y vuelva a intentarlo. Detalles del error: Se ha producido un error al enviar la solicitud".
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Catalog/la-hoja-de-calculo-de-imagenes-no-se-importa-mensaje-de-error-fallo-al-procesar-el-registro_1.png)



## Simulación



1. Intente importar una hoja de cálculo utilizando URLs de vteximg.com.br o vtexassets.com que contengan https://...
2. Compruebe que la importación falla
3. Intente importar la misma hoja de cálculo utilizando ahora http://
4. Compruebe que la importación funciona.

PD: Si en el paso 4 la importación sigue fallando, comprueba si la imagen está configurada como .jpg y vuelve a intentarlo.



## Workaround


Utilice las URL con http:// cuando las imágenes procedan de vteximg.com.br o vtexassets.com


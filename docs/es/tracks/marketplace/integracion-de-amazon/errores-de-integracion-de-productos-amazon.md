---
title: 'Errores de integración de productos Amazon'
id: 4HsdzgoYxgQNtCBCRttKDA
status: PUBLISHED
createdAt: 2023-06-29T19:08:38.476Z
updatedAt: 2023-09-26T15:02:03.011Z
publishedAt: 2023-09-26T15:02:03.011Z
firstPublishedAt: 2023-06-29T22:27:35.313Z
contentType: trackArticle
productTeam: Channels
slugEN: product-integration-errors-with-amazon
locale: es
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugEN: errores-de-integracion-de-productos-amazon
order: 8
---

Hay varias razones por las que un producto entre Amazon y una tienda VTEX puede no integrarse, y para cada una de ellas hay una notificación que indica la naturaleza del error. Puedes ver el mensaje de error en el Admin VTEX en el módulo **Marketplace > Conexiones > Productos**, o también puedes acceder a él mediante la barra de búsqueda. Al acceder a la página, filtra por el marketplace Amazon y haz clic en el producto para ver el mensaje.

Después de resolver un error, debes volver a procesar manualmente la integración del stock del SKU en cuestión. Puedes hacerlo en el mismo lugar donde accediste al error al hacer clic en **Acciones > Reprocesar**.

En este artículo, describimos los siguientes errores:

- [Errores en la plantilla de mapeo de categorías y atributos de Amazon](#Errores-en-la-plantilla-de-mapeo-de-categorias-y-atributos-de-Amazon)
- [Errores de falta de atributos obligatorios en Amazon](#Errores-de-falta-de-atributos-obligatorios-en-Amazon)
- [Errores de divergencia entre los catálogos de VTEX y Amazon (match de anuncios)](#Errores-de-divergencia-entre-los-catálogos-de-VTEX-y-Amazon)
- [Errores de token y permisos de Amazon](#Errores-de-token-y-permisos-de-Amazon)
- [Errores de configuración en la integración de Amazon](#Errores-de-configuracion-en-la-integracion-de-Amazon)
- [Errores de envío de la categoría global VTEX](#Errores-de-envio-de-la-categoria-global-VTEX)
- [Aviso de SKU inactivo](#Aviso-de-SKU-inactivo)

## Errores en la plantilla de mapeo de categorías y atributos de Amazon

- **La categoría global VTEX del SKU no se rellenó en la plantilla de mapeo o se rellenó incorrectamente**

  Este error se produce cuando la [categoría global](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) no está configurada o está configurada incorrectamente. Amazon utiliza la categoría global registrada en VTEX para realizar el mapeo de los productos. Por lo tanto, es importante que la equivalencia entre la categoría global de VTEX y las categorías generales de Amazon se realice correctamente.

  Para resolver este error, [configura la categoría global](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) de tu producto.

- **No se encontró la especificación (X) rellenada en la plantilla de mapeo en la especificación del producto o del SKU en tu catálogo VTEX**

  Este error se produce cuando se rellena la plantilla con una especificación que no existe en el catálogo VTEX. Para resolver este error, debes registrar una[ especificación de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) o [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr). Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

- **El valor (X) en la plantilla de mapeo no es un valor de atributo/especificación aceptado por Amazon**

  Este error se produce cuando la especificación X no es aceptada por Amazon. Debes[ registrar una especificación](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) aceptada por Amazon. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

- **El ID de categoría global VTEX del producto no se encontró en la plantilla de mapeo**

  Este error se produce cuando la[ categoría global](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) no está configurada o está configurada incorrectamente. Para resolver este error,[ configura la categoría global](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#configuracao-da-categoria-global) de tu producto.

- **El valor en la plantilla de mapeo para la especificación "Material" o "Department" no es un valor de atributo/especificación aceptado por Amazon**

  En ambos errores, la [categoría global VTEX](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) del producto seleccionado por el seller requiere el registro obligatorio de los atributos **Department** o **Material** en el producto y que se rellenen en la [plantilla de mapeo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). [Registra](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) el atributo en el producto y rellena la plantilla según el ejemplo a continuación:

|**CategoryID**|**VariationTheme**|**Type**|**VTEXSpecification**|**AmazonSpecification**|**VTEXValue**|**AmazonValue**|
| :- | :- | :- | :- | :- | :- | :- |
|3||Information|Género|Department|Femenino|Female|

- **No se cargó la plantilla de mapeo de categorías y atributos**

  Este error se produce porque no se cargó la [plantilla de mapeo de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#4-planilha-de-mapeamento). Debes[ rellenar](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) la plantilla de mapeo de Amazon y [cargar](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#6-upload-da-planilha-de-mapeamento) la plantilla después que esté rellenada.

- **El valor de la especificación (X) en la plantilla no existe en la especificación del producto en VTEX**

  En el error anterior, el atributo mencionado no está registrado en el SKU del catálogo VTEX. Debes [registrar el atributo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) y volver a realizar el [mapeo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) del producto enviado.

- **La unidad de edad mínima en la plantilla de mapeo no concuerda con la esperada por Amazon**

  La unidad de edad mínima no concuerda con la solicitada por Amazon. Amazon acepta valores en años o meses. Vuelve a realizar el [mapeo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) con los valores aceptados por el marketplace.

- **Amazon no acepta las variaciones de SKU de la plantilla de mapeo**

  Este error se produce cuando se rellena la columna **VariationTheme** de la plantilla de mapeo de Amazon con un valor que Amazon no acepta. [Verifica los valores aceptados](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#5-preenchimento-da-planilha-de-mapeamento) e ingresa un valor válido en la plantilla de mapeo.

- **El valor en la plantilla de mapeo del atributo "SizeMap" no es un atributo/especificación aceptado por Amazon**

  Rellenaste un valor incorrecto en el atributo SizeMap. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

- **El valor en la plantilla de mapeo para "TargetGender" no es un atributo/especificación aceptado por Amazon**

  Rellenaste un valor incorrecto en la especificación TargetGender. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

- **Los atributos de color y tamaño en este SKU no se encontraron en la plantilla de mapeo**

  No rellenaste el valor de las especificaciones Color y Tamaño, que son obligatorias para la categoría del producto que deseas enviar. Consulta la [plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) para ver los valores aceptados por Amazon y rellena un valor válido en la plantilla de mapeo.

- **El atributo "author" no está registrado en el SKU o no consta en la plantilla de mapeo**

  No registraste el atributo obligatorio Author para el producto que deseas enviar. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon), consulta la pestaña VALORES VÁLIDOS y [registra una especificación de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) para ese atributo.

- **El valor en la plantilla de mapeo del atributo "Size" no es un atributo/especificación aceptado por Amazon**

  No rellenaste el valor de la especificación Size correctamente. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

- **El valor en la plantilla de mapeo del atributo "Color" no es un atributo/especificación aceptado por Amazon**

  No rellenaste el valor de la especificación Color correctamente. Para ver los valores aceptados por Amazon, abre la [Plantilla de atributos obligatorios de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#2-planilha-de-atributos-obrigatorios-da-amazon) y consulta la pestaña VALORES VÁLIDOS.

## Errores de falta de atributos obligatorios en Amazon

- **El atributo Color no está registrado en el SKU o no consta en la plantilla de mapeo**

  El atributo Color es obligatorio para la categoría del producto que estás enviando a Amazon y no está registrado en el SKU o no fue mapeado en la plantilla de mapeo.
Debes registrar una [especificación de SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) para el atributo Color y/o volver a realizar el [mapeo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD) del producto enviado.

- **La especificación de producto "TargetGender" es obligatoria para integrar el producto con Amazon**

  La especificación de producto TargetGender es obligatoria para la categoría del producto que estás enviando. Dependiendo de la categoría, Amazon puede llamarla Department o TargetGender. [Registra la especificación de producto](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) TargetGender y vuelve a realizar el [mapeo](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD).

## Errores de divergencia entre los catálogos de VTEX y Amazon (match de anuncios)

- **El SKU ya existe en el catálogo de Amazon y se podría realizar el proceso de matching del mismo entre VTEX y Amazon. Sin embargo, el valor del atributo (X) de este SKU en VTEX es distinto del valor que tiene registrado en Amazon. En VTEX es (X) y en Amazon es (Y).**

  Este error se produce cuando hay divergencias de valores del atributo (datos de las características del SKU) entre el catálogo de Amazon y el de VTEX. Para resolver este error, debes [modificar el valor del atributo](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/6UjLHdAT5YLuflki10SXLr) en la plataforma VTEX para que sea equivalente al [valor del atributo en la plataforma Amazon](https://drive.google.com/uc?export=download&id=1UkcrfPopMg-cnrSDOF0qt51NRIXgzi0r).

## Errores de token y permisos de Amazon

- **El token rellenado en el formulario de configuración de Amazon en VTEX está expirado o no tiene permiso de acceso en este flujo**

  Este error se produce porque el número de serie del **token de autorización de MWS** expiró. Ponte en contacto con Amazon para resolver este problema y vuelve a realizar la [configuración de la integración de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan).

- **Tu cuenta no tiene permiso de Amazon MWS**

  Te falta permiso en Amazon MWS. Para resolver este error, debes ponerte en contacto con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fsellercentral.amazon.com%2Fhome&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_na_amazon_v2&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=sc_na_amazon_v2&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.Tu8_jE6QC2G-_ocUOfrmbQ5Yzla8DIU8mDM1MWECzOdygOPMJaQPUQ.j9BRXu7ZWuDPBs9t.yNk43-MFTIkvgWYkVs9Oef8u2lDFWlUflCequoOgISLz9wNQ9nCwrQuwuUXxK77ev5JB_00vp8K4iwOGijHX26VL9xaXilgIT8oZOBuq_DCSFLcSvFyne_WjZsRmU2UeE4bKXSYuQphH4Z50b7Q09jYpP5XuN73UUwv8I70m10qNv_GFRCs71bbqTxfteEeNQZ-ot9PZ8Q.oTZEuYQOUvTkfnLq8JaAFQ). Puedes ver más información sobre cuentas en la documentación de Amazon [Administrar la cuenta de AWS](https://docs.aws.amazon.com/es_es/accounts/latest/reference/managing-accounts.html). Para ver más información sobre la política de seguridad en las cuentas de sellers de Amazon, consulta [Seguridad en AWS - Administración de cuentas](https://docs.aws.amazon.com/es_es/accounts/latest/reference/security.html).

## Errores de configuración en la integración de Amazon

- **El valor que aparece en el campo "Nombre para el tipo de envío" en la configuración de la integración de Amazon en VTEX no es igual al que aparece en Amazon Seller Central**

  Este error se produce cuando el valor registrado en el campo **Nombre para el tipo de envío** en la etapa [Configurar la integración de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan) en VTEX difiere del valor registrado en Amazon Seller Central. Consulta la documentación de Amazon Seller Central para aclarar dudas y corregir el problema.

- **El valor que aparece en el campo "SELLER ID" en la configuración de la integración de Amazon en VTEX no es el mismo que aparece en Amazon Seller Central**

  Este error se produce cuando el valor registrado en el campo **Seller ID** en la etapa[ Configurar la integración de Amazon](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan) en VTEX difiere del valor registrado en Amazon Seller Central. En efecto, el valor de **Seller ID** que se solicita en la configuración de la integración es el que aparece en Amazon. [Consulta la documentación de Amazon Seller Portal](https://sellercentral.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fsellercentral.amazon.com%2Fhome&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_na_amazon_v2&openid.mode=checkid_setup&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=sc_na_amazon_v2&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.jk7RCgyM4a8-ticE3kjb7XXngMJKpyjxxbhlZjiNAG7CbVI5ei2sIQ.IEq--_YXM1lwf15N.c4ZcixdNfbrDYajjTiYzTsIanK5hS2nSY8tVRiAbP9S7o6nmfzHm6QDkOlQ0JVbRMf3qohVVI7tmQWoIwyegOGADsdg5TQbHeAbrhP4mQ3mTofsFSqmf63LwJ4tYq4g_Fu86FOGH-zZAcsDTqZIE8wgQwXfua3zwGvVFFCN_Z_ME1JWimOiwGDqd_ZjKbVICSkhufmAq.kKdpxcDBuoYRqKymaONbwA) para aclarar dudas y corregir el problema.

## Errores de envío de la categoría global VTEX

- **La categoría global VTEX (X) de este SKU no está configurada correctamente en la integración**

  Este error se produce cuando la [categoría global](/es/docs/tutorials/configurando-a-categoria-global) seleccionada en el mapeo no existe en Amazon. Comprueba el [mapeo de categoría global](/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD#categoria-global) del producto para asegurarte de que la categoría seleccionada está asociada a Amazon.

## Aviso de SKU inactivo

- **El SKU que intentaste enviar está inactivo en VTEX**

El [SKU](/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) no está activo en VTEX. Solo se pueden integrar SKU activos. En algunos caos, este error se genera por [colecciones](/es/docs/tutorials/como-eliminar-una-coleccion) antiguas asociadas a la política comercial de Amazon que contiene SKU inactivos.
Verifica el status del SKU en el Admin desde el módulo *PRODUCTOS > Catálogo > Productos y SKUs* y, de ser necesario, [activa el SKU](/es/docs/tutorials/activar-skus-en-massa).


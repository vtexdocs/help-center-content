---
title: 'Errores de integración de stock con Amazon'
id: 3t05cXK2vDbKCA6rifMMWj
status: PUBLISHED
createdAt: 2021-10-28T13:54:04.797Z
updatedAt: 2026-10-07T22:20:00.000Z
publishedAt: 2023-03-29T14:38:55.490Z
firstPublishedAt: 2021-10-28T18:41:30.731Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: amazon-inventory-integration-errors
legacySlug: errores-de-integracion-de-stock-con-amazon
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Logística
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando se produce un error de integración de _stock_ entre **Amazon** y una tienda, se informa un mensaje de error para cada SKU. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Stock** o ingresa **Stock** en la barra de búsqueda.

Los errores más comunes de integración de _stock_ con Amazon son:

- **ID de seller inválido**
- **SKU fuera del catálogo**
- **Marca no aprobada**
- **Uso indebido del campo Marca**
- **Cuenta no elegible**
- **Acceso a feeds denegado**
- **Token inválido**

## Solución

Para corregir los errores de integración de _stock_ con Amazon, considera las opciones presentadas en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Invalid seller id**|El seller ID utilizado en la configuración de la integración se considera inválido.|Confirma el código correcto con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com). En el Admin VTEX, accede a **Marketplace > Conexiones > Configuración**, haz clic en el ícono de engranaje de la tarjeta de Amazon, elige **Editar configuración**, completa el campo Amazon Seller Id y haz clic en **Guardar configuración**. Después, reprocesa el SKU en **Marketplace > Conexiones > Stock**, haciendo clic en **Acciones > Reprocesar**.|
|**This SKU is not in the Amazon catalog. If you are receiving this message after submitting a multi-marketplace inventory file and the designated marketplace for this error is different than the marketplace in which you submitted your file, this error is an indication that the Detail page for this item does not exist in the designated marketplace. Amazon is attempting to create the Detail Page for this item on your behalf. If successful, your listing will be created in the designated marketplace within 48 hours.**|El SKU no se exportó al catálogo de Amazon, en general porque la plantilla de mapeo no se completó correctamente.|Vuelve a exportar la categoría del SKU, como se describe en [Envío de productos a Amazon](/es/docs/tracks/envio-de-productos-a-amazon), y [actualiza el stock](/es/docs/tutorials/actualization-de-la-cantidad-de-items-en-stock). La actualización se refleja automáticamente en Amazon, sin reprocesamiento manual.|
|**Amazon must approve your brand before you can use it to list products. Brands should be registered through Brand Registry, but if your brand is not eligible for Brand Registry, you can obtain an exception by contacting Seller Support and mentioning error code 5665.**|Amazon solo publica el producto después de aprobar su marca.|Registra la marca en el [Registro de marcas de Amazon](https://brandservices.amazon.es/brandregistry/eligibility). Si la marca no es elegible según la [Política de nombres de marcas de Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US), solicita una excepción a través de [Amazon Seller Central](https://sellercentral.amazon.com/) e informa el código de error 5665 junto con los datos que pide la política.|
|**We have identified you may be misusing the Brand field and not complying with the Brand Name Policy. If you believe you are complying with our policy, please contact Seller Support and mention error code 5661.**|La marca del producto se consideró en desacuerdo con la política de nombres de marca de Amazon.|Revisa la [Política de nombres de marcas de Amazon](https://sellercentral.amazon.com.br/gp/help/external/G2N3GKE5SGSHWYRZ?language=en_US). Si el origen del problema no queda claro, contacta a Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/) e informa el código de error 5661 y los demás datos que indica la política.|
|**The seller does not have an eligible Amazon account to call Amazon MWS.**|La cuenta de Amazon se consideró no elegible por datos de registro incorrectos, un problema de token o una infracción de la política del marketplace.|Contacta a Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/). Consulta también la [gestión de cuentas de AWS](https://docs.aws.amazon.com/es_es/accounts/latest/reference/managing-accounts.html) y [Seguridad en la Gestión de Cuentas de AWS](https://docs.aws.amazon.com/es_es/accounts/latest/reference/security.html).|
|**Access to Feeds. SubmitFeed is denied.**<br>**Feed rejected**|El envío del feed fue denegado por un campo de registro pendiente o incorrecto, o porque el token de la integración caducó o se consideró sospechoso.|Contacta a Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/). Obtén más información sobre [Data feeds](https://docs.aws.amazon.com/es_es/marketplace/latest/userguide/data-feed.html).|
|**AuthToken is not valid for SellerId and AWSAccountId**<br>**Access denied**|El token se consideró inválido, por ejemplo porque caducó o hubo sospecha de amenaza a la seguridad.|Trata el token directamente con Amazon a través de [Amazon Seller Central](https://sellercentral.amazon.com/).|

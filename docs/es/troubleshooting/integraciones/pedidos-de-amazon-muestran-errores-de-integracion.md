---
title: 'Pedidos de Amazon muestran errores de integración'
id: 1ukX1Gw4fVUs62IIpGgsZF
status: PUBLISHED
createdAt: 2024-09-12T16:05:45.774Z
updatedAt: 2024-11-08T18:29:42.178Z
publishedAt: 2024-11-08T18:29:42.178Z
firstPublishedAt: 2024-09-12T16:24:22.283Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: integration-errors-in-amazon-orders
legacySlug: pedidos-de-amazon-muestran-errores-de-integracion
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
tags:
  - Pedidos
  - Integración
  - Marketplace
  - Amazon
---

Cuando se produce un error de integración en pedidos entre **Amazon** y una tienda, se informa un mensaje de error en cada pedido. Para comprobar si un pedido contiene errores de integración, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos**o ingresa **Pedidos** en la barra de búsqueda.

Los errores más comunes en pedidos de Amazon son:

**Error de SLA (acuerdo de nivel de servicio)**
**SKU sin stock**
**SKU inactivo**
**SKU sin política comercial vinculada**
**SKU no existe**
**Error de comunicación con el catálogo**

## Solución

Para corregir los errores de integración en los pedidos de Amazon, considera las opciones presentadas en la siguiente tabla:

|**Mensaje de error**|**Significado**|**Acción requerida**|
|:---:|:---:|:---|
|**No available sla to deliver this order**|Algún factor está impidiendo la entrega del pedido al cliente final. |Para identificar el origen del error y corregirlo, consulta [Errores de SLA en la integración de pedidos de marketplace](/es/tutorial/erros-de-sla-na-integracao-de-pedidos-de-marketplace--X8lSfxT44OyxkxwvnRk1X).|
|**Order with SKU out of stock**|Hay un problema con el stock vinculado al marketplace.|Para corregir el error, consulta [Errores de falta de stock en la integración de pedidos de marketplace](/es/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP) para entender el error de falta de stock asociado al pedido; después, sigue los pasos indicados en la documentación.
|**SKU inactivo**|Al menos un SKU del pedido no está activo en el catálogo de la tienda.|Verifica el status del SKU en el Admin VTEX, en **Catálogo > Productos y SKUs,** y activa un único SKU siguiendo las instrucciones del tutorial Rellenar campos de registro de SKU, o activa varios SKUs como se describe en [Activar SKUs en masa](/es/tutorial/ativar-skus-em-massa--4uMZATlSc0kEYiewWKSwEY). |
|**SKU sin política comercial vinculada**|Los SKUs del pedido están activos, pero no están vinculados a una [Política comercial](/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) utilizada para Amazon.|Para corregir el error, asocia el SKU a una política comercial vinculada a Amazon siguiendo las instrucciones en [Asociación de SKU a una política comercial](/es/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb?utm_term=&utm_campaign=BRA_pmax_2023&utm_source=adwords&utm_medium=ppc&hsa_acc=9663921675&hsa_cam=20809358286&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw28W2BhC7ARIsAPerrcKZrjhAb2fx1MFD5mzn0ETlaDjKPhiq-ehLB18CJNOqvdhNtjo-4uAaAj2CEALw_wcB) |
|**SKU in order don't belong to a VTEX Store, sku id it's not a integer**|Al menos uno de los SKUs del pedido no está registrado en el catálogo de la tienda, o la información proporcionada por Amazon en el pedido es incorrecta.|Si el SKU no existe en el catálogo, es necesario cancelar el pedido. Si el SKU está en el catálogo, debes ponerte en contacto con Amazon para que corrija el error.|
|**Se produjo un error de comunicación con el sistema de catálogo - Acceso no autorizado del seller x a política comercial y**|El sitio web asociado a la cuenta principal del sitio web de la tienda no tiene seleccionada la política comercial de Amazon.  |Para corregir el error, sigue los pasos en [Vincular una tienda a una estructura de carpetas en CMS (binding)](/es/tutorial/vincular-um-account-name-a-um-website-binding) y selecciona la política comercial de Amazon.|


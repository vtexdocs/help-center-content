---
title: 'Errores de integración de pedidos de Dafiti'
id: 4t8AIA9R671jGHY8MOwHhS
status: PUBLISHED
createdAt: 2021-09-08T14:37:11.608Z
updatedAt: 2026-10-07T22:36:00.000Z
publishedAt: 2023-03-29T23:37:09.005Z
firstPublishedAt: 2021-09-08T14:56:15.029Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-dafiti-integration
legacySlug: errores-de-integracion-de-pedidos-de-dafiti
locale: es
subcategoryId: 2LcLWCYaEm5qPmOuYUiKIS
domainFilters:
  - Marketplace
  - Pedidos
  - Integraciones
symptomFilters:
  - Error de sincronización
  - Configuración incorrecta
---

Cuando se produce un error de integración de pedidos entre **Dafiti** y una tienda, se informa un mensaje de error en cada pedido. Para comprobar los errores, en el Admin VTEX accede a **Marketplace > Conexiones > Pedidos** o ingresa **Pedidos** en la barra de búsqueda.

Los errores más comunes de integración de pedidos de Dafiti son:

- **Producto creado manualmente**
- **Falta de stock**
- **Precio sin vigencia**
- **Envío FOB o Milk Run**
- **Variación inválida**
- **Pedido fuera del status Pendiente**
- **FOB habilitado sin registro**

## Solución

Para corregir los errores de integración de pedidos de Dafiti, considera las opciones presentadas en la siguiente tabla:

|Mensaje de error|Significado|Acción requerida|
|---|---|---|
|**Não é possível integrar um pedido composto por produtos criados manualmente**|El ítem se registró directamente en Dafiti, por lo que VTEX no reconoce el ID del SKU.|Elimina el registro del ítem en Dafiti, confirma que el [SKU está registrado](/es/docs/tracks/registrar-sku) en VTEX y reprocesa el pedido en **Marketplace > Conexiones > Pedidos**, haciendo clic en **Acciones > Reprocesar**.|
|**No fue posible integrar el pedido, porque uno o más items no tienen suficiente inventario para el canal de ventas de Marketplace**<br>**No fue posible integrar el pedido, porque uno o más items no están disponibles**|Hay falta o insuficiencia de stock en uno o más ítems.|Consulta [Errores de falta de stock en la integración de pedidos de marketplace](/es/troubleshooting/errores-de-falta-de-stock-en-la-integracion-de-pedidos-de-marketplace).|
|**Não foi possível integrar o pedido, pois um ou mais itens não possui preço vigente para o canal de vendas configurado**|El precio del SKU expiró o tiene un error de registro.|[Cambia el precio del SKU](/es/docs/tutorials/alteracion-de-precio-de-sku) y reprocesa el pedido en **Marketplace > Conexiones > Pedidos**.|
|**This api call "SetStatusToShipped" is currently not allowed**|La configuración logística de Dafiti está marcada como sí, pero el seller no registró envío FOB ni Milk Run.|Contacta a Dafiti para cambiar esa configuración de sí a no.|
|**Valor de variação inválido**|La plantilla de mapeo de categorías y atributos tiene uno o más valores incorrectos.|Corrige el mapeo como se indica en [Envío de los productos a Dafiti](/es/docs/tracks/envio-de-los-productos-a-dafiti).|
|**Pedido não integrado pois o mesmo não está pendente**<br>**No es posible integrar una orden que ya pasó del estado Pendiente en Dafiti**|El status se cambió en el portal de Dafiti. El pedido solo se integra en el status Pending.|No hay corrección después del cambio de status. Procesa el pedido desde el Admin VTEX, no desde la plataforma de Dafiti.|
|**OMS Api Error Occurred**|El campo FOB está habilitado en el conector, pero ese envío no está registrado en Dafiti.|En el Admin VTEX, accede a **Marketplace > Conexiones > Integraciones**, edita la configuración de Dafiti, marca **FOB** como **No** y guarda. Después, solicita a Dafiti la habilitación del envío FOB.|

---
title: 'Como configurar Suscripciones'
id: 5BprgE9RwKPcfBMYoaWZu4
status: DRAFT
createdAt: 2019-01-28T19:22:39.047Z
updatedAt: 2021-04-30T14:37:54.626Z
publishedAt: 
firstPublishedAt: 2019-01-28T19:23:44.020Z
contentType: tutorial
productTeam: Post-purchase
author: authors_61
slug: configurar-recurrencia-de-pedidos
legacySlug: configurar-recurrencia-de-pedidos
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

La venta recurrente es una excelente oportunidad para incrementar los ingresos de la tienda por medio de la fidelización del cliente, permitiendo la creación de pedidos automáticos programados de acordo a la necesidad de consumo.

El objetivo de este artículo es explicar, paso a paso, cómo realizar la configuración del sistema de recurrencia.

Además de la forma de pago __Tarjeta de Crédito__, su tienda necesita solamente tener un "adjunto especial" para soportar los pedidos de SKUs recurrentes.

## Cómo configurar el Adjunto

1. Acceda __Catalog__
2. Haga clic en __Adjuntos__
3. Haga clic en __Nuevo anexo__
4. Registre el anexo __Recurrencia__
5. Marque la flag de __Status__ y guarde el anexo
6. Después de crear, en la misma página, haga clic en el botón __Editar__ y edite el anexo con el __Nombre de la clave__ = "Periodo". Después defina los __Valores Permitidos__ de acordo a las frecuencias disponibles

## Valores disponibles

Los pedidos recurrentes están disponibles en valores que pueden ser:

- Diaria
- Diario
- Semanal
- Quincenal
- Mensual
- Bimensual
- Trimestral
- Semestral
- Anual

## Cómo habilitar un producto para recurrencia

1. Aún en **Catálogo**, acceda a la opción __Productos y SKUs__
2. Seleccione el **SKU** que quiere habilitar para recurrencia
3. Acceda a la pestaña **Configuraciones avanzadas**
4. Asocie el **anexo de recurrencia** y haga clic en **Guardar.** 

## Cómo generar el pedido recurrente

Al adicionar un producto habilitado para recurrencia en el checkout, el cliente selecciona la frecuencia de los ítems que desea recibir de modo recurrente y cierra el pedido normalmente, seleccionando el medio de pago **Tarjeta de Crédito**.

_La recurrencia sólo se activará cuando el medio de pago sea Tarjeta de Crédito._

Tras el periodo de tiempo elegido, el sistema genera automáticamente el pedido. Tras la aprobación del pago, la recurrencia será activada.

_El comerciante deberá ponerse en contacto con el adquirente para habilitar pagos recurrentes._

## Medio de pago del pedido recurrente

El pedido con recurrencia debe pagarse con tarjeta de crédito.
Es posible utilizar __cualquier gateway de pago que acepte transacionar sin el CVV__. Póngase en contacto con su gateway de pagos para asegurarse de que el puede realizar transacciones sin CVV.

[Entienda mejor cómo configurar un gateway de pago en su tienda.](/es/tutorial/pci-gateway-vision-general/)

## Emails transaccionales del pedido recurrente

En **Centro de Mensajes** es posible configurar los emails relacionados con la recurrencia.

| Recurrencia – New   | Cuando una recurrencia es creada   |
| ---------- | ---------- |
| Recurrencia – Next Order    | Recordatorio del proximo pedido    |
| Recurrencia – Cancel	    | Cuando una recurrencia es cancelada (removida)    |
| Recurrencia – Error	    | Cuando ocurre algún error en el cierre del pedido\*    |
| Recurrencia – Stop	    | Cuando una recurrencia es “congelada”    |
| Recurrencia – Approved	    | Avisa que hay que revisar la captura de un pago    |
| Recurrencia – Edit	    | Cuando una recurrencia es modificada (ítem adicionado/removido)    |
| Recurrencia – Item Unavailable	    | Cuando un ítem no está disponible en el momento en el que se genera el pedido recurrente    |

*El pedido de este ciclo no es creado, sin embargo la recurrencia no es cancelada.

[Entienda mejor cómo configurar los templates de emails transaccionales en la plataforma VTEX.](/es/tutorial/como-funciona-el-message-center/)

## Cómo visualizar las suscripciones para recurrencia de producto

Las suscripciones contratadas quedan disponibles en **Gestión de pedidos**, en la pestaña **Suscripciones**.

Se generará la recurrencia tras la confirmación de pago del pedido con el producto recurrente.

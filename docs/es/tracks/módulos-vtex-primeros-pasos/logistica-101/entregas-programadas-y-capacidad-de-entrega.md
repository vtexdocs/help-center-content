---
title: 'Entregas programadas y capacidad de entrega'
id: 5TuyqHRCCwYMaDv4r8rZdo
status: PUBLISHED
createdAt: 2022-03-08T18:30:20.114Z
updatedAt: 2024-03-25T20:07:20.150Z
publishedAt: 2024-03-25T20:07:20.150Z
firstPublishedAt: 2022-03-08T18:37:54.630Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: scheduled-deliveries-and-delivery-capacity
locale: es
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugEN: logistica-101
order: 5
---

Una tienda VTEX puede ofrecer entregas programadas a sus clientes. De esta forma, el cliente elige un día de entrega específico para que la tienda y la transportadora le entreguen el pedido en su domicilio. 

Para poner a disposición de los clientes la [entrega programada](/es/docs/tutorials/entrega-programada), es necesario incluir ventanas de entrega en la [política de envío](/es/docs/tutorials/politica-de-envio) de la [transportadora](/es/docs/tutorials/transportadoras-en-vtex) correspondiente. Una vez hecho esto, los períodos y los días disponibles para la entrega programada aparecerán en el checkout de tu tienda.

> ⚠️ Para que la [Entrega programada](/es/docs/tutorials/entrega-programada) y la [Capacidad de entrega](/es/docs/tutorials/gestionar-capacidad-de-entrega) funcionen correctamente, debes tener en cuenta que:<ul><li>La suma de {[account name](/es/docs/tutorials/que-es-account-name)} + {ID de la política de envío} no puede exceder los 60 caracteres.</li><li>No se debe utilizar espacio en el ID de la [política de envío](/es/docs/tutorials/crear-una-politica-de-envio).</li></ul>

Es importante tener en cuenta que la disponibilidad de las entregas programadas está en función del servicio que la transportadora contratada (registrada en la política de envío) ofrece a tu tienda. Para conocer la disponibilidad de las ventanas de entrega (o de los periodos de envío) y de la cantidad de ítems/pedidos que aún pueden atenderse en cada ventana de entrega, consulta la página [Capacidad de entrega](/es/docs/tutorials/gestionar-capacidad-de-entrega).

### Cómo configurar

Las entregas programadas se configuran al crear o actualizar una [política de envío](/es/docs/tutorials/politica-de-envio).


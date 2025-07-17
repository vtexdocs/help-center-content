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
trackSlugES: logistica-101
---

Una tienda VTEX puede ofrecer entregas programadas a sus clientes. De esta forma, el cliente elige un día de entrega específico para que la tienda y la transportadora le entreguen el pedido en su domicilio. 

Para poner a disposición de los clientes la [entrega programada](/es/tutorial/entrega-programada--22g3HAVCGLFiU7xugShOBi), es necesario incluir ventanas de entrega en la [política de envío](/es/tutorial/politica-de-envio--tutorials_140) de la [transportadora](/es/tutorial/transportadoras-en-vtex--7u9duMD5UQa2QQwukAWMcE) correspondiente. Una vez hecho esto, los períodos y los días disponibles para la entrega programada aparecerán en el checkout de tu tienda.

<div class="alert alert-warning">
Para que la <a href="https://help.vtex.com/es/tutorial/scheduled-delivery--22g3HAVCGLFiU7xugShOBi">Entrega programada</a> y la <a href="https://help.vtex.com/es/tutorial/managing-delivery-capacity--2y217FQZCjD0I1n62yxVcz">Capacidad de entrega</a> funcionen correctamente, debes tener en cuenta que:<p><ul><li>La suma de {<a href="https://help.vtex.com/es/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name</a>} + {ID de la política de envío} no puede exceder los 60 caracteres.</li><li>No se debe utilizar espacio en el ID de la <a href="https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT">política de envío</a>.</li></ul></p>
</div>

Es importante tener en cuenta que la disponibilidad de las entregas programadas está en función del servicio que la transportadora contratada (registrada en la política de envío) ofrece a tu tienda. Para conocer la disponibilidad de las ventanas de entrega (o de los periodos de envío) y de la cantidad de ítems/pedidos que aún pueden atenderse en cada ventana de entrega, consulta la página [Capacidad de entrega](/es/tutorial/gestionar-capacidad-de-entrega--2y217FQZCjD0I1n62yxVcz).

### Cómo configurar

Las entregas programadas se configuran al crear o actualizar una [política de envío](/es/tutorial/politica-de-envio--tutorials_140).


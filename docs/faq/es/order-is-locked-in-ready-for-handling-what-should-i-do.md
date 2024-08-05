---
title: "Pedido está trabado en 'Listo para preparación', ¿qué se hace?"
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2023-06-15T13:20:25.568Z
publishedAt: 2023-06-15T13:20:25.568Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: pedido-esta-trabado-en-listo-para-preparacion-que-se-hace
locale: es
legacySlug: pedido-está-trabado-en-pronto-para-manuseio-que-se-hace
---

Cuando una tienda tiene algún pedido trabado en el status **Listo para preparación** quiere decir que es necesario que el ERP informe que ha consultado el pedido y empezó su manoseo.

Esto ocurre porque, en el flujo de pedidos, existe el status en el que los pedidos deben ser consultados por el ERP, llamado **Listo para preparación**.

Cuando el ERP consulta e inserta este pedido en su base, es necesario que él le informe a VTEX que el pedido puede seguir con su flujo. Ese aviso puede hacerse por dos maneras:

- [ERP informa por API](https://developers.vtex.com/vtex-rest-api/reference/starthandling): el modo más común de actualización.
- **Lojista informa manualmente**: la tienda no posee un ERP y para que el pedido siga su flujo es necesario informar manualmente en el Admin VTEX, en la [página de detalles del pedido](https://help.vtex.com/es/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl). Para ver el paso a paso completo, consulte el artículo [Enviar pedido al status a Preparar la Entrega](https://help.vtex.com/es/tutorial/passar-pedido-para-o-status-preparando-entrega--tutorials_198).

> Es necesario tener un [perfil de acceso con permiso OMS - Full access](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") para llevar a cabo esta acción.

<div class="alert alert-warning">
<p>Si el pedido pasa del status <b>Iniciar preparación</b> manualmente, no será posible bajar el pedido para el ERP posteriormente.</p>
</div>

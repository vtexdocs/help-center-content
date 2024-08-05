---
title: "Pedido está trabado en 'Listo para manuseo'. ¿Qué se hace?"
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2022-08-11T19:29:35.680Z
publishedAt: 2022-08-11T19:29:35.680Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: pedido-esta-trabado-en-listo-para-manuseo-que-se-hace
locale: es
legacySlug: pedido-está-trabado-en-pronto-para-manuseio-que-se-hace
---

Cuando una tienda tiene algún pedido trabado en el status **Listo para manoseo** quiere decir que es necesario que el ERP informe que ha consultado el pedido y empezó su manoseo.

Esto ocurre porque, dentro del flujo de pedidos, existe el status en el que los pedidos deben ser consultados por el ERP - este status es el **Listo para manoseo**.

Cuando el ERP consulta e inserta este pedido en su base, es necesario que él le informe a VTEX que el pedido puede seguir con su flujo. Ese aviso puede hacerse por 2 maneras, descritas a continuación.

- [ERP informa por API](https://developers.vtex.com/vtex-rest-api/reference/starthandling): éste es el modo más común de actualización.
- **Comerciante informa manualmente**: En este caso, la tienda no posee un ERP y es necesario informar manualmente para que el pedido siga su flujo.

> Para ello, haga clic en el símbolo de flecha encima del box **Iniciar manoseo**, en el diagrama de flujo de pedidos.

![ Listo para manoseo](https://images.contentful.com/alneenqid6w5/5VSeCrxvSogcI46mgkYkm8/84ea107934684ada917d6a8163aeae34/ProntoParaManuseio.png)

> Es necesario tener un [perfil de acceso con permiso OMS - Full access](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") para llevar a cabo esta acción.

<div class="alert alert-warning">
  <p>Si el pedido pasa del status <b>Iniciar manoseo</b> manualmente, no será posible bajar el pedido para el ERP posteriormente.</p>
</div>

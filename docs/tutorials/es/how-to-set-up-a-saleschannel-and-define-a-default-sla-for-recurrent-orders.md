---
title: 'Configurar un SalesChannel y definir un default SLA para los pedidos recurrentes'
id: 4AyJBkwoMEgCkKIAMomekK
status: DRAFT
createdAt: 2017-05-03T16:54:56.590Z
updatedAt: 2020-02-03T22:32:27.851Z
publishedAt: 
firstPublishedAt: 2017-05-05T18:28:48.785Z
contentType: tutorial
productTeam: Others
author: 12efi1hBSg0ag6yCQMiaQu
slug: como-configurar-un-saleschannel-y-definir-un-default-sla-para-los-pedidos-recurrentes
legacySlug: como-configurar-un-saleschannel-y-definir-un-default-sla-para-los-pedidos-recurrentes
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

## Recurrencia: Definir SalesChannel y default SLA

El objetivo de este mini tutorial es explicar un recurso nuevo, que permite hacer configuraciones para el módulo de recurrencia (Via API). En este momento, es posible definir un SaleChannel para usar en la generación de todos los pedidos `recurrentes` de la tienda también informar el SLA default.

## Ruta (endpoint para API)
- Consulta: [GET configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#e3cfd743-1cf0-41ce-b9ce-3e35b32a137a)
- Configuración: [PUT Setup configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#b82e6ce4-ecf9-41f1-ab6e-a09310e983a9)


### SalesChannel (Política Comercial) 

Basta incluir un atributo con el nombre `salesChannel`, conforme a lo ilustrado en la ruta de configuración, con el valor del identificador del canal de ventas. 

Y entonces, los siguientes pedidos se crearán con el canal de ventas configurado. Si no hay stock para determinado ítem en este canal el ítem será excluido del pedido.  

![posicao.es](//images.ctfassets.net/alneenqid6w5/1lTacScACYmqyzHKSZCydV/7a6e296f63afec40cf30c97a6a61e1ec/posicao.es.png)

*Pantalla donde se encuentra el ID del salesChannel*

### SLA

Basta incluir un atributo con el nombre `defaultSLA`, conforme a lo ilustrado en la ruta de configuración, con el identificador del tipo de la entrega. 

Y entonces, el SLA configurado tendrá precedencia sobre el SLA más barato para los siguientes pedidos que se crearán – y si éste tiene una ventana de entrega, será seleccionado el primer intervalo disponible.

![transportadora.es](//images.ctfassets.net/alneenqid6w5/41hy7FOGA3p94j3YX5kwiW/66ddd21e4f2ec65ae4a2ede3af059bbf/transportadora.es.png)

*Pantalla donde se encuentra el ID del SLA*

---
title: "Campo 'items' será removido da API de List Orders"
id: 40UDVKiocUCSi8Uo8eUKui
status: PUBLISHED
createdAt: 2018-10-04T20:56:17.252Z
updatedAt: 2019-12-31T15:13:36.551Z
publishedAt: 2019-12-31T15:13:36.551Z
contentType: updates
productTeam: Post-purchase
author: authors_24
slug: campo-items-sera-removido-da-api-de-list-orders
locale: pt
legacySlug: campo-items-sera-removido-da-api-de-list-orders
announcementImageID: ''
announcementSynopsisPT: 'Em 12/10, vamos remover esse campo (já obsoleto) para dar mais estabilidade e performance à indexação de pedidos.'
---

No dia __12 de outubro__, vamos retirar o campo `items` da API de List Orders.

<div class="alert">
Request da API de List Orders: <code>http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders</code>
</div>

Se sua loja usa a API de List Orders e no mapeamento da sua integração é esperado receber o campo `items`, seu time de desenvolvimento precisa __retirá-lo do mapeamento da integração__.

>⚠️ O campo `items` da API de List Orders já está **obsoleto** há bastante tempo. Ele não tem serventia alguma atualmente, e por isso sua loja não deveria considerá-lo em suas integrações. Para pegar itens de pedidos, sua loja deve usar a [API do Feed](http://help.vtex.com/pt/tutorial/como-funciona-o-feed-do-oms).

É importante lembrar que __a API de List Orders continua funcionando normalmente__. Apenas o campo `items` será excluído.

### Por que vamos fazer isto?

A retirada desse campo vai aumentar consideravelmente a estabilidade e a performance do indexador de pedidos.

Por isso, é crucial retirá-lo da integração.

>ℹ️ **Atenção:** esta mudança somente impacta as integrações que dependem da entrega do campo `items` pela API do List Orders.

>ℹ️ Esta mudança **não** afeta a API de Get Order. Nela, o campo `items` continua existindo e sendo atualizado normalmente.

<div class="alert">
Request da API de Get Order: <code>http://{{accountName}}.{{environment}}.com.br/api/oms/pvt/orders/{{orderId}}</code>
</div>

---

- __O que vai acontecer__: Vamos retirar o campo `items` da API de List Orders.
- __Quando__: 12 de outubro de 2018.
- __Por quê__: Para melhorar a estabilidade e a performance da indexação de pedidos.
- __O que você precisa fazer__: Se sua loja depende do campo `items` retornardo pela API de List Orders (e somente neste caso), seu time de desenvolvimento precisa retirar o campo `items` do mapeamento da integração. 

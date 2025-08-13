---
title: 'Por que meu pedido está parado em "Preparando entrega"?'
id: frequentlyAskedQuestions_301
status: PUBLISHED
createdAt: 2017-04-27T22:38:27.319Z
updatedAt: 2023-03-20T18:45:54.181Z
publishedAt: 2023-03-20T18:45:54.181Z
firstPublishedAt: 2017-04-27T23:01:44.420Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slugEN: why-has-my-order-stopped-on-ready-for-handling
locale: pt
legacySlug: por-que-meu-pedido-esta-parado-em-preparando-entrega
---

`Preparando Entrega` é um status do fluxo de pedidos em que se espera o cadastro da nota fiscal para a fatura. O pedido ficará nesse status até que seu [faturamento](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2WgQrlHTyVo4hLjhUs1LMT) seja realizado, ou seja, até que a nota fiscal seja inserida no pedido.

## Faturamento no módulo Pedidos

Para isso, é necessário fazer a inclusão da nota fiscal via API de [Order Invoice Notification](https://developers.vtex.com/vtex-rest-api/reference/invoicenotification) ou [manualmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) no Admin VTEX, e a nota deve conter o valor total do pedido, incluindo o frete. 

Atente-se às seguintes informações, para garantir que o faturamento foi feito corretamente:

- A nota fiscal deve conter o valor total do pedido, incluindo o frete.  
- Se o valor da nota fiscal já estiver com o valor correto e total do pedido, é preciso fazer o reenvio da nota fiscal.  
- Caso a nota fiscal inserida não contenha o valor completo, será necessário inserir uma nova [nota fiscal parcial](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe) com o valor faltante. Essa nova nota deve ter um número diferente da nota fiscal já cadastrada no pedido.

### Integração com marketplace

Caso um pedido tenha sido faturado com sucesso no seu ERP, mas continue parado no status `Preparando Entrega`, pode ser que o produto esteja indisponível na API do marketplace. Neste caso, veja o artigo [O pedido foi faturado no ERP mas continua no status "Preparando Entrega". O que fazer?](https://help.vtex.com/pt/faq/the-order-was-billed-in-the-erp-but-remains-in-the-preparing-delivery-status).

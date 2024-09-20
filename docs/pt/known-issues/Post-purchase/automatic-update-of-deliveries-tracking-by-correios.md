---
title: 'Atualização automática do rastreio de entregas via Correios'
id: 7hKUU5Qp4AyCW2QaMQC0S6
status: PUBLISHED
createdAt: 2017-08-16T22:07:06.254Z
updatedAt: 2024-02-29T18:16:47.090Z
publishedAt: 2024-02-29T18:16:47.090Z
firstPublishedAt: 2017-08-16T23:00:56.342Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_4
tag: Order Management
slug: atualizacao-automatica-do-rastreio-de-entregas-via-correios
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O OMS possui um recurso que acompanha automaticamente as entregas dos Correios (entre outras transportadoras), de modo a registrar essas alterações no pedido, notificar o cliente por e-mail quanto às últimas alterações e, por último, marcar o pacote como entregue - informação também repassada para os marketplaces.

Alterações recentes dos Correios fizeram a nossa integração deixar de funcionar, sendo necessário reescrever o serviço responsável por essa tarefa.


## Simulação

Basta ter um código de rastreio válido em qualquer pedido. Nos dias seguintes, conforme houver atualização nesse código de rastreio, deveria haver o envio de e-mails, que notavelmente não irá acontecer.

## Workaround

É possível enviar atualizações de rastreio via API, mantendo o comportamento do envio de e-mails. O mesmo para a confirmação de entrega, que também pode ser feita pela interface do OMS.

![2017-08-16 195850](//images.contentful.com/alneenqid6w5/1IPsGBnkKYggY8m6smeqOA/a2a95afc6fb34e7bfe89c1cab2fdb612/2017-08-16_195850.jpg)

A confirmação de entrega feita via OMS também é repassada aos marketplaces.

>ℹ️ Atualmente, oferecemos o [VTEX Shipping Network](https://help.vtex.com/pt/subcategory/vtex-shipping-network--5n5MnINzWTQUX1I2EZl4Ib), nossa solução logística para integrar sua operação aos serviços dos Correios e/ou transportadoras parceiras. Todos os pedidos da loja que estiverem vinculados a essa solução vão dispor de rastreamento com atualização automática.

Outra opção é utilizar soluções desenvolvidas por parceiros para acompanhar entregas dos Correios, como o [rastreio da XP Agência](https://rastreio.xpagencia.com.br/).


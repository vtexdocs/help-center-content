---
title: 'marketingTags com valor nulo quando o público-alvo da campanha é correspondido'
id: 17pTWB1gLNJgFy7KEZd8pk
status: PUBLISHED
createdAt: 2024-06-19T20:08:49.413Z
updatedAt: 2024-06-19T20:08:50.452Z
publishedAt: 2024-06-19T20:08:50.452Z
firstPublishedAt: 2024-06-19T20:08:50.452Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: marketingtags-com-valor-nulo-quando-o-publicoalvo-da-campanha-e-correspondido
locale: pt
kiStatus: Backlog
internalReference: 1052895
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando uma conta tem um público-alvo de campanha e um usuário conectado é correspondido, o checkout usa as informações registradas na sessão, que tem apenas o ID da campanha. Em `marketingTags`, ele deveria ter o nome da campanha, mas é `nulo`, pois não há informações disponíveis na sessão.

## Simulação



- Crie um público-alvo de campanha;
- Faça login com um usuário ao qual a campanha corresponda;
- Verifique o campo `marketingData.marketingTags` no formulário de pedido, ele terá um valor nulo e o nome da campanha.
 ![](https://vtexhelp.zendesk.com/attachments/token/1i6d9cIyg1Hx2fs9QsVZ6BFCY/?name=image.png

## Workaround


N/A




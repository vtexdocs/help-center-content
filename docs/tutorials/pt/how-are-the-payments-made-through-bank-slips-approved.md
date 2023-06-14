---
title: 'Como é feita a aprovação de pagamento do boleto?'
id: frequentlyAskedQuestions_489
status: PUBLISHED
createdAt: 2019-01-24T20:45:53.873Z
updatedAt: 2020-07-02T21:00:48.704Z
publishedAt: 2020-07-02T21:00:48.704Z
firstPublishedAt: 2019-01-24T22:11:54.868Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: como-e-feita-a-aprovacao-de-pagamento-do-boleto
legacySlug: como-e-feita-a-aprovacao-de-pagamento-do-boleto
subcategory: 2tEO9ytK1aMO0i2oMayoQq
---

Existem duas possibilidades de configuração de boleto bancário: com as informações bancárias cadastradas diretamente na seção de Pagamentos ou passando por um Gateway de Pagamento. [Veja nosso manual de criação de boleto bancário](/pt/tutorial/como-configurar-boleto-bancario).

Explicamos detalhadamente abaixo como que acontece a aprovação para cada um desses tipos:

## Diretamente pela VTEX

Neste tipo de configuração, é necessário que a loja ou algum sistema avise à VTEX que o pagamento foi realizado.

O pedido fica no status **Pagamento Pendente** até que se faça a notificação de pagamento. Essa notificação pode ser feita por [conciliação bancária](/pt/tutorial/conciliacoes-bancarias/), [por API](https://developers.vtex.com/reference/payment#sendpaymentnotification "por API") ou [manualmente em Gerenciamento de pedidos](/pt/tutorial/como-aprovar-pagamento/).

É importante destacar que somente após a aprovação do pagamento o pedido seguirá com seu fluxo normal.

## Com um gateway externo

Neste caso, é preciso que o gateway cadastrado faça a comunicação de pagamento com a VTEX, da mesma maneira que ocorre com um cartão de crédito, por exemplo.

Também é possível fazer a aprovação de pagamento [manualmente em Gerenciamento de pedidos](/pt/tutorial/como-aprovar-pagamento/).

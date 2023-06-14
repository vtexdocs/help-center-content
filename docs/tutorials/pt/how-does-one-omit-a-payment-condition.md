---
title: 'Omitir uma condição de pagamento'
id: 5f8aZrc7y8oiu0KOmaOy0e
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.203Z
updatedAt: 2019-12-31T15:26:32.553Z
publishedAt: 2019-12-31T15:26:32.553Z
firstPublishedAt: 2019-01-24T22:12:17.899Z
contentType: tutorial
productTeam: Financial
author: authors_35
slug: como-omitir-uma-condicao-de-pagamento
legacySlug: como-omitir-uma-condicao-de-pagamento
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Como a VTEX permite o cadastro fácil e rápido de múltiplos Gateways, Adquirentes e suas respectivas associações com os meios de pagamento, alguns lojistas gostariam de criar promoções, ou mesmo parcerias de forma que o pagamento seja exclusivo para um meio de pagamento.

Uma forma de conseguir segregar uma condição de pagamento é por meio de políticas comerciais.

Por exemplo, uma loja deseja aplicar preços variados por utm e deseja que a compra seja feita apenas com um meio de pagamento específico. Será necessário criar uma nova política comercial, e a utm definida terá que carregar o site com essa política. A configuração da condição de pagamento com uma política comercial específica pode ser feita no próprio conector, ou seja, no Pagamentos.

Outra forma, talvez mais simples, é customizar o Checkout, de forma que o CSS omita os meios de pagamentos quando houver a utm. Mas vale lembrar que __a VTEX não recomenda customizações no Checkout__, uma vez que o SmartCheckout foi feito para maximizar a eficiência no fluxo de fechamento de compra.

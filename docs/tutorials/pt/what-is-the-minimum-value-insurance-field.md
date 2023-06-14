---
title: 'Para que serve o campo Minimum Value Insurance?'
id: frequentlyAskedQuestions_158
status: PUBLISHED
createdAt: 2019-01-24T20:45:51.626Z
updatedAt: 2020-01-08T20:24:05.826Z
publishedAt: 2020-01-08T20:24:05.826Z
firstPublishedAt: 2019-01-24T21:55:49.807Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance
locale: pt
legacySlug: para-que-serve-o-campo-na-tabela-de-frete-minimum-value-insurance
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

O Minimum Value Insurance é um campo da tabela de frete, importado na transportadora e é como um tipo de seguro com base no valor da mercadoria, levando em conta a coluna adicional por preço. Se o adicional por preço for menor que o Minimum Value Insurance, é considerado o Minimum Value Insurance no lugar do adicional por preço e então é somado ao valor absoluto do frete.

### Exemplos

- Carrinho: R$ 100,00
- Adicional por preço: 10% ou seja R$ 10,00.
- Frete absoluto: R$ 10,00
- Frete cobrado considerando o adicional por preço: R$ 20,00

Se o valor cadastrado em Minimum Value Insurance for R$ 15,00, **o frete será R$ 25,00**. Visto que ele é maior que adicional por preço e será somado aos R$ 10,00 do valor absoluto.

Se o valor cadastrado em Minimum Value Insurance for R$ 5,00, **o frete será R$ 20,00**. Visto que o percentual por preço cobre o valor mínimo exigido para o seguro.

---
title: 'Como é feito o cálculo do parcelado com juros compostos?'
id: frequentlyAskedQuestions_4758
status: CHANGED
createdAt: 2019-01-24T20:46:01.816Z
updatedAt: 2021-03-30T14:40:30.092Z
publishedAt: 2020-09-16T18:58:19.340Z
firstPublishedAt: 2019-01-24T22:15:15.153Z
contentType: tutorial
productTeam: Post-purchase
author: authors_59
slugEN: how-do-you-calculate-payments-in-installments-with-compound-interest
legacySlug: como-e-feito-o-calculo-do-parcelado-com-juros
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Há duas configurações possíveis de cobrança de parcelado com juros compostos:
- Cobrança no **início do período**;
- Cobrança no **fim do período**.

## Início do período

A cobrança no início do período é calculada da seguinte forma:

1. i = Taxa de Juros
2. n = Número de Parcelas
3. PV = Valor Presente (valor total da compra sem juros)
4. Parcela = ![juros-inicio-periodo](https://images.contentful.com/alneenqid6w5/3JkoK4GMLYAWIwUcAC8W2G/59d18849c4ee9e59ff37cb09ac661c89/juros-inicio-periodo.png)

## Fim do período

A cobrança no fim do período é calculada da seguinte forma:

1. i = Taxa de Juros
2. n = Número de Parcelas
3. PV = Valor Presente (valor total da compra sem juros)
4. Multiplicador Cash Flow =![cash-flow](https://images.contentful.com/alneenqid6w5/2xvT7uQ8ccGoCUw8ouOEoK/936546d7e46be7b9ce984c531daf5e8b/cash-flow.png)
5. Parcela = `PV x Multiplicador Cash Flow`

## Exemplos

### Início do Período

1. i = 1%
2. n = 12
3. PV = 1000
![conta0](https://images.contentful.com/alneenqid6w5/3AhidhqtTaCqiuGMKK2c64/8c5e8f0067ad5ec80685bdcca8d79c95/conta0.png)

---

### Fim do Período

1. i = 1%
2. n = 12
3. PV = 1000
4. ![conta1](https://images.contentful.com/alneenqid6w5/4CaAz5DKdaUSY0OwaGEsUu/4afb38b8c7a78977d011f2d6333800d6/conta1.png)![conta2](https://images.contentful.com/alneenqid6w5/3hQTOBVJqgMAyMWWia0aAY/5f7fbb82ebeb8b5e912baca35ea39b9b/conta2.png)

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
locale: pt
legacySlug: como-e-feito-o-calculo-do-parcelado-com-juros
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
4. Parcela = ![juros-inicio-periodo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments%20overview/como-e-feito-o-calculo-do-parcelado-com-juros-compostos_1.png)

## Fim do período

A cobrança no fim do período é calculada da seguinte forma:

1. i = Taxa de Juros
2. n = Número de Parcelas
3. PV = Valor Presente (valor total da compra sem juros)
4. Multiplicador Cash Flow =![cash-flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments%20overview/como-e-feito-o-calculo-do-parcelado-com-juros-compostos_2.png)
5. Parcela = `PV x Multiplicador Cash Flow`

## Exemplos

### Início do Período

1. i = 1%
2. n = 12
3. PV = 1000
![conta0](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments%20overview/como-e-feito-o-calculo-do-parcelado-com-juros-compostos_3.png)

---

### Fim do Período

1. i = 1%
2. n = 12
3. PV = 1000
4. ![conta1](//images.contentful.com/alneenqid6w5/4CaAz5DKdaUSY0OwaGEsUu/4afb38b8c7a78977d011f2d6333800d6/conta1.png)![conta2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments%20overview/como-e-feito-o-calculo-do-parcelado-com-juros-compostos_4.png)

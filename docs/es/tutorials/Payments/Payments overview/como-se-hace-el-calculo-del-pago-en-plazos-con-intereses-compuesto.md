---
title: '¿Cómo se hace el cálculo del pago en plazos con interés compuesto?'
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
locale: es
legacySlug: como-se-hace-el-calculo-del-pago-en-plazos-con-intereses
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Hay dos configuraciones posibles de cobranza de pago en plazos con interés compuesto:
- Cobranza al **inicio del periodo**;
- Cobranza al **fin del periodo**.

## Inicio del periodo

La cobranza al inicio del periodo se calcula como sigue:

1. i = Tasa de Intereses
2. n = Número de Cuotas
3. PV = Valor Presente (valor total de la compra sin intereses)
4. Cuota = ![juros-inicio-periodo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto_1.png)

## Fin del periodo

La cobranza al fin del periodo se calcula como sigue:

1. i = Tasa de Intereses
2. n = Número de Cuotas
3. PV = Valor Presente (valor total da compra sin intereses)
4. Multiplicador Cash Flow =![cash-flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto_2.png)
5. Cuota = `PV x Multiplicador Cash Flow`

## Ejemplos

### Inicio del Periodo

1. i = 1%
2. n = 12
3. PV = 1000
![conta0](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto_3.png)

---

### Fin del Periodo

1. i = 1%
2. n = 12
3. PV = 1000
4. ![conta1](//images.contentful.com/alneenqid6w5/4CaAz5DKdaUSY0OwaGEsUu/4afb38b8c7a78977d011f2d6333800d6/conta1.png)![conta2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payments%20overview/como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto_4.png)

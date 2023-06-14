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
slug: como-se-hace-el-calculo-del-pago-en-plazos-con-intereses-compuesto
legacySlug: como-se-hace-el-calculo-del-pago-en-plazos-con-intereses
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

Hay dos configuraciones posibles de cobranza de pago en plazos con interés compuesto:
- Cobranza al **inicio del periodo**;
- Cobranza al **fin del periodo**.

## Inicio del periodo

La cobranza al inicio del periodo se calcula como sigue:

1. i = Tasa de Intereses
2. n = Número de Cuotas
3. PV = Valor Presente (valor total de la compra sin intereses)
4. Cuota = ![juros-inicio-periodo](//images.contentful.com/alneenqid6w5/3JkoK4GMLYAWIwUcAC8W2G/59d18849c4ee9e59ff37cb09ac661c89/juros-inicio-periodo.png)

## Fin del periodo

La cobranza al fin del periodo se calcula como sigue:

1. i = Tasa de Intereses
2. n = Número de Cuotas
3. PV = Valor Presente (valor total da compra sin intereses)
4. Multiplicador Cash Flow =![cash-flow](//images.contentful.com/alneenqid6w5/2xvT7uQ8ccGoCUw8ouOEoK/936546d7e46be7b9ce984c531daf5e8b/cash-flow.png)
5. Cuota = `PV x Multiplicador Cash Flow`

## Ejemplos

### Inicio del Periodo

1. i = 1%
2. n = 12
3. PV = 1000
![conta0](//images.contentful.com/alneenqid6w5/3AhidhqtTaCqiuGMKK2c64/8c5e8f0067ad5ec80685bdcca8d79c95/conta0.png)

---

### Fin del Periodo

1. i = 1%
2. n = 12
3. PV = 1000
4. ![conta1](//images.contentful.com/alneenqid6w5/4CaAz5DKdaUSY0OwaGEsUu/4afb38b8c7a78977d011f2d6333800d6/conta1.png)![conta2](//images.contentful.com/alneenqid6w5/3hQTOBVJqgMAyMWWia0aAY/5f7fbb82ebeb8b5e912baca35ea39b9b/conta2.png)

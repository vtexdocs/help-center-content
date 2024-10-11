---
title: 'Como funciona o empilhamento'
id: tutorials_124
status: PUBLISHED
createdAt: 2017-04-27T22:18:33.952Z
updatedAt: 2023-02-28T01:53:40.922Z
publishedAt: 2023-02-28T01:53:40.922Z
firstPublishedAt: 2017-04-27T23:00:43.968Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-does-stacking-work
locale: pt
legacySlug: como-funciona-o-empilhamento
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Ao calcular a soma das medidas de mais de um SKU, o sistema possui uma inteligência de empilhamento que permite que duas medidas se mantenham com o mesmo valor e apenas uma delas seja multiplicada pela quantidade. Esta medida será sempre a menor aresta/lado, veja como é feito o cálculo:

`(Menor lado x Quantidade de SKUs) + Largura + Comprimento`

A quebra de pacotes só será permitida caso esteja configurada a [divisão de carga](/pt/tutorial/como-funciona-a-divisao-de-carga/).

## Medida da maior aresta

Esta funcionalidade permite limitar que um pacote só possa ser montado caso nenhuma das medidas ultrapasse este valor.

### Exemplos

Medida da maior aresta cadastrada: 80 cm.

- Compra de 1 unidade com altura de 20 cm = entrega em 1 remessa (1 envio).
- Compra de 8 unidades com altura total em 160 cm = entrega em 2 remessas (2 envios).
- Compra de 1 unidade de outro produto, com altura de 100 cm = a compra não poderá ser finalizada, pois não é possível a entrega dessas dimensões (altura máxima permitida = 80, altura do produto = 100).

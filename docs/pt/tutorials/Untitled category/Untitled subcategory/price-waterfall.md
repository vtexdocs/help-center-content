---
title: 'Cascata de preços'
id: 2USbESztvGi80WMUEawMGq
status: ARCHIVED
createdAt: 2018-06-20T21:23:23.445Z
updatedAt: 2019-12-31T15:28:12.188Z
publishedAt: 
firstPublishedAt: 2018-06-20T22:08:14.680Z
contentType: tutorial
productTeam: Others
author: 7kumplNTMIsWYGeeegCqO8
slug: cascata-de-precos
locale: pt
legacySlug: cascata-de-precos
subcategoryId: unknown-subcategory
---

Recentemente, a feature de **Preços Condicionais** foi adicionada ao módulo de *Pricing*. (Veja o artigo [Como criar Preços Condicionais](/pt/tutorial/como-criar-precos-condicionais).)

Com essa nova feature, temos agora uma nova entidade de preço chamada *Preços Condicionais*, além das já existentes *Preço Fixo* e *Preço Base*.

O gráfico abaixo explica como funciona a cascata de preços:

![Cascata de Preço](//images.ctfassets.net/alneenqid6w5/4Dh0ulBDFCEs8WuuigSsoY/3cfeccdf7b8d690a026533fbcbc699b0/cascataPreco.png)

Quando um preço para um SKU é solicitado ao módulo de *Pricing*:
1. Um *Preço Fixo* é selecionado em seus critérios como **agendamento** e **quantidade mínima**
2. É verificado se existe algum *Preço Condicional* definido e se esta condição se aplica ao usuário que está realizando a compra. Caso exista, o *Preço Condicional* é utilizado.
3. Caso nenhum *Preço Condicional* tenha sido definido, ou ele não se aplica ao usuário, é utilizado o *Preço Fixo*.
4. Caso não haja nenhum *Preço Fixo* ativo, o preço entregue será o *Base Price*.
5. Caso não exista um *Base Price* definido, o SKU será mostrado como **inativo** na vitrine.

**Observações:**
* Caso mais de um *Preço Condicional* se aplique a um usuário, o preço aplicado será o de menor valor.
* Um *Preço Fixo* pode conter no máximo **3 preços condicionais**.

---
title: 'Notas promissórias extras não consideram a margem de mudança para a venda'
id: 4PwQpQ07NHthtUyfJibNmV
status: PUBLISHED
createdAt: 2022-02-16T17:44:28.486Z
updatedAt: 2022-11-25T22:08:49.657Z
publishedAt: 2022-11-25T22:08:49.657Z
firstPublishedAt: 2022-02-16T17:44:28.968Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: notas-promissorias-extras-nao-consideram-a-margem-de-mudanca-para-a-venda
locale: pt
kiStatus: Fixed
internalReference: 525987
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O valor máximo para o upselling é calculado apenas para notas promissórias padrão, quando adicionamos notas extras, nosso gateway não considera o campo de variação de margem no cálculo.



## Simulação


Fazer um pedido usando quaisquer slots padrão para notas promissórias e então fazer um novo pedido após adicionar e usar novos slots para notas promissórias



## Workaround


No caso de usar o campo de margem de mudança, este campo só funciona para os cinco primeiros slots padrão


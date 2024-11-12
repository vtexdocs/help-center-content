---
title: "Erro ao tentar se logar com e-mail contendo o caractere '+'"
id: 6Kp93SC4gwUsoEiA2kYYqU
status: ARCHIVED
createdAt: 2017-06-19T14:52:24.353Z
updatedAt: 2019-12-31T15:19:02.233Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Identity
author: authors_63
tag: My Orders
slugEN: untitled
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Ao utilizar a máscara de e-mail de teste utilizando o caractere "+" ao se logar no sistema o mesmo retorna um erro. 
![2017-06-19 12 13 20-A chamada ao recurso 'pvt profiles thiago.baranda%2Bteste%40vtex.com addresses a](//images.contentful.com/alneenqid6w5/1N4zQXbpZKuWMMWEYgiMoC/22afa7673bb8efc804c9ac517da8031e/2017-06-19_12_13_20-A_chamada_ao_recurso__pvt_profiles_thiago.baranda_2Bteste_40vtex.com_addresses_a.png)

## Simulação

1 - Entra no /account de alguma loja
2 - Esolhe a opção de receber a chave no e-mail
3 - Escreve o e-mail com a máscara ex.: usuario+teste@vtex.com.br
4 - Complete o login
5 - Aparecerá o erro

## Workaround

Não use o caractere "+" no e-mail, utilize o e-mail normal.


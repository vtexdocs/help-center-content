---
title: 'Como funciona a regra de alteração de preço'
id: tutorials_752
status: ARCHIVED
createdAt: 2017-04-27T21:58:25.042Z
updatedAt: 2021-05-26T15:26:54.825Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:42.161Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: understanding-the-price-change-rule
locale: pt
legacySlug: range-de-alteracao-de-preco
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

A alteração de preços de sua loja é uma tarefa delicada e que pode ser realizada por diversos caminhos. Para aumentar a segurança dessa ação, além dos logs de alterações, é possível configurar um percentual aceitável de variações no preço de um item. Esta função assegura que os valores dos produtos não sejam alterados de forma prejudicial para a operação da sua loja.

Por padrão, esse limite na variação do preço de um SKU é configurado em 70% de aumento máximo e 30% de redução máxima de seu valor.
Considerando as configurações nativas, por exemplo, um SKU no valor de R$100,00 poderia ter seu valor aumentado para, no máximo, R$170,00 (70% de 100) e reduzido para até R$70,00 (30% de 100). 

Caso você tente alterar o preço do SKU desrespeitando o range configurado, pela **API REST** será retornada a seguinte mensagem: `“The price is outside the range set, sku: 123, original price: 100.0000, maximum price: 170.0000, minimun price:70.0000″`

Esse bloqueio também é realizado para todas as demais formas de atualização de preço.

O percentual da __trava de preço__ pode ser removido ou alterado nas __Configurações__ do módulo de __Preços__.

![trava-variação-preço pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Alguns marketplaces também possuem esta trava de variação de preços. Caso você deseje alterar os preços para além dos ranges da trava, basta entrar em contato com o marketplace solicitando a alteração. 

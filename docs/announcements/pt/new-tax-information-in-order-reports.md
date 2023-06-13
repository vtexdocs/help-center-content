---
title: Novas informações sobre taxas no relatório de pedidos
id: 5w4kBsXd6DIzBjyGMe5Tmy
status: PUBLISHED
createdAt: 2021-04-08T18:19:51.100Z
updatedAt: 2021-04-09T13:56:32.437Z
publishedAt: 2021-04-09T13:56:32.437Z
contentType: updates
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: novas-informacoes-sobre-taxas-no-relatorio-de-pedidos
legacySlug: novas-informacoes-sobre-taxas-no-relatorio-de-pedidos
announcementImageID: 
announcementSynopsisPT: A coluna Taxas do relatório de pedidos foi alterada para dar visibilidade sobre o valor total de impostos cobrados.
---

Exportar relatórios de pedidos possibilita realizar ações externas como analisar o desempenho de promoções ou utilizar como romaneio para facilitar a logística da loja.

A coluna **Taxes** do [relatório de pedidos](https://help.vtex.com/pt/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY?&utm_source=autocomplete) foi modificada para dar mais visibilidade aos lojistas sobre o valor total dos impostos cobrados em cada pedido.

## O que mudou?

Anteriormente, a coluna **Taxes** do relatório de pedidos apresentava apenas taxas [inseridas no Checkout](https://help.vtex.com/pt/tutorial/inserting-taxes-in-the-cart--2wY5ePTTRz17EBhO3F7XBQ), ou seja, valores identificados como `Tax`. O relatório não contabilizava taxas customizadas [criadas em Promoções & Taxas no admin](https://help.vtex.com/pt/tutorial/como-criar-taxaimposto--tutorials_321), ou seja, não continha os valores identificados como `CustomTax`.

Agora, a coluna **Taxes** exibe a soma dos valores das taxas inseridas no Checkout (`Tax`) e das taxas criadas em **Promoções & Taxas** (`CustomTax`).

Para lojas que não utilizam taxas ou cuja soma dos valores seja 0, o relatório gerado vai exibir a coluna **Taxes** vazia, para não impactar a experiência de clientes que utilizam essa estrutura de dados.

## Por que fizemos essa mudança?

O relatório anterior não apresentava a informação de taxas customizadas criadas em **Promoções & Taxas** (`CustomTax`), impossibilitando que lojistas que utilizam essa configuração soubessem o valor total de impostos que cobram.

Com a mudança, o valor total de impostos aplicados a cada pedido é informado na coluna **Taxes**, o que contribui para uma precisão maior dos dados para o romaneio da loja.

## O que precisa ser feito?

Nenhuma ação é necessária, a alteração é automática para todas as lojas VTEX. Todos os relatórios de pedidos gerados a partir de hoje já correspondem a essa modificação.

Para entender como realizar a exportação de pedidos, leia o tutorial [Exportação de pedidos no Gerenciamento de pedidos](https://help.vtex.com/pt/tutorial/exportando-pedidos-no-gerenciamento-de-pedidos--tutorials_6417) e para saber mais sobre a estrutura do relatório de pedidos, confira o artigo [Relatório de pedidos](https://help.vtex.com/pt/tutorial/planilha-de-pedidos--31m1ewsmsEe0WS4So2aGMY?&utm_source=autocomplete).


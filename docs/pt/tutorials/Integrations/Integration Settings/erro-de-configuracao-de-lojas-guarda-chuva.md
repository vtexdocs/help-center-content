---
title: 'Erro de configuração de lojas guarda chuva'
id: 16PIrnBPonKv5Eb3SBdKmq
status: PUBLISHED
createdAt: 2021-08-05T20:07:28.907Z
updatedAt: 2021-09-03T22:26:40.776Z
publishedAt: 2021-09-03T22:26:40.776Z
firstPublishedAt: 2021-08-06T23:27:47.273Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: configuration-errors-in-mercado-libre-accounts-with-multiple-official-stores
locale: pt
legacySlug: erro-de-configuracao-de-lojas-guarda-chuva
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ Caso você possua lojas oficiais no Mercado Livre, essa documentação pode ser relevante. O Mercado Livre possui parâmetros próprios para certificar sellers para serem lojas oficiais. Para mais informações, entre em contato com o seu consultor do Mercado Livre.

Chamamos de lojas guarda chuva as contas no [Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/51oWBHvVxSs8eAwLQhSbSd) que possuem múltiplas [lojas oficiais](https://www.mercadolivre.com.br/lojas-oficiais/catalogo) vinculadas ao mesmo usuário no Mercado Livre. A arquitetura funciona da seguinte forma: o [seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w) integra suas [subaccounts](https://help.vtex.com/pt/tutorial/o-que-e-store-name--3gh9mTNeMgs6Qe44e8IqQK?&utm_source=autocomplete) com o Mercado Livre de forma que as lojas oficiais do usuário do Mercado Livre ficam vinculadas às subaccounts do seller.

Porém essa arquitetura, envolvendo subaccounts e as lojas criadas no Mercado Livre podem gerar um erro na importação de produtos da integração. Nesse artigo iremos orientar os usuários para solucionar esse problema na importação de produtos que ocorre na integração do Mercado Livre em determinadas configurações de sellers e subaccounts.

O erro de configuração de lojas guarda chuva ocorre quando o seller VTEX possui duas ou mais subaccounts e utiliza cada uma delas para integrar com um único usuário do Mercado Livre. 

Nesse cenário, caso um cliente do Mercado Livre faça uma compra com dois ou mais produtos de diferentes lojas oficiais do seller, o pedido não será importado na VTEX em nenhuma das subaccounts. Isto ocorre porque os produtos do carrinho pertencem à subaccounts diferentes, e o pedido estaria dividido entre as duas.

A VTEX não recomenda esse tipo de configuração porque os pedidos nesse cenário não irão integrar.

![cenario problema](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/erro-de-configuracao-de-lojas-guarda-chuva_1.JPG)

Entretanto, existem dois cenários na integração das lojas VTEX com o Mercado Livre que podem evitar que esse conflito aconteça. Para isso é necessário que sua loja tenha as seguintes configurações:

- [Subaccount única VTEX e um único usuário Mercado Livre](#subaccount-unica-vtex-e-um-unico-usuario-mercado-livre).
- [Múltiplas subaccounts VTEX e múltiplas lojas oficiais](#multiplas-subaccounts-vtex-e-multiplas-lojas-oficiais)

## Subaccount única VTEX e um único usuário Mercado Livre

O seller utiliza uma única subaccount na VTEX e integra com uma única conta no Mercado Livre. Essa conta no Mercado Livre pode gerenciar duas ou mais lojas oficiais. 

Nesse cenário, caso um usuário faça uma compra no Mercado Livre com dois ou mais produtos no carrinho das diferentes lojas oficiais da conta do seller, o pedido será importado na VTEX sem problemas. Isso acontece porque os produtos que estão sendo anunciados no Mercado Livre fazem parte do catálogo de uma única subaccount VTEX.

![cenario ideal](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/erro-de-configuracao-de-lojas-guarda-chuva_2.JPG)

## Múltiplas subaccounts VTEX e múltiplas lojas oficiais

O seller VTEX possui duas ou várias sub accounts e utiliza cada uma delas para integrar com lojas oficiais diferentes no Mercado Livre. 

Nesse cenário, caso um usuário faça uma compra no Mercado Livre com dois ou mais produtos no mesmo carrinho pertencentes a subaccounts diferentes, os pedidos serão integrados normalmente em cada sub account na VTEX. Isso ocorre já que cada pedido gerado no Mercado Livre está vinculado a uma subaccount diferente na VTEX, portanto  os produtos vendidos coincidem com o catálogo de cada subaccount.

![cenario atual](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Integration Settings/erro-de-configuracao-de-lojas-guarda-chuva_3.JPG)

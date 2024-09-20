---
title: 'Quando um preço agendado é atingido, não reativa o preço fixo'
id: 75RY8MaDPaiOGOoY2mwycg
status: PUBLISHED
createdAt: 2017-06-23T16:23:03.818Z
updatedAt: 2022-12-22T15:18:16.938Z
publishedAt: 2022-12-22T15:18:16.938Z
firstPublishedAt: 2017-06-23T17:43:31.782Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Pricing & Promotions
slug: quando-um-preco-agendado-e-atingido-nao-reativa-o-preco-fixo
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Contamos com dois preços: um preço fixo que sempre permanece vigente e um preço agendado que tem validade para uma faixa limitada de datas, que estará ativo juntamente com o preço fixo.

![precio-agendado-no-reactiva](//images.contentful.com/alneenqid6w5/28x1hbS9l2QgsyIcYyUoSM/bf1eecf7c1a429f8fc0070040f6fc2ac/precio-agendado-no-reactiva.png)

Quando o preço agendado é atingido, deveria reativar o preço fixo, já que será o novo e único preço válido para esse SKU. Esta reativação ocorre para a maioria dos preços, mas não está ocorrendo em todos os casos e o produto fica publicado na web, geralmente com um preço mais econômico do que o preço fixo que não foi reativado automaticamente.

Reindexar manualmente o preço tampouco funciona. Costumam ser muitos os casos em que o preço fixo não é reativado, devendo  ser revisados, um a um, todos os preços para saber em quais atualizar a data manualmente, para que seja mostrado o novo preço.


## Simulação

1. Acessar a página do preço do SKU ingressando em {NOMEDALOJA}.vtexcommercestable.com.br/admin/Site/SkuTabelaValor.aspx?id={IdDelSKU};
2. Criar um **preço AA** para uma política comercial XX, válido do ano 1000 até o ano 4000;
3. Criar um segundo **preço BB** mais baixo que o preço AA, para a mesma política comercial XX, válido de ontem até amanhã;
4. Quando o preço BB vencer, o preço AA deveria ser reativado e ficar visível na ficha do produto (cenário intermitente).

## Workaround

Este é um cenário intermitente. A solução momentânea é modificar a data do preço fixo (marcado como válido até 1/1/4000) e salvá-lo. Logo depois o preço do produto publicado será reindexado e atualizado.


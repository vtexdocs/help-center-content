---
title: 'Snippets ricos em produtos que não utilizam o formato AggregateOffer para ofertas com mais de um vendedor'
id: pA3jkQ7qHjWXul7ZsBLy2
status: PUBLISHED
createdAt: 2023-02-14T12:45:02.825Z
updatedAt: 2023-02-14T12:45:03.660Z
publishedAt: 2023-02-14T12:45:03.660Z
firstPublishedAt: 2023-02-14T12:45:03.660Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: snippets-ricos-em-produtos-que-nao-utilizam-o-formato-aggregateoffer-para-ofertas-com-mais-de-um-vendedor
locale: pt
kiStatus: Backlog
internalReference: 753505
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um único produto é associado a várias ofertas (por exemplo, o mesmo par de sapatos é oferecido por comerciantes diferentes), então a AggregateOffer pode ser usada para enviar esta informação para o google de uma forma que seu rastreador não rejeitará a oferta por preços errados.

Atualmente a VTEX está utilizando apenas o formato Oferta.

Isto faz com que algumas ofertas sejam rejeitadas devido a preços errados comparando as informações enviadas e as informações apresentadas no frontend da loja.

Referência doc: https://schema.org/AggregateOffer


##

## Simulação



1. Ter uma oferta associada a múltiplos vendedores;
2. Usar os snippets ricos em produtos da VTEX;
3. Verifique se apenas os preços do vendedor 1 estão sendo enviados;
4. Verifique se algumas ofertas podem ser rejeitadas no comerciante da conta no google.


##

## Workaround


Nenhuma solução.






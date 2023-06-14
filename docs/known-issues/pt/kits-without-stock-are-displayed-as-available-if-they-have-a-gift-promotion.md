---
title: 'Kits sem estoque são exibidos como disponíveis caso tenham promoção de brinde'
id: 5xHAJ10n3qMSOGECegw8Yo
status: PUBLISHED
createdAt: 2018-04-24T21:43:13.080Z
updatedAt: 2022-12-22T20:45:17.620Z
publishedAt: 2022-12-22T20:45:17.620Z
firstPublishedAt: 2018-04-24T21:54:44.236Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: kits-sem-estoque-sao-exibidos-como-disponiveis-caso-tenham-promocao-de-brinde
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Kits aplicáveis a promoções de brinde, mas que estão sem estoque, são incorretamente exibidos como disponíveis nas prateleiras e páginas de produto.

Apesar disso, são corretamente indexados como indisponíveis, e não é possível seguir com a compra após se chegar ao carrinho, que indicará indisponibilidade.

## Simulação

- Cadastrar um kit que tenha um ou mais componentes com estoque esgotado.
- Criar uma promoção de brinde para esse kit.
- Observar seu comportamento na página do produto.

## Workaround

Uma forma de evitar este cenário é optar por não exibir os produtos esgotados, conforme cadastro do produto. Como eles são indexados corretamente, ao não identificar disponibilidade do item, este ficará inacessível.


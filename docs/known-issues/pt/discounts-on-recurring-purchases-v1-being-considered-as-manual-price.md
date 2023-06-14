---
title: 'Descontos em compras de recorrencias (V1) sendo considerados como Manual Price, criando alçadas indevidamente para lojas que possuem alçada e manual price ativos'
id: 76a7i1rKyTwQIStPXgi23j
status: DRAFT
createdAt: 2019-03-28T17:12:52.959Z
updatedAt: 2020-02-03T22:56:10.552Z
publishedAt: 
firstPublishedAt: 2019-03-28T17:14:59.644Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_41
tag: OMS
slug: descontos-em-compras-de-recorrencias-v1-sendo-considerados-como-manual
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Na recorrência V1 quando pedidos possuem descontos sendo aplicados nos itens, os mesmos estão sendo preenchidos como manual price gerando alçadas indevidas. 
Com isso para esses pedidos seguirem o fluxo, hoje é necessário aprovar os mesmos no DO ou OMS.

__Importante: O bug ocorre apenas para lojas que possuem alçada e manual price ativos.__


## Simulação

Para simular o cenário a loja precisa ter alçada e manual price ativos
Criar promoção para pedidos recorrentes
Quando a recorrência for gerada (pedido recorrente) o desconto será considerado como manual price criando a alçada


## Workaround

Migrar para o sistema de assinaturas V2 onde o BUG foi tratado já que a versão V1 será extinta em breve.


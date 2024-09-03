---
title: 'O canal de vendas configurado nas Configurações B2B não é atribuído após a aprovação das Organizações'
id: 7kxMtk2YHJdk5uPdj5wBs5
status: PUBLISHED
createdAt: 2023-07-21T20:03:44.671Z
updatedAt: 2023-07-21T20:03:45.295Z
publishedAt: 2023-07-21T20:03:45.295Z
firstPublishedAt: 2023-07-21T20:03:45.295Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: o-canal-de-vendas-configurado-nas-configuracoes-b2b-nao-e-atribuido-apos-a-aprovacao-das-organizacoes
locale: pt
kiStatus: Backlog
internalReference: 866933
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O canal de vendas configurado nas configurações de organizações B2B não é salvo nos detalhes da organização.

## Simulação



- Configure um canal de vendas padrão nas configurações de organizações B2B;
- Criar uma solicitação de organização;
- Aprovar a solicitação da organização;
- Verifique os detalhes da organização; ela não terá nenhum canal de vendas atribuído

## Workaround



- Atribua o canal de vendas à organização por meio do administrador;
- Crie um acionador para o esquema da entidade da organização:

    "v-triggers": [{"name": "define-salesChannel-default", "active": true, "condition": "salesChannel is null", "action": { "type": "save" (salvar), "dataEntity" (entidade de dados): "organizations", "json": { "id": "{!id}", "salesChannel": "{adicione aqui o salesChannelId definido nas configurações de organizações B2B}" } } }]






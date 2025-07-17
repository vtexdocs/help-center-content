---
title: "O usuário ainda pode ver e acessar os recursos do CMS mesmo sem a permissão correta"
id: n2BmrCyzXD04sysczRuyt
status: PUBLISHED
createdAt: 2024-06-07T12:22:10.494Z
updatedAt: 2024-06-07T12:22:11.466Z
publishedAt: 2024-06-07T12:22:11.466Z
firstPublishedAt: 2024-06-07T12:22:11.466Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: o-usuario-ainda-pode-ver-e-acessar-os-recursos-do-cms-mesmo-sem-a-permissao-correta
locale: pt
kiStatus: Backlog
internalReference: 1046263
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se o usuário não tiver nenhuma das permissões do CMS, ele não deverá ser capaz de acessar ou mesmo ver os módulos do CMS. Mas isso não está acontecendo.

## Simulação


Tente acessar os módulos CMS usando um usuário que não tenha as seguintes permissões LM:

      CMS:

- Consulte o menu CMS na barra superior
- Configurações

GraphQL:
- API GraphQL do CMS

O usuário ainda poderá acessar e ver os recursos (mas não editá-los).



## Workaround


N/A






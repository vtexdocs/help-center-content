---
title: 'O comportamento do RefId não é consistente entre a API e a interface do usuário'
id: 4007iEJ8bCN96PBY0nsIB4
status: PUBLISHED
createdAt: 2023-09-29T13:11:04.826Z
updatedAt: 2023-10-20T13:41:48.679Z
publishedAt: 2023-10-20T13:41:48.679Z
firstPublishedAt: 2023-09-29T13:11:05.384Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: o-comportamento-do-refid-nao-e-consistente-entre-a-api-e-a-interface-do-usuario
locale: pt
kiStatus: Backlog
internalReference: 910050
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, temos dois comportamentos para o código refid: por meio da API, não é possível ser igual a outros produtos, mas por meio da interface do usuário, é possível inserir o mesmo valor que outros produtos já têm.

## Simulação



Criar um produto com um código redIf
Crie outro produto e tente usar o mesmo código refId que o outro; via API não será possível, mas via UI será

## Workaround



Se você precisar usar os mesmos refIds para produtos diferentes, insira-os por meio da interface do usuário.






---
title: 'Faststores não está funcionando corretamente no modo privado do Firefox'
id: 3SMQiZFYt8SSVlOJLIMYvH
status: PUBLISHED
createdAt: 2023-05-19T14:56:53.172Z
updatedAt: 2023-05-19T14:56:53.938Z
publishedAt: 2023-05-19T14:56:53.938Z
firstPublishedAt: 2023-05-19T14:56:53.938Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: faststores-nao-esta-funcionando-corretamente-no-modo-privado-do-firefox
locale: pt
kiStatus: Backlog
internalReference: 828685
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Há um bug no Mozilla Firefox, especialmente em um modo privado que afeta o armazenamento do indexedDB, e o Faststore depende disso para funcionar corretamente. Com isso, o site inteiro não funcionará porque depende das informações do indexedDB para o uso adequado.

Aqui estão algumas perguntas frequentes relacionadas ao problema:

https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=1267582
https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=781982


## Simulação




- Abra uma loja na Faststore na guia anônima.
- Você pode validar que há uma limitação na criação do armazenamento indexado doDB, sobrecarregando a operação do armazenamento

## Workaround


Não






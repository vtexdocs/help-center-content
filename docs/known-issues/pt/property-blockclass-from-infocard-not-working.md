---
title: 'Bloqueio de propriedadeClass de infoCard não funciona'
id: LTEEWCaZx2unBWSEJFDw6
status: PUBLISHED
createdAt: 2023-01-31T19:02:03.835Z
updatedAt: 2024-07-01T18:48:42.227Z
publishedAt: 2024-07-01T18:48:42.227Z
firstPublishedAt: 2023-01-31T19:02:04.299Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: bloqueio-de-propriedadeclass-de-infocard-nao-funciona
locale: pt
kiStatus: No Fix
internalReference: 743730
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Infocard tem um adereço chamado BlockClass para adicionar classes personalizadas ao componente, mas esta propriedade não está funcionando


##

## Simulação



Abra seu componente infoCard, adicione o bloco de aderênciaClass
Verifique seus elementos no DOM e você não encontrará nenhum elemento de infocard com a classe adicionada


##

## Workaround


Construa seu próprio infocard com nossos componentes vtex.flex-layout, vtex.image e vtex.rich-text, isso lhe dará mais flexibilidade para construir seu infocard






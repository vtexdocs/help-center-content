---
title: "O preenchimento automático da pesquisa fornece um URL desatualizado após a navegação pelas sugestões"
id: 168oT3vpuAcRdZbE7sahtF
status: PUBLISHED
createdAt: 2024-01-19T01:28:08.775Z
updatedAt: 2024-01-19T01:28:09.627Z
publishedAt: 2024-01-19T01:28:09.627Z
firstPublishedAt: 2024-01-19T01:28:09.627Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: o-preenchimento-automatico-da-pesquisa-fornece-um-url-desatualizado-apos-a-navegacao-pelas-sugestoes
locale: pt
kiStatus: Backlog
internalReference: 968604
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No componente "barra de pesquisa" com "autocomplete-result-list.v2", passar o mouse sobre as sugestões de pesquisa também altera os produtos sugeridos, bem como o texto de "ver todos os {n} produtos" para mencionar a pesquisa selecionada, mas o hiperlink de "ver todos" segue o termo de pesquisa original em vez do selecionado.

## Simulação



- pesquisar um termo parcial
- passe o mouse sobre os termos sugeridos
- clique em "ver todos os produtos

## Workaround


N/A


---
title: "A alteração de sinônimos de unidirecional para bidirecional não funciona"
id: 2r4Bpw3WEk6BaaJOJb1WxM
status: PUBLISHED
createdAt: 2024-12-11T15:03:46.398Z
updatedAt: 2024-12-11T15:03:47.251Z
publishedAt: 2024-12-11T15:03:47.251Z
firstPublishedAt: 2024-12-11T15:03:47.251Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: a-alteracao-de-sinonimos-de-unidirecional-para-bidirecional-nao-funciona
locale: pt
kiStatus: Backlog
internalReference: 1149205
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A alteração do tipo de sinônimo de unidirecional para bidirecional não está funcionando. Depois de salvar a alteração, ele retornará ao tipo anterior.

## Simulação



- Crie um sinônimo unidirecional com termos em ambos os campos e salve.
- Edite o tipo de sinônimo para bidirecional e salve.
- Volte para editar o sinônimo e observe que ele ainda é unidirecional, mas com os termos do segundo campo copiados para o primeiro campo.



## Workaround


Apague manualmente o segundo campo ("_O que a pesquisa retorna além disso_") antes de alterar o tipo para unidirecional.






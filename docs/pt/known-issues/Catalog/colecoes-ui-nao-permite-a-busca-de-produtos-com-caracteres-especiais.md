---
title: "Coleções UI não permite a busca de produtos com caracteres especiais"
id: 3O9C8uOskw2UJYdBVUCFw
status: PUBLISHED
createdAt: 2022-04-07T20:36:02.541Z
updatedAt: 2022-11-25T21:43:06.394Z
publishedAt: 2022-11-25T21:43:06.394Z
firstPublishedAt: 2022-04-07T20:36:03.017Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: colecoes-ui-nao-permite-a-busca-de-produtos-com-caracteres-especiais
locale: pt
kiStatus: Backlog
internalReference: 344451
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A nova coleção UI, `.myvtex.com/admin/collections', não permite que os usuários procurem produtos com caracteres especiais.



## Simulação



- Procure qualquer produto com apóstrofos, aspas, pontos... na IU de coleções ao adicionar produtos à coleção;
- A Busca não encontrará produtos com caracteres especiais;



## Workaround


- Pesquisar nomes de produtos antes do caracter especial (exemplo: não é possível digitar `'`` na busca);
- Adicionar produtos a Colecções utilizando API;
- Adicionar produtos a Colecções utilizando o Legacy Collections UI.


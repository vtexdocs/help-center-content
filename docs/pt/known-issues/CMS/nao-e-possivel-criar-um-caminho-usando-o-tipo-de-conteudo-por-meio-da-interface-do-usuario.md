---
title: "Não é possível criar um caminho usando o tipo de conteúdo por meio da interface do usuário"
id: 3jVjkZYCATrnDNhR0IKSEA
status: PUBLISHED
createdAt: 2023-10-23T13:19:09.970Z
updatedAt: 2024-07-01T18:49:16.580Z
publishedAt: 2024-07-01T18:49:16.580Z
firstPublishedAt: 2023-10-23T13:19:10.738Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: nao-e-possivel-criar-um-caminho-usando-o-tipo-de-conteudo-por-meio-da-interface-do-usuario
locale: pt
kiStatus: No Fix
internalReference: 923619
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se tentarmos criar um caminho usando tipos de conteúdo por meio da interface do usuário, a página não funcionará. Ela só funcionará se a criarmos por meio do tema.

## Simulação



- Crie um caminho usando um tipo de conteúdo no módulo Pages, por exemplo, `storeTest/:test_id`
- Salve-o
- Tente acessá-lo no front
- Não funcionará



## Workaround


Se adicionarmos o caminho usando o tipo de conteúdo por meio do tema, a página aparecerá na interface do usuário e funcionará






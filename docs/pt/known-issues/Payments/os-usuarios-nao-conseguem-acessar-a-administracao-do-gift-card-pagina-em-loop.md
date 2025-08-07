---
title: "Os usuários não conseguem acessar a administração do Gift Card (página em loop)"
id: 5FowAAf8VulbVXcQIeSmHd
status: PUBLISHED
createdAt: 2024-05-02T15:26:57.386Z
updatedAt: 2024-05-02T15:26:58.463Z
publishedAt: 2024-05-02T15:26:58.463Z
firstPublishedAt: 2024-05-02T15:26:58.463Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: os-usuarios-nao-conseguem-acessar-a-administracao-do-gift-card-pagina-em-loop
locale: pt
kiStatus: Backlog
internalReference: 1025971
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se os usuários bloquearem cookies de terceiros (configurações do navegador), eles não poderão acessar o módulo Gift Card no admin, pois há um cookie definido em outro domínio da VTEX.

## Simulação


Depois de bloquear os cookies de terceiros, é possível simular o problema mencionado acima. Você também pode inspecionar a página (ferramentas de desenvolvedor) e ir para a guia Rede (procure por Vale.aspx), haverá um código de status 302

## Workaround


Coloque na lista de permissões os cookies de terceiros presentes no domínio myvtex.com.





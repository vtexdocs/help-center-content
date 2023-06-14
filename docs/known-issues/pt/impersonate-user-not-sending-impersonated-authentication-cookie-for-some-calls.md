---
title: 'Usuário imigrante não envia cookie de autenticação imersonalizado para algumas chamadas'
id: 3e5CZqPbsTRbhDz8W1c0p4
status: PUBLISHED
createdAt: 2023-04-13T21:24:06.328Z
updatedAt: 2023-04-13T21:24:06.788Z
publishedAt: 2023-04-13T21:24:06.788Z
firstPublishedAt: 2023-04-13T21:24:06.788Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: usuario-imigrante-nao-envia-cookie-de-autenticacao-imersonalizado-para-algumas-chamadas
kiStatus: Backlog
internalReference: 790185
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você está em acesso de telemarketing e tenta imitar o acesso de um usuário que tem acesso a uma política comercial com restrições, algumas camadas de gráficos não estão enviando o cookie do usuário imitado, causando uma resposta de acesso proibido das APIs


##

## Simulação



1. Criar um usuário administrador com acesso ao call center
2. Criar um TP com uma restrição
3. Criar um usuário na conta e conceder acesso à condição de TP fechado através dos dados mestre
4. Entre na conta com o usuário da central de atendimento criado no passo 1
5. Personificar o usuário criado no passo 3
6. Verifique qualquer PDP

O comportamento esperado não é encontrado na página, devido à autenticação utilizada não é permitido acessar o TP do usuário impessoal e não estamos enviando a sessão impessoal para algumas chamadas Graphql


##

## Workaround




1. Criar um usuário na loja com o mesmo e-mail a partir do acesso do administrador
2. Conceder acesso à condição tp para o e-mail do administrador

Com isso, você poderá acessar as condições de usuário do imigrante






---
title: "Os usuários não podem acessar o sistema Master Data/CRM quando tentam fazer o login por autenticação SAML"
id: 152NR7uX8iEUnKWu9gFR7h
status: PUBLISHED
createdAt: 2023-04-13T14:29:02.684Z
updatedAt: 2025-02-05T19:56:32.412Z
publishedAt: 2025-02-05T19:56:32.412Z
firstPublishedAt: 2023-04-13T14:29:03.148Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: os-usuarios-nao-podem-acessar-o-sistema-master-datacrm-quando-tentam-fazer-o-login-por-autenticacao-saml
locale: pt
kiStatus: Backlog
internalReference: 465652
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O usuário não pode acessar o sistema Master Data/CRM via autenticação SAML
O sistema Master Data/CRM usa outro domínio (vtexcrm.com.br) e a solução SAML foi projetada para redirecionar para o domínio myvtex.com.



##

## Simulação


Acesso ao administrador usando autenticação SAML
Clique em Master Data/CRM na opção de menu.
O sistema mostrará novamente a opção de login.
O usuário seleciona o login SAML
Após confirmar o login SAML, o sistema tentará acessar o sistema CRM, mas
a opção de login é mostrada novamente


##

## Workaround


O usuário precisa selecionar outro tipo de autenticação, como login e senha ou código de acesso.






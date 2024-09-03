---
title: 'Os usuários não podem acessar o sistema Master Data/CRM quando tentam fazer o login por autenticação SAML'
id: 152NR7uX8iEUnKWu9gFR7h
status: PUBLISHED
createdAt: 2023-04-13T14:29:02.684Z
updatedAt: 2023-04-13T14:29:03.148Z
publishedAt: 2023-04-13T14:29:03.148Z
firstPublishedAt: 2023-04-13T14:29:03.148Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: os-usuarios-nao-podem-acessar-o-sistema-master-datacrm-quando-tentam-fazer-o-login-por-autenticacao-saml
locale: pt
kiStatus: Backlog
internalReference: 465652
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


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






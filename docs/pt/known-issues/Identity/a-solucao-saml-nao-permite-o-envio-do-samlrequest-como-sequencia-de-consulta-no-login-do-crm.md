---
title: 'A solução SAML não permite o envio do SAMLRequest como seqüência de consulta no login do CRM'
id: 55LggncuX9oIB0PNS6q7jY
status: PUBLISHED
createdAt: 2023-04-13T14:23:33.505Z
updatedAt: 2023-04-13T14:23:34.141Z
publishedAt: 2023-04-13T14:23:34.141Z
firstPublishedAt: 2023-04-13T14:23:34.141Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: the-saml-solution-doesnt-allow-sending-the-samlrequest-as-query-string-in-the-crm-login
locale: pt
kiStatus: Backlog
internalReference: 789146
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Alguns provedores SAML precisam receber parâmetros como string de consulta, mas nossa solução SAML não permite o envio desses parâmetros (como parâmetros SAMLRequest e SAMLResponse) como string de consulta no login do CRM porque o sistema CRM usa uma versão do sistema de login, que não suporta esse recurso.


##

## Simulação


Clique em Master Data/CRM na opção de menu.
O sistema mostrará novamente a opção de login.
O usuário seleciona o login SAML como SSO AZURE.
Uma mensagem de erro é exibida informando o parâmetro SAMLRequest é necessário.


##

## Workaround


O usuário precisa selecionar outro tipo de autenticação, tal como login e senha ou código de acesso.






---
title: 'A função de configurações do CMS não está funcionando como esperado'
id: 1xAUvtkD2gbvc3yaoYXT2d
status: PUBLISHED
createdAt: 2023-06-19T12:31:33.137Z
updatedAt: 2023-06-19T12:31:33.699Z
publishedAt: 2023-06-19T12:31:33.699Z
firstPublishedAt: 2023-06-19T12:31:33.699Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-funcao-de-configuracoes-do-cms-nao-esta-funcionando-como-esperado
locale: pt
kiStatus: Backlog
internalReference: 538706
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A função de configurações do CMS não está funcionando como esperado. Às vezes, o usuário não consegue acessar o CMS mesmo depois de ser adicionado à função.
Outro comportamento inesperado é que outros módulos continuam disponíveis para a função CMS, mesmo sem as permissões necessárias.

## Simulação



- Crie uma função no aplicativo License Manager Roles que dê acesso apenas a:
  - Menu CMS na barra superior;
  - Configurações do CMS.

 ![](https://vtexhelp.zendesk.com/attachments/token/fbpObVoVdnEYGeYjd3GDh9Qqf/?name=image.png)


- Associe essa função a um usuário;
- Faça login com esse usuário e tente acessar o menu de configurações do CMS, mas não conseguirá.
- Verifique se os outros módulos continuam disponíveis

## Workaround


Para acessar o menu CMS, o usuário deve ser um Superadministrador.






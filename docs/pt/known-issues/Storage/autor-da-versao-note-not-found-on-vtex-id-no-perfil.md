---
title: "Autor da versão 'Note: Not found on VTEX ID.' no perfil"
id: 0X6Aj6YdCXXfNweAkDS46
status: PUBLISHED
createdAt: 2023-10-04T21:48:14.699Z
updatedAt: 2023-10-04T22:14:45.195Z
publishedAt: 2023-10-04T22:14:45.195Z
firstPublishedAt: 2023-10-04T21:48:15.379Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: version-author-note-not-found-on-vtex-id-on-the-profile
locale: pt
kiStatus: Scheduled
internalReference: 914314
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando o cliente faz uma compra, o autor da versão recebe um ID de usuário (guid) ou um serviço, seguido pelo login/nome/descrição "`Note: Not found on VTEX ID.`" no perfil.
Esse comportamento não afeta o perfil ou a experiência do comprador, uma vez que se trata apenas da interface do usuário, e é possível verificar as informações pela API da versão.

## Simulação



- Acesse o CRM de dados mestre (por exemplo, https://my-account-here.vtexcrm.com.br);
- Acesse a guia Entidade de dados CL (Clientes):
- Selecione um documento e clique no ícone do olho para visualizar os dados;
- Clique no botão "_Alterar registro_";
- Abrir uma versão recente;
- Verifique o "_Version author_", que será um ID de usuário, e o nome "`Note: Not found on VTEX ID.`", por exemplo:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

- Verificação pela API Get version:
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

    "updatedBy_USER": "{\"Id\":\"d6d8269f-e7cc-4e4b-8b89-3b46a1407937\",\"Login\":\"vtex-service::checkout::stable\",\"Name\":null}",

## Workaround


Você pode verificar o autor usando nossas APIs:

- Listar versões
- Obter versão





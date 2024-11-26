---
title: 'Criar vendedor com informações adicionais está retornando um erro'
id: 4dbB48N1vHHdXjL1M1zANe
status: PUBLISHED
createdAt: 2023-01-26T17:12:54.701Z
updatedAt: 2023-02-06T20:34:14.426Z
publishedAt: 2023-02-06T20:34:14.426Z
firstPublishedAt: 2023-01-26T17:12:55.159Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: create-seller-with-additional-information-is-returning-an-error
locale: pt
kiStatus: Fixed
internalReference: 741110
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Ao tentar criar um vendedor através de Admin e preencher o formulário opcional Informações Adicionais, um erro é devolvido assim:
'O vendedor foi adicionado com sucesso, mas algumas informações não puderam ser salvas'.
 ![](https://vtexhelp.zendesk.com/attachments/token/FYe7irRht0psXP4PwkEH7fm05/?name=image.png)

Apesar da mensagem, o vendedor não foi realmente salvo.


##

## Simulação



1. Vá até a gerência de vendas e clique em criar novo vendedor;
2. Preencher todas as informações obrigatórias;
3. Preencher pelo menos uma informação que seja opcional na seção Informações adicionais;
4. 4. Verificar se a mensagem de erro aparecerá.


##

## Workaround


Primeiro crie o vendedor sem as Informações Adicionais.
Depois que o vendedor for criado com sucesso, volte à sua configuração e preencha as Informações Adicionais.






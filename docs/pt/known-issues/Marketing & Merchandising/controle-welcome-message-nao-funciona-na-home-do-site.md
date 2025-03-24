---
title: 'Controle Welcome Message não funciona na home do site'
id: 38WkIwnvReicEOu6eOccuY
status: PUBLISHED
createdAt: 2017-04-26T23:34:28.335Z
updatedAt: 2022-12-22T20:48:55.961Z
publishedAt: 2022-12-22T20:48:55.961Z
firstPublishedAt: 2017-04-26T23:44:20.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: welcome-message-control-doesnt-work-in-the-homepage
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O controle Welcome Message (`<vtex.cmc:welcomeMessage/>`) é responsável por renderizar o trecho de HTML que exibe a mensagem de boas vindas para o usuário, além do link de login. 

Ao copiar um Website Binding, percebemos que esse controle não aparece no template que é utilizado em mais de um website. Por exemplo, no template Home. 

## Simulação

- Entrar no módulo CMS
- Clicar na pasta Web Sites
- Clicar num Web Site
- Clicar na opção "Copiar Web Site"
- Configuar como deseja (nome do website, ligações etc.)
- Salvar Web Site
- No template da Home, utilizar o mesmo template que o outro Web Site utiliza
- Salvar o layout
- Acessar o template

## Workaround

Como solução de contorno, indicamos que seja utilizado, no nome do template, um prefixo ou sufixo identificando a intenção de exclusão. 

Exemplo:

De `Home` para `Lixo-Home`


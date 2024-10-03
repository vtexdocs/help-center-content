---
title: 'A preferência de login com senha não pode ser desfeita no Admin'
id: 5OPVJusw14TQzKdAVS71wx
status: PUBLISHED
createdAt: 2024-04-22T13:30:15.401Z
updatedAt: 2024-05-06T20:40:26.631Z
publishedAt: 2024-05-06T20:40:26.631Z
firstPublishedAt: 2024-04-22T13:30:16.436Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: login-preference-with-password-cannot-be-undone-in-admin
locale: pt
kiStatus: Backlog
internalReference: 1020548
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando um usuário faz logon na plataforma VTEX pela primeira vez (Admin), ele é solicitado a escolher sua preferência de login para a próxima vez que fizer logon. Em seguida, ele pode escolher entre digitar seu endereço de e-mail e senha ou digitar um código que será enviado para seu endereço de e-mail;

No entanto, quando o usuário opta por inserir seu endereço de e-mail e senha, ele não pode desfazer essa escolha, pois é uma escolha irrevogável no nível da interface do usuário, e é necessária uma ação sistêmica para desfazer essa escolha.

## Simulação


**NOTA**: Para simular esse cenário, você deve fazer login pela primeira vez;

Faça login no admin

Digite seu endereço de e-mail e crie uma senha;

Nesse momento, será perguntado se você deseja continuar recebendo o código de acesso ou se deseja que o sistema sempre solicite seu endereço de e-mail e senha.

Solicite que você sempre faça login usando seu endereço de e-mail e senha.

Na próxima vez que fizer login, não será possível desfazer sua escolha de login e sempre serão solicitados seu endereço de e-mail e senha

## Workaround


Para que o usuário possa fazer uma nova escolha, é necessário solicitar à equipe de engenharia que revogue a preferência salva no perfil do usuário, de modo que, em seu próximo login, ele seja questionado novamente sobre sua preferência de login e possa fazer uma nova escolha






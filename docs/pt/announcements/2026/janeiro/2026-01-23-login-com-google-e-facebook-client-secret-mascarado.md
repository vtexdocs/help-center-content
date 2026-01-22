---
title: 'Login com Google e Facebook: Client Secret agora é mascarado'
id: 
status: PUBLISHED
createdAt: 2026-01-21T00:00:00.000Z
updatedAt: 2026-01-21T00:00:00.000Z
publishedAt: 2026-01-21T00:00:00.000Z
contentType: updates
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: 2026-01-23-login-with-google-and-facebook-client-secret-masked
locale: pt
legacySlug: 
announcementImageID: 'undefined'
announcementSynopsisPT: 'Os Client Secrets dos logins com Google e Facebook agora são mascarados, exibindo apenas os 3 últimos caracteres.'
---

Para reforçar a segurança das integrações de login social, o campo **Client Secret** das configurações de [login com Google e Facebook](https://help.vtex.com/pt/docs/tutorials/configurar-login-com-facebook-e-google) agora é exibido de forma mascarada no Admin VTEX.

## O que mudou?

Após configurar o login com Google ou Facebook, o campo **Client Secret** deixa de ser exibido por completo em **Configurações da conta \> Autenticação**.

Ao acessar novamente a configuração, os usuários administrativos poderão visualizar apenas os 3 últimos caracteres da chave, evitando a exposição da credencial.

A mudança afeta apenas a visualização do dado e não altera o funcionamento da autenticação.

## Por que fizemos essa mudança?

Para reforçar a segurança das lojas, reduzindo o risco de exposição indevida de credenciais sensíveis e protegendo as integrações de autenticação contra acessos não autorizados.

## O que precisa ser feito?

Nenhuma ação é necessária. A atualização será aplicada automaticamente para todas as lojas.
Para mais detalhes sobre a configuração de login social, acesse:

* [Configurar login com Facebook e Google](https://help.vtex.com/pt/docs/tutorials/configurar-login-com-facebook-e-google)
* [Cadastrar Client Id e Client Secret para login com Google](https://help.vtex.com/docs/tutorials/cadastrar-client-id-e-client-secret-para-login-com-google)
* [Cadastrar Client Id e Client Secret para login com Facebook](https://help.vtex.com/docs/tutorials/cadastrar-client-id-e-segredo-do-cliente-para-login-com-facebook)

---
title: 'Como meu cliente pode fazer login na minha loja?'
id: 3FCNpwbpZe0U4auiI4CC0C
status: PUBLISHED
createdAt: 2018-10-15T21:25:25.230Z
updatedAt: 2021-10-19T16:41:58.408Z
publishedAt: 2021-10-19T16:41:58.408Z
firstPublishedAt: 2018-10-15T21:30:09.527Z
contentType: tutorial
productTeam: Identity
author: authors_59
slug: como-meu-cliente-pode-fazer-login-na-minha-loja
legacySlug: como-meu-cliente-pode-fazer-login-na-minha-loja
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

Existem algumas situações em que o cliente da sua loja precisa fazer login para conseguir visualizar informações personalizadas. Abaixo, listamos os cenários mais comuns:

- Acesso à área de pedidos do cliente (__Meus Pedidos__)
- Acesso aos dados de cadastro do cliente
- Acesso a lojas B2B 
- Acesso a lojas B2C com preços diferenciados para um grupo de clientes

O objetivo deste artigo é mostrar como o cliente da sua loja deve fazer login numa loja VTEX.

## Tipos de Login

Ao clicar em um link para se autenticar, o cliente verá a tela de login.

![vtex-id-pt](//images.ctfassets.net/alneenqid6w5/32ihh602XeY6WyECG6YkwG/d7e784ef2c14aad7a01faef0e94f5c19/vtex-id-en.png)

Existem três formas padrão de se fazer login numa loja VTEX:

1. [__Receber chave de acesso rápido por email__](#receber-chave-de-acesso-rapido-por-email)
2. [__Entrar com email e senha__](#entrar-com-email-e-senha)
3. [__Login por rede social__](#login-por-rede-social)

### Receber chave de acesso rápido por email

Este tipo de login __envia um token de acesso para o e-mail do usuário__ para que ele possa se autenticar.

Para o cliente fazer login por esse método, ele deve seguir os passos abaixo:

1. Na tela de login, o usuário deve clicar em __Receber chave de acesso rápido por email__
2. Na tela seguinte, o usuário deve preencher seu email e clicar no botão __Confirmar__ ![fill-mail-pt](//images.ctfassets.net/alneenqid6w5/5OXLHK0kY8aqCOuyuuaayQ/4667578a18947906d39ed393c5d8f56f/fill-mail-pt.png)
3. __Um token de acesso será enviado para o email informado no passo anterior__. Caso o cliente não tenha recebido o e-mail, peça que ele verifique se digitou o email corretamente. Além disso, é necessário que o cliente verifique o lixo eletrônico para garantir que a chave de acesso não tenha caído no filtro de *spam*. O token possui 6 números. ![code-pt](//images.ctfassets.net/alneenqid6w5/5eqO3wQ7MImsaMGOeK6Gk8/eff44ac34f23646467b09f389394eb33/code-pt.png)
4. Retorne à tela de login e __digite a chave de acesso__ recebida no passo anterior e clique em __Entrar__ ![fill-access-token-pt](//images.ctfassets.net/alneenqid6w5/1a4ACAuZt0koYYW8myAqUQ/0ac63d1ce81e2bd8f57d8e6dc68c0b7c/fill-access-token-pt.png)

### Entrar com email e senha

Este tipo de login __solicita email e senha__ para que o cliente possa se autenticar.

- Caso o cliente já possua email e senha, basta clicar em __Entrar com email e senha__, preencher o email, preenchar a senha e clicar em __Entrar__

- Caso o cliente precise __cadastrar uma senha__, ele deve seguir os passos abaixo:

1. Na tela de login, o usuário deve clicar em __Entrar com email e senha__
2. Na tela seguinte, o usuário deve clicar em  __Não tem uma senha? Cadastre agora__ ![register-password-pt](//images.ctfassets.net/alneenqid6w5/2sE6VwOjqAoAQsKGemwCGs/3f61e50940015953828a9248e00b8568/register-password-pt.png)
3. O usuário deve preencher seu email e clicar no botão __Confirmar__ ![fill-mail-pt](//images.ctfassets.net/alneenqid6w5/5OXLHK0kY8aqCOuyuuaayQ/4667578a18947906d39ed393c5d8f56f/fill-mail-pt.png)
4. Na tela seguinte, o usuário deve escrever sua nova senha nos campos __Nova senha__ e __Confirmar nova senha__ e, então, clicar no botão __Cadastrar nova senha__ ![register-new-password-pt](//images.ctfassets.net/alneenqid6w5/2gqFHdXAxauM0Mkooqyau/ef26bb6203e301e7c2cc8d6aa26e0a2a/register-new-password-pt.png)
5. __Um token de acesso será enviado para o email informado no passo anterior__. Caso o cliente não tenha recebido o e-mail, peça que ele verifique se digitou o email corretamente. Além disso, é necessário que o cliente verifique o lixo eletrônico para garantir que a chave de acesso não tenha caído no filtro de *spam*. O token possui 6 números. ![code-pt](//images.ctfassets.net/alneenqid6w5/5eqO3wQ7MImsaMGOeK6Gk8/eff44ac34f23646467b09f389394eb33/code-pt.png)
6. Retorne à tela de login e __digite a chave de acesso__ recebida no passo anterior e clique em __Alterar senha__ ![change-password-pt](//images.ctfassets.net/alneenqid6w5/mbczqOea2GsMYaYeaSeSK/365e6278b0e1ed300866a47661af1fca/change-password-pt.png)    

### Login por rede social

É possível incluir opções de login por rede social utilizando a conta do Google ou do Facebook. Para saber como incluir essas opções, leia o artigo [Configurar login com Facebook e Google](https://help.vtex.com/pt/tutorial/configuring-login-with-facebook-and-google--tutorials_513).

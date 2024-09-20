---
title: 'Configurar login com Facebook'
id: 3i8Cj8bC2tILvGRsdjlHly
status: PUBLISHED
createdAt: 2019-11-25T20:49:43.757Z
updatedAt: 2021-10-28T18:37:43.166Z
publishedAt: 2021-10-28T18:37:43.166Z
firstPublishedAt: 2020-01-13T14:33:41.637Z
contentType: trackArticle
productTeam: Identity
slug: configurar-login-com-facebook
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: contas-e-permissoes
---

Na VTEX, o que identifica o cliente no sistema é seu email. No entanto, caso ele queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele confirme a **propriedade do e-mail** em questão.
Para isso, são oferecidas algumas alternativas, entre elas o **Facebook**. 

## Cadastrar Client Id e Client Secret para login com Facebook  

Antes da configuração na VTEX, é preciso configurar o registro no Facebook. Para fazer isso, siga nossas instruções no [artigo sobre cadastro de client id e client secret para login no Facebook](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook?locale=pt). 

## Configurar login na VTEX

Após a configuração no Facebook, é preciso configurar essa opção de login na VTEX.

1.  No módulo de **Configurações da Conta**, acesse a aba de **Autenticação**.
2.  Clique no botão **Editar** correspondente ao Facebook.
3.  Preencha os campos com o _Client Id_ e o _Client Secret_ cadastrados no **Facebook**.
    ![Facebook OAuth PT](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/c07c9d4160e7273a0f5ad2a0cabd1bec/facebook_PT.png)
4.  Clique no botão **Salvar**. 
5.  Para validar se o login foi feito corretamente, acesse o front-end da sua loja e clique em **Login**.
6. Aparecerão as opções de login configuradas. Clique na opção **Facebook** e confira se o nome da sua loja é exibido.

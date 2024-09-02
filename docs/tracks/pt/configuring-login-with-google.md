---
title: 'Configurar login com Google'
id: 4XGFNDYBugBuEmazd0fJ3
status: PUBLISHED
createdAt: 2019-11-25T20:57:56.093Z
updatedAt: 2021-10-28T18:41:34.218Z
publishedAt: 2021-10-28T18:41:34.218Z
firstPublishedAt: 2020-01-13T14:32:39.158Z
contentType: trackArticle
productTeam: Identity
slug: configurar-login-com-google
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: contas-e-permissoes
---

Como explicamos no artigo anterior, na VTEX, o que identifica o cliente no sistema é seu email. Caso ele queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele confirme a **propriedade do e-mail** em questão.

Da mesma forma como o cliente pode fazer seu login via Facebook, ele pode também realizar o login por meio do **Google**.

## Cadastrar Client Id e Client Secret para login com Google

Antes da configuração na VTEX, é preciso configurar o registro no Google. Para isso, siga as instruções do [artigo sobre cadastro de Client Id e Client Secret para login no Google](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google?locale=pt).

## Configurar login na VTEX

Após a configuração no Google, é preciso configurar o login na VTEX.

1.  No módulo de **Configurações da Conta**, acesse a aba de **Autenticações**.
2.  Clique no botão **Editar** correspondente ao Google.
3.  Preencha os campos com o _Client Id_ e o _Client Secret_ cadastrados no **Google**.
    ![Google OAuth](https://images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/a508065cf5028f3a806edad050a0f6e6/google_PT.png)
4.  Clique no botão **Salvar**.
5.  Para validar se o login foi feito corretamente, acesse o front-end da sua loja e clique em **Login**.
6. Aparecerão as opções de login configuradas. Clique na opção **Google** e veja se o nome da sua loja é exibido.

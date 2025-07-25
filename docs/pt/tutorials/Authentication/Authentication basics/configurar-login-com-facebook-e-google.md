---
title: 'Configurar login com Facebook e Google'
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2025-02-28T15:23:10.253Z
publishedAt: 2025-02-28T15:23:10.253Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: configuring-login-with-facebook-and-google
locale: pt
legacySlug: integracao-google-e-facebook-para-login
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Na VTEX, não é necessário criar uma conta ou fazer login para realizar uma compra. No entanto, caso o cliente queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele comprove a posse do email em questão.

Nativamente, a plataforma oferece opções de login com email e senha e login com código de acesso enviado para o email do cliente. Também oferecemos integrações opcionais nativas com Google e Facebook, que necessitam ser configuradas. Este guia explica como configurar esses provedores de login:

1. [Obter credenciais junto aos provedores](#obter-credenciais-junto-aos-provedores)
2. [Configurar login com provedores](#configurar-login-com-provedores)
3. [Validar a configuração](#validar-a-configuracao) 

## Obter credenciais junto aos provedores

Antes de configurar nossa integração de login com o Google e Facebook, é necessário criar credenciais de OAuth 2.0 (protocolo utilizado para integração) nesses serviços. Para fazer isso, siga as instruções nos artigos indicados abaixo:

- [Facebook](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook--3R7rzXWG1GswWOIkYyy8SO)
- [Google](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google--1lBgDmetUM4goie6mYEOK6)

## Configurar login com provedores

Após a configuração no Facebook ou Google, é preciso configurar no Admin VTEX a opção de login pelo provedor desejado. Nos dois casos, você precisará ter em mãos o `Client ID` e o `Segredo do cliente` obtidos junto aos provedores.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.

    Você será direcionado(a) para a aba **Loja virtual** da página **Autenticação**, que lista os métodos de login disponíveis na sua loja.
    ![Lista Autenticação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Authentication%20basics/configurar-login-com-facebook-e-google_1.png)
3. Na linha do provedor de login desejado, clique em `Configurar`.
4. Preencha o formulário com o `Client ID` e o `Segredo do cliente` cadastrado e clique em `Salvar`.
    ![Facebook OAuth PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Authentication%20basics/configurar-login-com-facebook-e-google_2.png)
5. Na página **Autenticação**, ative o uso do provedor clicando no interruptor.  
    ![Lista Autenticação Switch On Highlight](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Authentication/Authentication%20basics/configurar-login-com-facebook-e-google_3.png)

## Validar a configuração

Após a configuração no Admin VTEX, recomendamos testar o login com o provedor escolhido através da URL final que seus usuários utilizarão para acessar sua loja. Ao tentar efetuar login, as opções referentes aos provedores ativos estarão disponíveis.

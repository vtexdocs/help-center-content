---
title: 'Configurar login com Facebook e Google'
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-10-20T19:35:59.221Z
publishedAt: 2023-10-20T19:35:59.221Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: configurar-login-com-facebook-e-google
locale: pt
legacySlug: integracao-google-e-facebook-para-login
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

Na VTEX, não é necessário criar uma conta ou fazer login para realizar uma compra. No entanto, caso o cliente queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele comprove a posse do email em questão.

Nativamente, a plataforma oferece opções de login com email e senha e login com código de acesso enviado para o email do cliente. Também oferecemos integrações opcionais nativas com Google e Facebook, que necessitam ser configuradas. Este guia explica como configurar esses provedores de login:

1. [Obter credenciais junto aos provedores](#obter-credenciais-junto-aos-provedores)
2. [Configurar login com provedores](#configurar-login-com-provedores)
3. [Validar a configuração](#validar-a-configuracao)

## Obter credenciais junto aos provedores

Antes de configurar nossa integração de login com o Google e Facebook, é necessário criar credenciais de OAuth 2.0 (protocolo utilizado para integração) nesses serviços. Para fazer isso, siga as instruções nos artigos indicados abaixo:

- [Facebook](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook--3R7rzXWG1GswWOIkYyy8SO)
- [Google](https://help.vtex.com/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google--1lBgDmetUM4goie6mYEOK6)

## Configurar login com provedores

Após a configuração no Facebook ou Google, é preciso configurar no Admin VTEX a opção de login pelo provedor desejado. Nos dois casos, você precisará ter em mãos o `Client ID` e o `Segredo do cliente` obtidos junto aos provedores.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.

    Você será direcionado(a) para a aba **Loja virtual** da página **Autenticação**, que lista os métodos de login disponíveis na sua loja.
    ![Lista Autenticação](https://images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/5656de06dc15a094bea726c3d7f6e370/autenticacao-pt.png)
3. Na linha do provedor de login desejado, clique em `Configurar`.
4. Preencha o formulário com o `Client ID` e o `Segredo do cliente` cadastrado e clique em `Salvar`.
    ![Facebook OAuth PT](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/1dcbc9286c0245740194026e19ba5c9b/1-login-fb-pt.png)
5. Na página **Autenticação**, ative o uso do provedor clicando no interruptor.  
    ![Lista Autenticação Switch On Highlight](https://images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/c079f95b7833c2bdba7e5a86860f03cd/switch_On_highlight_PT.png)

## Validar a configuração

Após a configuração no Admin VTEX, recomendamos testar o login com o provedor escolhido através da URL final que seus usuários utilizarão para acessar sua loja. Ao tentar efetuar login, as opções referentes aos provedores ativos estarão disponíveis.

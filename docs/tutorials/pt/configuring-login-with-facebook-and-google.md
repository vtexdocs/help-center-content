---
title: Configurar login com Facebook e Google
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-02-08T14:32:57.255Z
publishedAt: 2023-02-08T14:32:57.255Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: integracao-google-e-facebook-para-login
legacySlug: integracao-google-e-facebook-para-login
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

Na VTEX, não é necessário criar uma conta ou logar para fazer uma compra. No entanto, caso o cliente queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele  comprove a posse do e-mail em questão.

Nativamente, a plataforma oferece opções de login com Email & Senha e, também, Login com Código de Acesso enviado para o email do cliente. Também oferecemos integrações opcionais nativas com Google e Facebook, que necessitam ser configuradas.

## Faça o registro junto aos provedores

Antes de configurar nossa integração de login com o Google e Facebook, é necessário criar credenciais de OAuth 2.0 (protocolo utilizado para integração) nesses serviços. Para fazer isso, siga as instruções nos artigos indicados abaixo:

- [Facebook](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

## Configure na sua loja

Após a configuração no Facebook e/ou Google, é preciso configurar na sua loja a opção de login por esses dois provedores. Nos dois casos, você precisará ter em mãos o `Client ID` e o `Client Secret` cadastrados.

1. Acesse o módulo do VTEX ID pelo painel administrativo da loja no menu Configurações Da Conta > Autenticação;  
![Lista Autenticação](https://images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/2fce3d14bc8d98ccf4586175791361ef/autenticacao_PT.png)
2. Selecione o provedor e selecione **EDITAR**;
3. Preencha o formulário com o `Client ID` e o `Client Secret` cadastrado;  
![Facebook OAuth PT](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/c07c9d4160e7273a0f5ad2a0cabd1bec/facebook_PT.png)
4. Ative o uso do provedor com o seu interruptor.  
![Lista Autenticação Switch On Highlight](https://images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/c079f95b7833c2bdba7e5a86860f03cd/switch_On_highlight_PT.png)

## Valide a configuração

Com tudo configurado, você ja pode testar a sua configuração. Recomendamos que faça isso já através da URL final que seus usuários utilizarão para acessar sua loja. Ao tentar efetuar login, as opções referentes aos provedores ativos devem ser disponibilizadas e o processo deve poder ser efetuado sem maiores problemas.


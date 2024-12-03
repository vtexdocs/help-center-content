---
title: 'Configurar login com Apple ID (Beta)'
id: 5qprgEmHYfPTghnYwm0KrV
status: PUBLISHED
createdAt: 2023-09-05T17:38:23.553Z
updatedAt: 2023-09-05T18:22:20.252Z
publishedAt: 2023-09-05T18:22:20.252Z
firstPublishedAt: 2023-09-05T18:22:20.252Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-sign-in-with-apple-id-beta
locale: pt
legacySlug: configurar-login-com-apple-id-beta
subcategoryId: 5uXA9a0laSLMkfbv6jQRDS
---

>ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br).

Na VTEX, não é necessário criar uma conta ou fazer login para realizar uma compra. No entanto, caso o cliente queira efetuar alguma alteração nos dados informados durante a primeira compra, é necessário que ele comprove a posse do email em questão.

Nativamente, a plataforma oferece opções de login com email e senha e com código de acesso enviado para o email do cliente. Também oferecemos integrações opcionais nativas com Apple ID, [Google e Facebook](https://help.vtex.com/pt/tutorial/integracao-google-e-facebook-para-login--tutorials_513), que necessitam ser configuradas. Este guia explica as configurações necessárias para habilitar o login com [Apple ID](https://support.apple.com/pt-br/apple-id) na sua loja:

* [Pré-requisitos](#pre-requisitos)
* [Criar um registro na Apple](#criar-um-registro-na-apple)
* [Preencher informações para autenticação](#preencher-informacoes-para-autenticacao)
* [Validar a configuração](#validar-a-configuracao)
* [Limitações](#limitacoes)

## Pré-requisitos

Antes de começar a configurar o login com Apple ID na sua loja, é necessário ter um [Apple ID](https://support.apple.com/pt-br/apple-id) e estar inscrito no [Apple Developer Program](https://developer.apple.com/programs/).

## Criar um registro na Apple

Para configurar a integração de login com a Apple, é necessário criar credenciais de OAuth 2.0 (protocolo utilizado para integração) nesse serviço. Para isso, siga as instruções do nosso guia para desenvolvedores [Registering credentials to set up Apple ID login](https://developers.vtex.com/docs/guides/registering-credentials-to-set-up-apple-id-login).

## Preencher informações para autenticação

Uma vez concluído o registro junto à Apple, você precisa habilitar na sua loja a opção de login por esse provedor, seguindo as instruções abaixo. Tenha em mãos as credenciais obtidas na etapa de registro.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.

    Você será direcionado(a) para a aba **Loja virtual** da página **Autenticação**, que lista os métodos de login disponíveis na sua loja.

3. Na linha **Apple**, clique em `Configurar`.
4. Preencha os campos de configuração com as [credenciais previamente registradas na Apple](#criar-um-registro-na-apple):

    * **Key ID:** identificação da chave privada gerada pela Apple que será utilizada pela VTEX para gerar o [OAuth client secret](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/).
    * **Team ID:** identificação da sua equipe no [Apple Developer Portal](https://developer.apple.com/). 
    * **Service ID:** identificação do seu serviço na Apple, que será usada como [OAuth client_id](https://www.oauth.com/oauth2-servers/client-registration/client-id-secret/).
    * **P8 Certificate:** chave privada salva em um arquivo de texto no formato `.p8`, gerado somente uma vez pela Apple durante a criação da chave.

    Para entender como obter essas credenciais, confira o guia para desenvolvedores [Registering credentials to set up Apple ID login](https://developers.vtex.com/docs/guides/registering-credentials-to-set-up-apple-id-login).

    ![apple-id-setup-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Beta/Authentication%20Beta/configurar-login-com-apple-id-beta_1.png)

5. Clique em `Salvar`.
6. Clique em `Provedores da loja virtual` para retornar para a página anterior.
7. Clique no _switch_ <i class="fas fa-toggle-on"></i> para ativar o uso da Apple como provedor de login.

## Testar login com Apple ID

Com tudo configurado, você já pode testar o login. Recomendamos que faça isso já através da URL final que seus usuários utilizarão para acessar sua loja. Ao tentar efetuar login, a opção de utilizar a ID da Apple deve estar disponível.

1. Acesse o site da sua loja e clique em `Entrar` para fazer login.
2. Clique em `Entrar com Apple`. Você será conduzido(a) à tela de login da Apple.
3. Insira seu ID e senha da Apple.
4. Realize a autenticação de dois fatores, se solicitada.
5. Escolha se deseja compartilhar seu email com o app ou [ocultar o seu email](https://support.apple.com/pt-br/HT210425) e clique em `Continuar`. Recomendamos compartilhar o email, porque existem [limitações](#limitacoes) com relação ao email oculto na VTEX.

>ℹ️ A opção por compartilhar ou não o email só aparece no primeiro acesso à loja com o Apple ID. Nas demais vezes, é necessário apenas clicar em `Continuar`. Para redefinir a opção de compartilhamento do email, visite o [gerenciamento de Apple ID](https://appleid.apple.com/br/), revogue a autorização da loja e volte a fazer login.

Feito isso, você estará autenticado(a) na loja.

## Limitações

Observe as limitações atuais do login com Apple ID em lojas VTEX:

* O Message Center não é compatível com emails de usuários Apple, ou seja, os emails configurados na ferramenta não serão enviados para usuários que fizerem login com Apple ID.
* Caso o usuário opte por usar o recurso de [Ocultar Meu E-mail](https://support.apple.com/pt-br/HT210425) da Apple, a VTEX irá gerar uma nova conta toda vez que o usuário fizer login.

  Isso significa que se alguém fizer login inicialmente com um email e senha, realizar um pedido e posteriormente fizer login utilizando a Apple ID com o recurso de email oculto ativado, a VTEX criará uma conta separada. Essa nova conta não terá relação com a conta original e não permitirá acessar histórico de pedidos passados ou outras informações do usuário. Essa ação não pode ser desfeita.

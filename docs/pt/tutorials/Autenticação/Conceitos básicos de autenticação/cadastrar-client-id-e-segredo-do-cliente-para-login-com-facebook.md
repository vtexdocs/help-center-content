---
title: 'Cadastrar Client Id e Segredo do cliente para login com Facebook'
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-10-20T21:29:11.632Z
publishedAt: 2023-10-20T21:29:11.632Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-facebook
legacySlug: cadastrar-client-id-e-client-secret-para-login-com-facebook
locale: pt
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Para ativar o login via Facebook, é necessário acessar **Configurações da conta > Autenticação** pelo Admin VTEX e preencher os campos **Client ID** e **Segredo do cliente**, conforme detalhado no artigo [Configurar login com Facebook e Google](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513).

![Facebook OAuth PT](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/1dcbc9286c0245740194026e19ba5c9b/1-login-fb-pt.png)

Para obter essas credenciais, siga as instruções de cada etapa abaixo:

1. [Criar aplicativo](#1-criar-aplicativo)
2. [Configurar Login do Facebook no aplicativo](#2-configurar-login-do-facebook-no-aplicativo)
3. [Realizar configurações básicas do aplicativo](#3-realizar-configuracoes-basicas-do-aplicativo)

## 1. Criar aplicativo

Para começar, você precisa cadastrar um aplicativo no Facebook, seguindo os passos abaixo:

1. Entre no [Meta for Developers](https://developers.facebook.com/).
2. Crie uma conta de desenvolvedor do Facebook.
3. Na barra superior, clique em **Meus aplicativos**.
4. Clique em `Criar aplicativo`.
5. Clique em **Permitir que as pessoas entrem com a própria conta do Facebook**, dentre as opções ilustradas abaixo.

   ![2-login-fb-pt](//images.ctfassets.net/alneenqid6w5/3zv1li5neUPsSK8VhPaRy0/c5d74282b8459d40d3a0ac9026591787/2-login-fb-pt.png)

6. Clique em `Avançar`.
7. Preencha o nome do app e o email de contato do responsável pelo aplicativo, nos campos ilustrados abaixo.

   ![3-login-fb-pt](//images.ctfassets.net/alneenqid6w5/1Yg8Du8HKxU7rW15ZsL6vD/2cf04b1ea40c6e4e4ed2d843296bb256/3-login-fb-pt.png)

8. Clique em `Criar aplicativo`.

## 2. Configurar Login do Facebook no aplicativo

O próximo passo é configurar o produto Login do Facebook no aplicativo que você criou. Para isso, siga as instruções abaixo:

1. Clique em **Produtos** no menu lateral ou no **Painel **do Meta for Developers, destacado a seguir.

   ![4-login-fb-pt](//images.ctfassets.net/alneenqid6w5/2wNKd6gswgFQAghpNdvEVq/9b7ff04d05523c1d9ec09f5b3f563d34/4-login-fb-pt.png)

2. Clique em `Configurar` e, em seguida, na opção `Configurações`.

   ![5-login-fb-pt](//images.ctfassets.net/alneenqid6w5/vMQDtOfYgSZfo7EOYuNel/f64b512f3583de4ab35032ec1f3dcb23/5-login-fb-pt.png)

3. Defina os estados como na imagem abaixo:

   ![Configuração URI OAuth Facebook PT](//images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/8aeaa64b10c388f9ac5aec145bcc3055/configuracoes_Oauth_PT.png)

   Insira as URLs abaixo em **URIs de redirecionamento do OAuth válidos**, substituindo `{{HOST_URL}}` pela URL base de sua loja e `{{accountName}}` pelo nome da sua conta VTEX como descrito no Admin:

      * `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
      * `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
      * `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

4. No final da página, clique no botão `Salvar alterações`.

## 3. Realizar configurações básicas do aplicativo

Por fim, você precisa preencher algumas informações sobre o app para concluir o processo de cadastro. Nesta etapa, você vai obter o **Client Id** e o **Segredo do cliente** que serão utilizados nas configurações do login com o Facebook realizadas no Admin VTEX. Siga os passos abaixo:

1. No menu lateral do Meta for Developers, vá em **Configurações do app** e clique em **Básico:**

   ![7-login-fb-pt](//images.ctfassets.net/alneenqid6w5/4rhVhY9V6N117s3XwZ59No/e0a0037af04e1e1d8b465520f804d9a0/7-login-fb-pt.png)

2. Copie o valor do campo **ID do Aplicativo**. Você deverá informar este valor no campo **Client ID** ao [configurar o login com Facebook no Admin VTEX](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513).
3. Em **Chave Secreta do Aplicativo**, clique no botão **Mostrar** e, em seguida, copie o valor do campo. Você deverá informar este valor no campo **Segredo do cliente** ao [configurar o login com Facebook no Admin VTEX](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513).
4. No campo **URL da Política de Privacidade**, adicione o link para a política de privacidade da sua loja.
5. Em **Ícone do aplicativo (1024 x 1024)**, insira um ícone para seu aplicativo de exatamente 1024x1024 pixels e fundo transparente.
6. Selecione uma **Categoria**. Para lojas, a sugestão é utilizar **Compras**.
7. Abaixo neste formulário, preencha as **Informações de contato do encarregado da proteção dos dados** com os dados da empresa responsável pela loja.
8. No final da página, clique em `Salvar alterações`.

Após concluir todas essas etapas, você pode utilizar o **Client ID** e o **Segredo do cliente** obtidos para configurar o login com Facebook na sua loja, conforme detalhado no artigo [Configurar login com Facebook e Google](https://help.vtex.com/pt/tutorial/configurar-login-com-facebook-e-google--tutorials_513).

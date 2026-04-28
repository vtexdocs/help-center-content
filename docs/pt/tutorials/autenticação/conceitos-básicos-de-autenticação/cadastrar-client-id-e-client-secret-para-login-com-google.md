---
title: 'Cadastrar Client ID e Client secret para login com Google'
id: 1lBgDmetUM4goie6mYEOK6
status: PUBLISHED
createdAt: 2017-08-29T14:13:01.769Z
updatedAt: 2023-02-08T14:32:35.437Z
publishedAt: 2023-02-08T14:32:35.437Z
firstPublishedAt: 2017-08-29T15:11:54.862Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-google
legacySlug: cadastrar-client-id-e-client-secret-para-login-com-google
locale: pt
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

Para ativar o login por OAuth2 via Google, acesse o VTEX ID pelo Admin VTEX e preencha os campos `Client ID` e `Client secret`, conforme detalhado no artigo [Configurar login com Facebook e Google](https://help.vtex.com/pt/docs/tutorials/configurar-login-com-facebook-e-google).

![Google OAuth](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_1.png)

Esses valores são obtidos a partir de um projeto criado no serviço de APIs do Google Cloud Platform.

Siga os passos abaixo:

> ⚠️ Os passos a seguir descrevem procedimentos em uma plataforma externa e podem estar desatualizados. Para mais informações, consulte os artigos [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) e [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect) da documentação do Google.

1. Acesse o  [Google Cloud Console](https://console.developers.google.com/).
2. Na aba lateral, clique em __Credenciais__.
3. Clique em __Criar projeto__.
    ![Criar Projeto Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_2.png)

4. Dê um nome ao projeto e clique em __Criar__.
    ![Novo Projeto Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_3.png)
5. No topo da página, clique no botão __Criar credenciais__.
    ![Criar Credenciais Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_4.png)
6. Clique na opção __ID do cliente OAuth__.
    ![ID cliente OAuth Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_5.png)
7. Clique no botão __Configurar tela de consentimento__.
    ![Configurar Tela Consentimento Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_6.png)
8. Escolha o tipo de usuário desejado para a sua loja (__Interno__ ou __Externo__) e clique no botão __Criar__.
    ![Tipo usuário Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_7.png)
9.  __Nome do app__: nome que será exibido aos seus clientes no momento do login.
10. __Email para suporte do usuário__: endereço para que os usuários entrem em contato sobre o consentimento.
11. __Logotipo do app__: imagem que corresponde ao logotipo da sua loja.
12. __Domínios autorizados__: inclua os domínios que podem interagir com essa API. Adicione, no mínimo, o domínio da sua loja e o da VTEX: 
    - `loja.com` (exemplo, sempre sem o "www" ou correspondente)
    - `vtex.com.br` (relativo aos nossos servidores de backend)
13. __Dados de contato do desenvolvedor__: emails que o Google usará para notificar você sobre alterações no projeto
14. Clique no botão __Salvar e continuar__.
    ![Configurações Tela Consentimento PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_8.png)
13. Clique no item do menu lateral esquerdo __Credenciais__.
14. Em Tipo de aplicativo, selecione __Aplicativo da Web__.
    ![Credenciais Aplicativo Web Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_9.png)
15. __Nome__: informe um nome para identificação interna.
16. __Origens JavaScript autorizadas__: cadastre as URLs exatas que poderão usar este método de autenticação, o que corresponde ao seu site; exemplo `https://www.loja.com`. Recomendamos cadastrar também a URL da sua conta: `https://{{accountName}}.myvtex.com` de sua conta, substituindo `{{accountName}}` pelo nome da sua conta, conforme descrito no Admin VTEX.
17. __URIs de redirecionamento autorizados__: cadastre a URL de serviço da VTEX:

    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`

    ![Configurações Aplicativo Web Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_10.png)

18. Após concluir, as suas credenciais serão exibidas:
    ![Cliente OAuth criado Google PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_11.png)
    - Copie o __ID do cliente__ do Google e cole no campo `Client ID` no admin do VTEX ID.
    - Copie a __chave secreta do cliente__ do Google e cole no campo `Client secret` no admin do VTEX ID.
    ![Google OAuth](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/cadastrar-client-id-e-client-secret-para-login-com-google_12.png)
    Depois de configurar essas etapas, salve as alterações.    

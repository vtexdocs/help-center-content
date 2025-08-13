---
title: 'Cadastrar Client Id e Client Secret para login com Google'
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

Para ativar o funcionamento de login por OAuth2 via Google, é necessário acessar o VTEX ID pelo seu admin e preencher os campos `Client ID` e `Client Secret`, conforme detalhado [neste artigo](/pt/tutorial/integracao-google-e-facebook-para-login).

![Google OAuth](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_1.png)

Esses valores são obtidos a partir de um projeto que precisa ser criado no serviço de APIs do Google Cloud Platform.

De forma simplificada, basta seguir os passos a seguir:

> ⚠️ Os passos abaixo descrevem procedimentos em uma plataforma externa e podem estar desatualizados. Mais informações sobre esses procedimentos podem ser encontradas nos artigos [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) e [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect) da documentação do Google.

1. Entrar no link [`https://console.developers.google.com/`](https://console.developers.google.com/);
2. Clicar em __Credenciais__, na aba lateral;
3. Clique em __Criar Projeto__;
    ![Criar Projeto Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_2.png)

4. Dê um nome ao projeto e clique em __Criar__;
    ![Novo Projeto Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_3.png)
5. No topo da página, clicar no botão __Criar credenciais__;
    ![Criar Credenciais Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_4.png)
6. Clicar na opção __ID do cliente OAuth__;
    ![ID cliente OAuth Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_5.png)
7. Clicar no botão __Configurar tela de consentimento__;
    ![Configurar Tela Consentimento Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_6.png)
8. Escolha o tipo de usuário desejado para a sua loja (__Interno__ ou __Externo__) e clique no botão __Criar__;
    ![Tipo usuário Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_7.png)
9.  __Nome do app__: será exibido aos seus clientes no momento do login;
10. __E-mail para suporte do usuário__: para que os usuários contatem você com perguntas sobre o consentimento;
11. __Logotipo do app__: corresponde ao logotipo da sua loja;
12. __Domínios autorizados__: devem ser incluídos os domínios que poderão interagir com essa API, que devem ser, pelo menos, o domínio de sua loja e o domínio da VTEX: 
    - `loja.com`, como exemplo, sempre sem o "www" ou correspondente
    - `vtex.com.br`, relativo aos nossos servidores de backend
13. __Dados de contato do desenvolvedor__: o Google usa esses endereços de e-mail para notificar você sore todas as alterações do projeto;
14. Clicar no botão __Salvar e continuar__;
    ![Configurações Tela Consentimento PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_8.png)
13. Clicar no item do menu lateral esquerdo __Credenciais__;
14. Escolher __Aplicativo da Web__, em Tipo de aplicativo;
    ![Credenciais Aplicativo Web Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_9.png)
15. __Nome__: para identificação interna;
16. __Origens JavaScript autorizadas__: cadastrar os endereços exatos que poderão usar este método de autenticação, o que corresponde ao seu site; exemplo `https://www.loja.com`. Também é recomendado cadastrar o endereço `https://{{accountName}}.myvtex.com` de sua conta, onde `{{accountName}}` é o nome da sua conta como descrito no menu administrativo da loja;
17. __URIs de redirecionamento autorizados__: cadastrar a URL de serviço da VTEX:

    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`

    ![Configurações Aplicativo Web Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_10.png)

18. Após concluído, serão apresentadas suas credenciais:
    ![Cliente OAuth criado Google PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_11.png)
    - Copie o __ID do cliente__ do Google e cole no campo `Client Id` no admin do VTEX ID.
    - Copie a __chave secreta do cliente__ do Google e cole no campo `Client Secret` no admin do VTEX ID.
    ![Google OAuth](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/authentication/authentication-basics/cadastrar-client-id-e-client-secret-para-login-com-google_12.png)
    Depois de cumprir esses passos, salve as alterações.    

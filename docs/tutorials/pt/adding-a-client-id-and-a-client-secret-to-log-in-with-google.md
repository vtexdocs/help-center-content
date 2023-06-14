---
title: Cadastrar Client Id e Client Secret para login com Google
id: 1lBgDmetUM4goie6mYEOK6
status: PUBLISHED
createdAt: 2017-08-29T14:13:01.769Z
updatedAt: 2023-02-08T14:32:35.437Z
publishedAt: 2023-02-08T14:32:35.437Z
firstPublishedAt: 2017-08-29T15:11:54.862Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: cadastrar-client-id-e-client-secret-para-login-com-google
legacySlug: cadastrar-client-id-e-client-secret-para-login-com-google
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

Para ativar o funcionamento de login por OAuth2 via Google, é necessário acessar o VTEX ID pelo seu admin e preencher os campos `Client ID` e `Client Secret`, conforme detalhado [neste artigo](/pt/tutorial/integracao-google-e-facebook-para-login).

![Google OAuth](https://images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/a508065cf5028f3a806edad050a0f6e6/google_PT.png)

Esses valores são obtidos a partir de um projeto que precisa ser criado no serviço de APIs do Google Cloud Platform.

De forma simplificada, basta seguir os passos a seguir:

<div class="alert alert-warning" role="alert">
Os passos abaixo descrevem procedimentos em uma plataforma externa e podem estar desatualizados. Mais informações sobre esses procedimentos podem ser encontradas nos artigos <a href="https://support.google.com/cloud/answer/6158849">Setting up OAuth 2.0</a> e <a href="https://developers.google.com/identity/protocols/oauth2/openid-connect">OpenID Connect</a> da documentação do Google.
</div>

1. Entrar no link [`https://console.developers.google.com/`](https://console.developers.google.com/);
2. Clicar em __Credenciais__, na aba lateral;
3. Clique em __Criar Projeto__;
    ![Criar Projeto Google PT](https://images.ctfassets.net/alneenqid6w5/7d7axXgcKs8SKcG0YekU8m/15e9e1be0ef0b9bfd4f6cd23833f52a6/Criar_Projeto_Google_PT.png)

4. Dê um nome ao projeto e clique em __Criar__;
    ![Novo Projeto Google PT](https://images.ctfassets.net/alneenqid6w5/1PB6BTeU4I6YOqySuwcS4W/dcb58074e3fb0668c4ea336bee08870a/Novo_Projeto_Google_PT.png)
5. No topo da página, clicar no botão __Criar credenciais__;
    ![Criar Credenciais Google PT](https://images.ctfassets.net/alneenqid6w5/5bGcIsahuvFskIQBn8X8bl/e5cbd9523888845caa07211cdec356cf/Criar_Credenciais_Google_PT.png)
6. Clicar na opção __ID do cliente OAuth__;
    ![ID cliente OAuth Google PT](https://images.ctfassets.net/alneenqid6w5/5CBmKjKYTYOMkkQImIMcI4/68b13531dab5020ea4e40f69f34a58e2/ID_cliente_OAuth_Google_PT.png)
7. Clicar no botão __Configurar tela de consentimento__;
    ![Configurar Tela Consentimento Google PT](https://images.ctfassets.net/alneenqid6w5/3mprVJpYy6wdtJJEhhbi1s/2c7660f7dea9b320ca24df57e89910a2/Configurar_Tela_Consentimento_Google_PT.png)
8. Escolha o tipo de usuário desejado para a sua loja (__Interno__ ou __Externo__) e clique no botão __Criar__;
    ![Tipo usuário Google PT](https://images.ctfassets.net/alneenqid6w5/yxxE4AdTY0yuNClfZwXHL/7579b27f325d7e2c31444ba21a29a017/Tipo_usu__rio_PT.png)
9.  __Nome do app__: será exibido aos seus clientes no momento do login;
10. __E-mail para suporte do usuário__: para que os usuários contatem você com perguntas sobre o consentimento;
11. __Logotipo do app__: corresponde ao logotipo da sua loja;
12. __Domínios autorizados__: devem ser incluídos os domínios que poderão interagir com essa API, que devem ser, pelo menos, o domínio de sua loja e o domínio da VTEX: 
    - `loja.com`, como exemplo, sempre sem o "www" ou correspondente
    - `vtex.com.br`, relativo aos nossos servidores de backend
13. __Dados de contato do desenvolvedor__: o Google usa esses endereços de e-mail para notificar você sore todas as alterações do projeto;
14. Clicar no botão __Salvar e continuar__;
    ![Configurações Tela Consentimento PT](https://images.ctfassets.net/alneenqid6w5/2jKyTCl5FeeMsS2iAw0aKa/db5c3ff4f9ca43f8a50e51bfb49376ac/Configura____es_Tela_Consentimento_PT.png)
13. Clicar no item do menu lateral esquerdo __Credenciais__;
14. Escolher __Aplicativo da Web__, em Tipo de aplicativo;
    ![Credenciais Aplicativo Web Google PT](https://images.ctfassets.net/alneenqid6w5/1sq6ByDBoYtGLeiU3Xsmgx/1b63eaf43364a7d6f1ebe2330b396a72/Credenciais_Aplicativo_Web_Google_PT.png)
15. __Nome__: para identificação interna;
16. __Origens JavaScript autorizadas__: cadastrar os endereços exatos que poderão usar este método de autenticação, o que corresponde ao seu site; exemplo `https://www.loja.com`. Também é recomendado cadastrar o endereço `https://{{accountName}}.myvtex.com` de sua conta, onde `{{accountName}}` é o nome da sua conta como descrito no menu administrativo da loja;
17. __URIs de redirecionamento autorizados__: cadastrar a URL de serviço da VTEX:

    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`

    ![Configurações Aplicativo Web Google PT](https://images.ctfassets.net/alneenqid6w5/4HsRII0LeoGMYqWoioWi0o/91105aa43df17443cfecdcad79acc3a4/Configura____es_Aplicativo_Web_PT.png)

18. Após concluído, serão apresentadas suas credenciais:
    ![Cliente OAuth criado Google PT](https://images.ctfassets.net/alneenqid6w5/58KAqlnXhKoAqgq6Gcc80K/2aea225da796a27ea6974766b984a493/Cliente_OAuth_criado_Google_PT.png)
    - Copie o __ID do cliente__ do Google e cole no campo `Client Id` no admin do VTEX ID.
    - Copie a __chave secreta do cliente__ do Google e cole no campo `Client Secret` no admin do VTEX ID.
    ![Google OAuth](https://images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/a508065cf5028f3a806edad050a0f6e6/google_PT.png)
    Depois de cumprir esses passos, salve as alterações.    

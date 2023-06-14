---
title: 'Cadastrar Client Id e Client Secret para login com Facebook'
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-02-08T14:33:31.750Z
publishedAt: 2023-02-08T14:33:31.750Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: cadastrar-client-id-e-client-secret-para-login-com-facebook
locale: pt
legacySlug: cadastrar-client-id-e-client-secret-para-login-com-facebook
subcategory: 14V5ezEX0cewOMg0o0cYM6
---


Para ativar o funcionamento de login por OAuth2 via Facebook, é necessário acessar o VTEX ID pelo seu admin e preencher os campos `Client ID` e `Client Secret`, conforme detalhado [neste artigo](/pt/tutorial/integracao-google-e-facebook-para-login).

![Facebook OAuth PT](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/c07c9d4160e7273a0f5ad2a0cabd1bec/facebook_PT.png)

Para obter esses valores, siga os passos abaixo:

1. Entre no link [`https://developers.facebook.com/`](https://developers.facebook.com/);
2. Crie uma conta de desenvolvedor do Facebook;
3. Crie uma aplicação de Login do Facebook;
4. Na parte superior direita, clique em __Meus aplicativos__;
    ![Meus Aplicativos Facebook PT](https://images.ctfassets.net/alneenqid6w5/2XUFbJ20Z1Op022DLzNru7/e98c304648607f968847d01d7b568539/Meus_Aplicativos_Facebook_PT.png)
5. Clique em adicionar um novo aplicativo
6. Escolha __Gerenciar integrações comerciais__;
    ![Criar ID Aplicativo Facebook PT](https://images.ctfassets.net/alneenqid6w5/4nEHH7m3rzaIjNyXCS7jwQ/b40ec36cd9b8e722f08fe1f14ed403c5/Facebook_Login_App_Type_PT.png)
7. Em __Nome de exibição do aplicativo__, preencha com um nome correspondente à sua loja;
8. Escolha uma das opções em __Finalidade do aplicativo__ que melhor atenda às necessidades da sua loja;
9. Clique em __Criar ID do aplicativo__;
    ![Configurar Criação ID Aplicativo Facebook PT](https://images.ctfassets.net/alneenqid6w5/aJ4qEYEBdQXp3IkQwcwBe/63c7c22747ed891ddb126a7ef71126f7/App_details_PT.png)
10. Selecione __Configurar__ no campo __Login__ do Facebook;
    ![Adicionar Configuração Login Facebook PT](https://images.ctfassets.net/alneenqid6w5/4Kz42ev7FSm0uEYIYwQ8C8/f1797d7b1ee574d6d191b8a3182d6b99/add_products_PT.png)

11. Em __Produtos__, no painel lateral esquerdo, clique em __Login do Facebook > Configurações__.
    ![Login Configurações Menu Facebook PT](https://images.ctfassets.net/alneenqid6w5/7CosZB53qkywCS1NG3Cj0r/96e6a6ccb2ed479f4802d96a2cf5195b/menu_configura____es_PT.png)
    Defina os estados como na imagem abaixo:
    ![Configuração URI OAuth Facebook PT](https://images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/8aeaa64b10c388f9ac5aec145bcc3055/configuracoes_Oauth_PT.png)
    Insira as URLs abaixo em __URIs de redirecionamento do OAuth válidos__, substituindo `{{HOST_URL}}` pela URL base de sua loja e `{{accountName}}` pelo nome da sua conta como descrito no menu administrativo da loja:
    - `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx` 
    - `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
    - `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

12. No final da página, clique no botão __Salvar alterações__.
    ![Salvar Alterações PT](https://images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/71a97a5273c0113c6cff64681297f262/Salvar_Altera____es_PT.png)

13. Na aba lateral, vá em __Configurações__ e clique em __Básico__:
    ![Menu Configurações Aplicativo Facebook PT](https://images.ctfassets.net/alneenqid6w5/2hW7fOAt85ErH30RUI9KLA/6258527e8e1fcf22fd86e1a40739ddcd/menu_configura____es_b__sica_PT.png)

14. Em __Chave Secreta do Aplicativo__, clique no botão __Mostrar__.
    - Copie o campo __ID do Aplicativo__ e cole no campo `Client Id` no admin do VTEX ID.
    - Copie o campo __Chave Secreta do Aplicativo__ do Aplicativo do Facebook e cole no campo `Client Secret` no admin do VTEX ID.
    ![ID Chave Facebook PT](https://images.ctfassets.net/alneenqid6w5/1kQRsAhb9kEaXHgIzIm4ba/ae15499ad9a86bc2adc92ec7907d30f6/ID_Chave_Facebook_PT.png)

15. Insira um ícone para seu aplicativo de exatamente 1024x1024 pixels e fundo transparente;
16. Adicione a __URL da Política de Privacidade__ da sua loja;
    ![Configuração Básica Facebook PT](https://images.ctfassets.net/alneenqid6w5/66rxFKyvG7eCptwC7BdSWT/3c78ad5242e5b9c36f80db936c956261/Configura____o_B__sica_Facebook_PT.png)
17. Selecione uma __Categoria__. Para lojas, a sugestão é utilizar __Compras__;
    ![Categoria Facebook PT](https://images.ctfassets.net/alneenqid6w5/20X5DqI7WEuGwksOO6cMS2/c6fe1d2fc360de572e3cd91f372077ed/Categoria_Facebook_PT.png)
18. Abaixo neste formulário, preencha as __Informações de contato do encarregado da proteção dos dados__ com os dados da empresa responsável pela loja;
    ![Endereço Facebook PT](https://images.ctfassets.net/alneenqid6w5/3TenJ8YunJ6gFRs0aZQkp7/dca08831d4d92a0962a86e5a312e5ea8/Endere__o_Facebook_PT.png)
19. No final da página, clique em __Salvar alterações__;
    ![Salvar Alterações PT](https://images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/71a97a5273c0113c6cff64681297f262/Salvar_Altera____es_PT.png)


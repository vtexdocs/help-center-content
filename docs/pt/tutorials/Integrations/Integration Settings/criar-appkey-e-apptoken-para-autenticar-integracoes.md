---
title: 'Criar appKey e appToken para autenticar integrações'
id: 43tQeyQJgAKGEuCqQKAOI2
status: ARCHIVED
createdAt: 2017-10-24T13:30:43.908Z
updatedAt: 2020-06-04T02:30:41.953Z
publishedAt: 
firstPublishedAt: 2017-10-24T14:19:50.327Z
contentType: tutorial
productTeam: Channels
author: authors_24
slugEN: creating-appkeys-and-apptokens-to-authenticate-integrations
locale: pt
legacySlug: criar-appkey-e-apptoken-para-autenticar-integracoes
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Toda integração com APIs VTEX precisa se autenticar por meio de appKey e appToken.

>⚠️ Apenas o **usuário Master** da loja tem permissão para manipular tokens. O usuário Master é aquele cujo e-mail consta na seção **Contato** da tela Contas, no License Manager.

Para gerar essas chaves, siga os passos abaixo:

1. No menu lateral do novo admin, clique em __Gerenciamento da conta__ e, depois, em __Contas__.
2. No campo __Buscar__, digite o nome da sua conta e aperte _Enter_.
3. Ao clicar no nome da sua conta, você será redirecionado para a página __Editar conta__.
4. Na seção __Segurança__, clique em __Gerar appKey e appToken__.
5. Insira um nome para o par de appKey e appToken que você está criando.
6. Clique em __Gerar novos tokens__.
7. No campo que é exibido em seguida, fica o token. Por uma questão de segurança, ele é __exibido apenas uma vez__. Copie esse token e guarde-o em local seguro.

>⚠️ **Atenção**: todo par de appKey e appToken, quando é criado, nasce sem estar vinculado a um perfil de acessso. Então, depois de criá-lo, é necessário vinculá-lo ao perfil de acesso desejado.

Para isso, siga os passos abaixo:

1. Na seção __Segurança__ da aba __Contas__, copie a appKey desejada, que se encontra na coluna __Chave de aplicação__.
2. Ainda no License Manager, acesse a aba __Usuários__ e faça uma busca pela chave que você copiou.
3. Entre no usuário encontrado e [associe-o aos perfis desejados](/pt/tutorial/gerenciando-usuarios/). Essa appKey será capaz de autenticar integrações com os módulos e funcionalidades aos quais o perfil escolhido dá acesso.

Após realizar estes procedimentos, autentique-se na API utilizando os headers __X-VTEX-API-appKey__ e __X-VTEX-API-appToken__ da seguinte forma:

1. Utilize o X-VTEX-API-appKey para a Chave de aplicação informada no License Manager
2. Utilize o X-VTEX-API-appToken para o Token que foi gerado no License Manager

Em diferentes sistemas, providos por terceiros ou não, normalmente o appKey corresponde ao usuário e o appToken à senha.

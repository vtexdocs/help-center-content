---
title: 'Exigir autenticação em páginas da loja'
id: 3iPNIUgcr60Es24Y4YIwms
status: DRAFT
createdAt: 2018-01-22T22:30:59.147Z
updatedAt: 2021-05-27T18:30:38.021Z
publishedAt: 
firstPublishedAt: 2018-01-23T13:07:24.636Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: exigir-autenticacao-em-paginas-da-loja
locale: pt
legacySlug: exigir-autenticacao-em-paginas-da-loja
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Você pode exigir que, para determinadas páginas da loja, os usuários precisem se autenticar por meio do VTEX ID - ou seja, pode exigir que eles façam login na página.

Algumas páginas vêm com essa configuração por padrão. Por exemplo, as páginas `/Account` e `/Account/Orders`.

![authenticationRequired](//images.contentful.com/alneenqid6w5/60cIIkiKDSEs2ocmqescgM/3f5a0c46d61c1002c22bc7b5469db7eb/authenticationRequired.png)

Mas você pode tanto retirar a exigência de autenticação para estas páginas como inseri-la em outras páginas.

Para isso, siga os passos abaixo:
1. Acesse o módulo __CMS__.
2. Clique na pasta referente à página desejada.
3. Clique no botão __Edit__.![editFolder](//images.contentful.com/alneenqid6w5/2DSRmQFQxeAYcoiWCAaU62/bc08bd32b394545d8af716338d55a0be/editFolder.png)
4. Marque ou desmarque a flag __Authentication Required__.![authenticationRequiredFlag](//images.contentful.com/alneenqid6w5/3iK3iGguAUg84KuAsC4MYW/1dcdae221b886b4a4d1cdc4eb87af9a4/authenticationRequiredFlag.png)
5. Clique em __Save Folder__.

Note que sempre que a flag __Authentication Required__ estiver marcada para uma pasta, a URL desta página será montada com a rota `_secure`. Ex: `http://{AccountName}.vtexcommercestable.com.br/_secure/account/`

### Autenticação e cache

Acima da flag Authentication Required, fica a informação do tipo de cache da página (__Cache Type__).

Essas duas configurações (autenticação e cache) estão intimamente relacionadas, porque páginas que precisam de autenticação não podem ter cache. Isto é necessário porque, caso houvesse cache em uma página com login, os dados de autenticação de um usuário poderiam ficar guardados no cache e ser exibidos para outro usuário.

Portanto, quando marcar a flag Authentication Required, você verá que o Cache Type mudará automaticamente para `No Cache`.

Por outro lado, se desmarcar a flag Authentication Required, o Cache Type mudará para `Local and Remote`, como no caso da imagem acima.

### Protegendo informações sensíveis

Tenha atenção às páginas com informação sensível. Normalmente, elas precisam exigir autenticação.

É o caso, por exemplo, da página de pedidos do cliente `/Account/Orders`, que, por padrão, já vem com a flag Authentication Required marcada quando o lojista recebe seu ambiente.

Se esta página não estiver marcada com a flag Authentication Required, pode acontecer de - por conta do cache - informações pessoais de um cliente serem exibidas para outros clientes.

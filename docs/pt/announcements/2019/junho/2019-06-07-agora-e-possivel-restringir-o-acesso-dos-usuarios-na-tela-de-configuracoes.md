---
title: 'Agora é possível restringir o acesso dos usuários na tela de Configurações do módulo Gerenciamento de Pedido'
id: 6z7TjQRMNWTmR1lKivjehn
status: PUBLISHED
createdAt: 2019-06-07T14:18:18.903Z
updatedAt: 2021-03-22T20:31:47.345Z
publishedAt: 2021-03-22T20:31:47.345Z
contentType: updates
productTeam: Others
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-07-you-can-now-restrict-user-access-to-the-settings-screen-on-the-orders
locale: pt
legacySlug: agora-e-possivel-restringir-o-acesso-dos-usuarios-na-tela-de-configuracoes
announcementImageID: 'undefined'
announcementSynopsisPT: 'Possibilidade de limitar perfis de acesso a tela Configuração'
---

> ⚠️ A partir do dia 25 de junho de 2019, o usuário que não tiver acesso vinculado ao perfil com o produto `Checkout`  não terá permissão para editar a tela de Configurações do módulo Gerenciamento de Pedidos.

Buscando garantir maior segurança, criamos a possibilidade de limitar perfis de acesso a tela de **Configurações** do módulo Gerenciamento de Pedidos, permitindo que somente alguns usuários editem as informações.

![2019-06-07 17 23 36-Configurações.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2019/junho/2019-06-07-agora-e-possivel-restringir-o-acesso-dos-usuarios-na-tela-de-configuracoes_1.png)

## Principais Vantagens

Agora é possível restringir os acessos a essa tela, evitando que usuários sem permissão mudem informações como a quantidade mínima de itens no carrinho ou o limite mínimo de valor do carrinho. Essa mudança garante mais controle das alterações que são feitas na tela de **Configurações**, já que é possível escolher quem edita.
 
## O que você precisa fazer

Caso você queira permitir que um usuário modifique as informações da tela **Configurações** do modulo Gerenciamento de Pedidos, você terá que associar esse usuário a um perfil com acesso ao recurso `Checkout`.

Para fazer isso é necessário adicionar um produto chamado `Checkout` ao perfil desejado. Para isso, você deve acessar:

 1. Gerenciamento da Conta
 2. Perfis de acesso
 3. Clique em **Novo Perfil** ou clique em algum perfil já cadastrado.
 4. Clique em **Configurar outro produto**
 5. No dropdown, escolha a opção `Checkout` 
 6. Escolha o tipo de permissão desejada: `Save Order Configuration`, para permitir que o usuário edite e salve modificações na seção de **Pedidos**, ou `Save OrderForm Configuration`, para permitir a edição na seção de **Carrinho**.
 7. Clique em **Salvar**

![GIT-Checkout.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2019/junho/2019-06-07-agora-e-possivel-restringir-o-acesso-dos-usuarios-na-tela-de-configuracoes_2.gif)

Após adicionar este novo produto a um perfil, certifique-se de que os usuários desejados estão associados a este perfil de acesso.
  

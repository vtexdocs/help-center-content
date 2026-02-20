---
title: 'Configurar pagamento com easypay seller'
id: 5mYMCM1tiRiZO6PozuUncE
status: PUBLISHED
createdAt: 2023-09-19T00:16:47.408Z
updatedAt: 2023-09-28T11:36:30.237Z
publishedAt: 2023-09-28T11:36:30.237Z
firstPublishedAt: 2023-09-19T00:26:38.480Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay-seller
legacySlug: configurar-pagamento-com-seller
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você que é seller pode integrar os seus produtos em um marketplace que esteja integrado com o provedor de pagamento easypay. Por meio deste conector, você pode efetuar vendas utilizando a Easypay, MBWay e MultiBanco.

Para utilizar a afiliação easypay no seu marketplace, é necessário:

- [Instalar o app Easypay Seller Account](#instalar-o-app-easypay-seller-account)
- [Configurar o app Easypay Seller Account](#configurar-o-app-easypay-seller-account)

> ⚠️ Caso você deseje configurar easypay para outro contexto, que não o de seller, acesse os artigos [Configurar pagamento com easypay](/pt/docs/tutorials/configurar-pagamento-com-easypay) ou [Configurar pagamento com easypay no Marketplace](/pt/docs/tutorials/configurar-pagamento-com-easypay-marketplace).

## Instalar o app Easypay Seller Account

Para instalar o app Easypay Seller Account, siga os passos abaixo:

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app easypay por meio do comando `vtex install easypaypartnerpt.easypay-seller`. 

## Configurar o app Easypay Seller Account

Após realizar a instalação do app Easypay Seller Account, você deve configurá-lo. Para acessar a tela de configurações, siga os passos abaixo:

<blockquote><ui>1. No Admin VTEX, acesse **Hub de Extensões > Gerenciamento de Aplicativos**, ou digite **Gerenciamento de Aplicativos** na barra de busca no topo da página.</ui>

<blockquote><ui>2. Localize o app **Easypay Seller Account** e clique em **Configurações**.</ui>

<blockquote><ui>3. Na tela **Easypay Seller Account**, preencha os seguintes campos:</ui>

<blockquote><ui>- **VTEX Marketplace Account**: URL da conta da VTEX na qual você está associado. Ex. https://{nome-da-sua-conta}.myvtex.com/admin</ui> 

<blockquote><ui>- **Easypay Account UID**: identificação de sua conta seller onde serão depositados os valores das compras dos produtos efetuados na loja. Para obter esta informação, acesse o [ambiente easypay](https://backoffice.easypay.pt/), clique no logotipo da Easypay localizado no canto superior da tela, e depois na conta desejada. Copie e salve a informação **Account UID**.</ui> 

![easypay_pt_18](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/configurar-pagamento-com-easypay-seller_1.PNG)

<blockquote><ui>4. Clique em **Salvar**.</ui>


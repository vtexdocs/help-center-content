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
locale: pt
legacySlug: configurar-pagamento-com-seller
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você que é seller pode integrar os seus produtos em um marketplace que esteja integrado com o provedor de pagamento easypay. Por meio deste conector, você pode efetuar vendas utilizando a Easypay, MBWay e MultiBanco.

Para utilizar a afiliação easypay no seu marketplace, é necessário:

- [Instalar o app Easypay Seller Account](#instalar-o-app-easypay-seller-account)
- [Configurar o app Easypay Seller Account](#configurar-o-app-easypay-seller-account)

>⚠️ Caso você deseje configurar easypay para outro contexto, que não o de seller, acesse os artigos [Configurar pagamento com easypay](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay--3xJQqjMIn0ARDI1HcwK88J) ou [Configurar pagamento com easypay no Marketplace](https://help.vtex.com/pt/tutorial/configurar-pagamento-com-easypay-marketplace--3YllWiITcPEOpteuToEdO7).

## Instalar o app Easypay Seller Account

Para instalar o app Easypay Seller Account, siga os passos abaixo:

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app easypay por meio do comando `vtex install easypaypartnerpt.easypay-seller`. 

## Configurar o app Easypay Seller Account

Após realizar a instalação do app Easypay Seller Account, você deve configurá-lo. Para acessar a tela de configurações, siga os passos abaixo:

<blockquote><ui>1. No Admin VTEX, acesse <b>Hub de Extensões > Gerenciamento de Aplicativos</b>, ou digite <b>Gerenciamento de Aplicativos</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Localize o app <b>Easypay Seller Account</b> e clique em <b>Configurações</b>.</ui>

<blockquote><ui>3. Na tela <b>Easypay Seller Account</b>, preencha os seguintes campos:</ui>

<blockquote><ui>- <b>VTEX Marketplace Account</b>: URL da conta da VTEX na qual você está associado. Ex. https://{nome-da-sua-conta}.myvtex.com/admin</ui> 

<blockquote><ui>- <b>Easypay Account UID</b>: identificação de sua conta seller onde serão depositados os valores das compras dos produtos efetuados na loja. Para obter esta informação, acesse o <a href="https://backoffice.easypay.pt/">ambiente easypay</a>, clique no logotipo da Easypay localizado no canto superior da tela, e depois na conta desejada. Copie e salve a informação <b>Account UID</b>.</ui> 

![easypay_pt_18](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment Settings/configurar-pagamento-com-easypay-seller_1.PNG)

<blockquote><ui>4. Clique em <b>Salvar</b>.</ui>


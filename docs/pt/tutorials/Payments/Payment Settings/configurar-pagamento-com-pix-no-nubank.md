---
title: 'Configurar pagamento com Pix no Nubank'
id: 2pJBJdtkvyn645rL2sxyJy
status: PUBLISHED
createdAt: 2022-07-19T16:38:08.465Z
updatedAt: 2024-01-23T19:11:23.258Z
publishedAt: 2024-01-23T19:11:23.258Z
firstPublishedAt: 2022-07-19T16:56:30.888Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: configure-payment-with-pix-at-nubank
locale: pt
legacySlug: configurar-pagamento-com-pix-no-nubank
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, sua loja pode realizar a integração com o gateway Nubank e receber por meio de Pix.

Para configurar o Nubank com recebimento via Pix, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __SpinPay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Nubank.
5. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de pagamento__, clique no botão `+`.
3. Em __Pagamento Instantâneo__, selecione a opção __Pix__.
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Processar com a afiliação__, selecione o conector __SpinPay__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o Pix pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 


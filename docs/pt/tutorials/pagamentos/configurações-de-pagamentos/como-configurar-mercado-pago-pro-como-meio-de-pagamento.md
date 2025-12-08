---
title: 'Como configurar Mercado Pago Pro como meio de pagamento'
id: 520AthtalgojtTUKw0La9S
status: PUBLISHED
createdAt: 2020-11-17T17:45:31.552Z
updatedAt: 2025-11-25T00:00:00.000Z
publishedAt: 2023-03-26T21:46:46.072Z
firstPublishedAt: 2020-11-17T19:19:23.749Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-configure-mercado-pago-pro-as-a-payment-method
legacySlug: como-configurar-mercado-pago-pro-como-meio-de-pagamento
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O Mercado Pago Pro é uma solução de pagamento da [carteira digital](https://help.vtex.com/pt/docs/tutorials/o-que-e-uma-carteira-digital-e-wallet) Mercado Pago. Antes de configurar a condição de pagamento, você deve certificar-se que o subadquirente [MercadoPagoV2](https://help.vtex.com/pt/docs/tutorials/configurar-o-subadquirente-mercadopagov2) já esteja cadastrado na sua loja.

## Configuração do meio de pagamento Mercado Pago Pro

Para configurar o Mercado Pago Pro, siga os passos abaixo:

1. No [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), execute o comando `vtex login nomedaconta` para realizar o login em sua conta.
2. Instale o app __Mercado Pago Pro__ por meio do comando `vtex install mercadopago.mercadopago-app`.
3. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
4. Na aba __Condições de Pagamentos__, clique no botão `+`.
5. Clique sobre a opção __MercadoPagoPro__.
6. Na tela de configuração, ative a condição clicando em __Status__.
7. Em __Processar com o provedor__, selecione __MercadoPagoV2__.
8. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
9. Caso necessário, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
10. Clique em `Salvar`.

> ℹ️ Para processar pagamentos feitos com o Pix, basta [cadastrar uma chave Pix no Mercado Pago](https://www.mercadopago.com.br/ferramentas-para-vender/aceitar-pix) após concluir a configuração do meio de pagamento.

Depois de seguir os passos indicados, Mercado Pago Pro pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

---
title: 'Cartão de crédito - Fluxo básico de um pagamento'
id: 1L1Y66GgcAUgkIqwgccCUK
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.505Z
updatedAt: 2019-12-31T15:26:29.334Z
publishedAt: 2019-12-31T15:26:29.334Z
firstPublishedAt: 2019-01-24T22:02:00.724Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: cartao-de-credito-fluxo-basico-de-um-pagamento
locale: pt
legacySlug: cartao-de-credito-fluxo-basico-de-um-pagamento
subcategory: 2Xay1NOZKE2CSqKMwckOm8
---

Este artigo tem como objetivo explicar como funciona o fluxo básico de um pagamento por __cartão de crédito__:

![Credit Card Flow](https://images.contentful.com/alneenqid6w5/3oIzDRDSwgUQAqUEosW60k/12408bd338f44d41180cd5e71131d341/Credit_Card_Flow.jpg)

1. Na tela de Checkout, o cliente escolhe o __Meio de Pagamento__ cartão de crédito para realizar o pagamento de sua compra.
2. As informações deste pagamento são passadas para o __Gateway de Pagamentos__. O [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) é o player responsável por garantir que este pagamento seja realizado com sucesso.
3. Com as informações em mãos, o gateway de pagamentos repassa as informações necessárias para o __Adquirente__. Os [adquirentes](/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil#adquirente) são responsáveis por liquidações das transações financeiras com os varejistas.
4. Em posse das informações, o adquirente envia os dados do pagamento para a __Bandeira__. A [bandeira](/pt/tutorial/diferenca-entre-adquirentes-subadquirentes-e-gateways-no-brasil#bandeira-de-cartao) determina algumas regras de negócio para os pagamentos, como a quantidade de parcelas. Além disso, ela conecta o sistema de adquirentes com os bancos emissores.
5. Por fim, a bandeira envia as informações do pagamento para o __Banco Emissor__. O banco emissor faz a análise de crédito, verifica o limite disponível e então autoriza ou nega o pagamento.

Com a resposta do banco emissor, é realizado o fluxo inverso e o __Gateway de Pagamentos__ recebe a informação se o pagamento foi aprovado ou negado.

<div class="alert alert-info">
É possível incluir o <strong>Antifraude</strong> neste fluxo. Neste caso, o antifraude recebe as informações do gateway de que o pagamento foi pré-autorizado pelo banco emissor. Com a informação recebida do gateway, o antifraude envia uma resposta de aprovação ou negação do pagamento. Caso o antifraude negue, o pagamento é cancelado. Caso o pagamento seja aprovado, o pedido pode prosseguir seu fluxo normal.
</div>

---
title: 'O botão "Voltar ao site" leva à página gatewayCallback//Success em vez de placeOrder'
id: 7Hp6yYCblhbhrN3jHHigUC
status: PUBLISHED
createdAt: 2023-04-10T15:18:58.986Z
updatedAt: 2024-12-30T17:56:05.604Z
publishedAt: 2024-12-30T17:56:05.604Z
firstPublishedAt: 2023-04-10T15:18:59.672Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-botao-voltar-ao-site-leva-a-pagina-gatewaycallbacksuccess-em-vez-de-placeorder
locale: pt
kiStatus: Backlog
internalReference: 786685
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente fecha uma compra usando um cartão-presente e um aplicativo de pagamento, o botão "voltar ao site" ou o fluxo para voltar ao site não o leva para a página de colocação do pedido, mas para `/gatewayCallback//Success`

## Simulação



1. Coloque o GC de qualquer valor
2. Selecione o aplicativo de pagamento do método
3. Dentro do aplicativo de pagamento, faça uma compra
4. Volte para o ambiente da VTEX.



## Workaround


_Não há solução alternativa_





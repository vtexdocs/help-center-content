---
title: 'orderForm (Chk API) suggesting invalid scheduled delivery that can't be used'
id: 7e2bSJSJa938QCrOHkRibZ
status: PUBLISHED
createdAt: 2022-01-24T20:20:11.732Z
updatedAt: 2023-03-21T19:26:09.280Z
publishedAt: 2023-03-21T19:26:09.280Z
firstPublishedAt: 2023-03-21T19:26:09.280Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: 
slug: orderform-chk-api-suggesting-invalid-scheduled-delivery-that-cant-be-used
kiStatus: Backlog
internalReference: 298665
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>

Quando um carrinho/ordemForm tem vários itens com entrega programada, as opções programadas que têm a mesma identificação (portanto, considerado o mesmo método de envio) precisam ter as mesmas janelas de entrega entre eles. Se não houver interseção, o método de envio será descartado para alguns itens.

A questão é que, em alguns fluxos, como o "GET orderForm" API, este comportamento de filtragem não está sendo aplicado, oferecendo uma entrega programada inválida (sem interseção). Em outros fluxos, como na "orderForm simulation" ou enquanto de fato se seleciona o método de envio, a opção oferecida será corretamente filtrada/removida.

Efeito colateral: o Chk UI tentará usar/simular a opção inválida e pode ficar trancado em um loop de **pedidos**, porque o método de envio está disponível no primeiro momento, mas não pode ser usado em um segundo momento, e o aplicativo UI tentará novamente o primeiro passo enquanto revisa as opções disponíveis no orderForm.

## Simulação

- ter duas políticas de transporte marítimo diferentes (transportadores) com o mesmo "tipo de frete" (que define o "slaId")
- ambos programados, mas com uma janela de entrega diferente entre eles
- ter um item para cada política de embarque
- incluir ambos os itens no carrinho e simular o envio

Neste momento, a IU pode permanecer fechada em um loop devido à divergência entre o "GET orderForm" e a "orderForm simulação".

## Workaround

É necessário fixar a janela de entrega entre os métodos de envio que têm a mesma identificação (para ter as mesmas janelas de entrega), ou tratá-los como métodos de envio diferentes, assim utilizando identificações diferentes.


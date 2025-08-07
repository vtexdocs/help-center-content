---
title: 'Componente de envio trancado no estado "À espera de mais informações".'
id: 7HHlJdZvZ31NgsB7lTShAz
status: PUBLISHED
createdAt: 2023-03-29T19:26:05.971Z
updatedAt: 2023-03-29T20:51:39.432Z
publishedAt: 2023-03-29T20:51:39.432Z
firstPublishedAt: 2023-03-29T19:26:06.470Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: componente-de-envio-trancado-no-estado-a-espera-de-mais-informacoes
locale: pt
kiStatus: Backlog
internalReference: 780673
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A UI de Checkout não torna o componente de envio ao acessar a página de checkout diretamente através de etapa específica na URL (exceto para /cart e /expedição), os "dados de envio" estão incompletos, e há um aumento da latência no pedidoFormar solicitações API. Você verá a mensagem "À espera de mais informações" e não poderá prosseguir com a compra.


##

## Simulação



- Acrescentar um produto ao carrinho;
- Preencha o perfil, e deixe as informações de embarque vazias;
- Como dependendo do aumento da latência para experimentar o problema, considere o uso de uma extensão como o URL Throttler para adicionar um atraso no pedidoForme solicitações API;
- Ir para uma nova guia e acessar o checkout diretamente em uma etapa específica através da URL, por exemplo, usando "_www.store.com_/checkout/#/payment";
- Você verá a mensagem "Waiting for more information" no componente de envio.


##

## Workaround


Recarregar a página ou acessar o checkout usando especificamente a etapa de envio (_www.store.com_/checkout/#/shipping).





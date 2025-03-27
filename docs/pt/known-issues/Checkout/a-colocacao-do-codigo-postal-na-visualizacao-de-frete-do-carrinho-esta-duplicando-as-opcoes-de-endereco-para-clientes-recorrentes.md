---
title: 'A colocação do código postal na visualização de frete do carrinho está duplicando as opções de endereço para clientes recorrentes'
id: 4J8TMlhGmMtnHKXGES4qie
status: PUBLISHED
createdAt: 2023-12-20T21:36:52.612Z
updatedAt: 2023-12-20T21:36:53.238Z
publishedAt: 2023-12-20T21:36:53.238Z
firstPublishedAt: 2023-12-20T21:36:53.238Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: placing-postal-code-in-the-shipping-preview-of-the-cart-is-duplicating-address-options-for-recurring-customers
locale: pt
kiStatus: Backlog
internalReference: 956338
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Temos alguns problemas quando se trata de colocar códigos postais no módulo **Shipping Preview** no carrinho, alguns deles estão descritos nestes KIs:


- Ref. 1: [KI] Colar o código postal no carrinho de visualização de envio às vezes retorna um resultado de API nulo
- Ref. 2: [KI] O campo de entrada do código postal da visualização de remessa não está oculto

Nesse caso, o que acontece é que, para os clientes que já têm endereços registrados em seu perfil (compradores recorrentes), ao colocar um código postal na visualização de envio já usado em uma compra anterior, na API está sendo colocada uma opção adicional de endereço de entrega (`shippingData.availableAddresses`), ao avançar nas etapas do Checkout e chegar à seleção do endereço (`/checkout/#/shipping`), verifica-se que, em vez de selecionar o endereço correspondente ao referido código postal, abre uma nova opção de seleção incompleta e, em alguns casos, oculta, obrigando o cliente a selecionar uma na lista ou complementar a "nova" para passar para a próxima etapa.

## Simulação



1. Use um usuário que já tenha feito algumas compras e cujo perfil tenha algum endereço para entrega.
2. Adicione alguns itens ao carrinho e, em seguida, vá para o checkout.
3. No carrinho, use o Shipping Preview para colocar um código postal de um de seu perfil.
  1. Tente revisar o `orderForm` e procure por `shippingData.availableAddresses`
  2. O endereço em seu perfil será listado com um detalhe importante, o endereço já tem o número da rua (`shippingData.availableAddresses.[].number`)
  3. A nova opção na matriz que gera o problema não tem o `número`, o que a converte em uma opção de endereço incompleto.
4. Tente ir para a etapa de envio do checkout (`/checkout/#/shipping`) e você verá que não é possível passar para a etapa de pagamento se você não completar o endereço selecionado ou selecionar outra opção

## Workaround


Na etapa de envio do checkout, tente selecionar o endereço listado desejado (force a seleção de um dos endereços anteriores do cliente).







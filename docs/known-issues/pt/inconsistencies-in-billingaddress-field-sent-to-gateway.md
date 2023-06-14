---
title: 'Inconsistências no faturamentoCampo de endereço enviado ao Gateway'
id: 2SNynMgq0w0t7WBoXGoZwR
status: PUBLISHED
createdAt: 2022-01-21T18:13:45.045Z
updatedAt: 2022-11-25T22:04:04.058Z
publishedAt: 2022-11-25T22:04:04.058Z
firstPublishedAt: 2022-01-21T18:59:43.332Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistencias-no-faturamentocampo-de-endereco-enviado-ao-gateway
locale: pt
kiStatus: Scheduled
internalReference: 291688
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O gateway usa o endereço errado em cenários de compra recorrentes quando já existe um cartão salvo no perfil do usuário.

O erro ocorre porque o gateway se baseia na caixa de seleção 'isBillingAddressDifferent', que aparece ao lado dos dados do cartão no checkout, para definir se ele utilizará o endereço de entrega ou o endereço de faturamento em afiliações e antifraude. O problema é que esta caixa de seleção em questão nem sequer aparece no checkout após a primeira compra com o cartão, mas seu valor é "falso" por padrão. Isto significa que, sendo uma compra de entrega ou pickup, o endereço que o gateway irá utilizar é o endereço de entrega e não o endereço de faturamento, e isto trará problemas em cenários de pickup ou mesmo para gerar boletos bancários.



## Simulação


Cena A:

1. Como um novo usuário, vá até uma caixa da loja e faça uma compra de entrega para gerar um perfil de compra
2. Ao pagar este pedido, use um endereço de cartão diferente do endereço de entrega
3. Fazer uma nova compra com o mesmo e-mail e o mesmo cartão, mas comprando de uma opção de retirada
4. Observar os objetos 'isBillingAddressDifferent' que serão falsos e o 'address' do pagamento que será um endereço específico

Cenário B:

1. Como um novo usuário, vá até uma caixa da loja e faça uma compra de entrega para gerar um perfil de compra
2. Ao pagar este pedido, use o mesmo endereço que o endereço de entrega
3. Fazer uma nova compra com o mesmo e-mail e o mesmo cartão, mas comprando de uma opção de retirada
4. Observar os objetos 'isBillingAddressDifferent' que serão falsos e o 'endereço' do pagamento que não terá um endereço específico.



## Workaround


N/A


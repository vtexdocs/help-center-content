---
title: 'Configurações do orderForm'
id: 7EAqNk48KP2QHnCxu856jT
status: DRAFT
createdAt: 2024-06-18T13:34:07.902Z
updatedAt: 2024-06-18T13:44:46.612Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Shopping
author: 1malnhMX0vPThsaJaZMYm2
slug: configuracoes-do-orderform
locale: pt
legacySlug: configuracoes-do-orderform
subcategoryId: unknown-subcategory
---

# Configurações do orderForm

Nas seções a seguir, apresentamos algumas configurações de segurança disponíveis no Checkout que podem ser habilitadas pelo endpoint [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm).

### Exigir login ao fechar uma compra

Declarar o campo `requiresLoginToPlaceOrder` como `true` possibilita que compras sejam efetuadas apenas por clientes que tenham passado pelo processo de autenticação. O cliente precisa estar logado, usando o mesmo endereço de email fornecido no momento em que os produtos foram adicionados ao carrinho de compras.

Quando você optar por ativar este campo, o [SmartCheckout](https://help.vtex.com/pt/tutorial/smartcheckout-security--3SrJuuhrqwePUg1rp1exfB) será desabilitado para todos os clientes da loja.

### Tempo mínimo entre pedidos

Ao definir um valor numérico para o campo `minimumPurchaseDowntimeSeconds`, é possível determinar um tempo mínimo em segundos que um comprador deve aguardar antes de efetuar outra compra. Essa configuração impede que clientes criem múltiplos pedidos em um pequeno período de tempo.

Recomendamos configurar esse campo para 90 segundos e utilizar esta configuração em conjunto com a [exigência de login para fechar uma compra](#exigir-login-ao-fechar-uma-compra).

### Tempo mínimo de existência de um carrinho para permitir uso de um novo cartão de crédito

A definição de um valor numérico no campo `cartAgeToUseNewCardSeconds` determina por quanto tempo em segundos um novo carrinho precisa existir antes que um novo cartão de crédito seja autorizado para uso nele.

Essa configuração diminui a probabilidade da criação de múltiplos carrinhos e a adição de novos cartões de crédito. A ativação deste campo não afeta compras realizadas com cartões previamente salvos na conta do cliente.

Recomendamos configurar este campo para 30 segundos.

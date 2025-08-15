---
title: 'Como utilizar rebate ou VPC'
id: aS9z4io3auDKisk7M0rq9
status: PUBLISHED
createdAt: 2020-12-01T15:45:19.840Z
updatedAt: 2021-02-01T15:43:17.159Z
publishedAt: 2021-02-01T15:43:17.159Z
firstPublishedAt: 2021-02-01T15:43:17.159Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: how-to-use-rebates
legacySlug: como-utilizar-rebate-ou-vpc
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

O cenário B2B dispõe de diversas estratégias de incentivo, e uma das mais utilizadas é o rebate. Veja o artigo [As promoções mais comuns em B2B](https://help.vtex.com/pt/tutorial/as-promocoes-mais-comuns-em-b2b--XoM951AzUIvfaH71UdANf) para mais estratégias de incentivo B2B.

Rebate ou VPC (Verba de Propaganda Compartilhada) são créditos concedidos do fornecedor à loja aplicados na forma de descontos exclusivos para venda de produtos pré-selecionados, oferecendo preços mais baixos para o cliente final e aumento da performance de vendas.

Todo esse cenário além de fortalecer os relacionamentos entre fornecedores e revendedores, ajudar a fidelizar clientes finais. 

## Como configurar rebates na VTEX?

A maneira mais apropriada para utilizar o rebate recebido dos fornecedores é por meio de [Promoções Regulares](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#) com restrições de uso requeridas. Para saber mais sobre as possibilidades da Promoção Regular, leia nosso artigo de [Exemplos de promoção](https://help.vtex.com/pt/tutorial/exemplos-de-promocao--5A8UTc7knvAscxo7e7rMFD).

> ⚠️ O cliente pode eventualmente cancelar a compra de um pedido com desconto do rebate. Nesse caso, é preciso redirecionar a promoção para outro cliente para, assim, atingir o total dos créditos. Para verificar se o rebate foi aplicado a um pedido, use os endpoints <a href = "https://developers.vtex.com/vtex-developer-docs/reference/user-orders#userorderslist">Retrieve User's orders</a> ou [Get Order](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) da Orders API.

## Exemplo

O fornecedor e a loja acertaram um rebate de R$ 10.000 para incentivar compras da categoria Monitores durante o mês concedendo R$100 de desconto para cada monitor e só podendo ser utilizado uma vez por cliente.

Esse desconto será aplicado como uma Promoção Regular na VTEX. Para definir o rebate, é preciso:

1. Definir a promoção com um desconto nominal de R$100.
2. Definir que a promoção só será aplicada à categoria Monitores.
3. Restringir que a promoção será aplicada na loja 100 vezes.
4. Restringir que a promoção será aplicada uma vez por cliente.
5. Definir que a promoção só afetará um item por carrinho.

Para identificar os campos de preenchimento da promoção, leia nosso artigo [Campos da Promoção Regular](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327). 

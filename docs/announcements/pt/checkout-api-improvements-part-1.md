---
title: 'Melhorias na API do Checkout - Parte 1'
id: 5B4Qb4ffB5JgGrJNY3572l
status: DRAFT
createdAt: 2019-05-15T19:18:26.652Z
updatedAt: 2022-07-21T12:54:15.866Z
publishedAt: 
contentType: updates
productTeam: Shopping
author: authors_59
slug: melhorias-na-api-do-checkout-parte-1
locale: pt
legacySlug: melhorias-na-api-do-checkout-parte-1
announcementImageID: ''
announcementSynopsisPT: 'Saiba sobre as melhorias implementadas na API do Checkout e como se adaptar às novas funcionalidades'
---

Nosso time de desenvolvimento está constantemente melhorando a performance das nossas APIs, tornando-as mais eficientes e adicionado novas funcionalidades. Isso significa que alguns comportamentos e funcionalidades considerados deprecados podem ser removidos na próxima major da API do Checkout.

Com a comunicação destas melhorias, queremos permitir que você já comece o processo de atualização das integrações e customizações da sua loja, pensando nas novas soluções oferecidas pelo nosso sistema.

<div class="alert alert-warning">
  O layout atual da API do Checkout continua funcionando normalmente. Ainda assim, é muito importante que a implementação das melhorias descritas abaixo seja feita desde já. Ainda não há previsão para o lançamento da nova major da API do Checkout. No entanto, nesta próxima versão, os pontos descontinuados que estão descritos abaixo não irão mais funcionar.
</div>

## Endereço no carrinho e no pedido

__O que vai ser descontinuado:__
Campo `address` dentro do `shippingData`.

__Motivo:__
Hoje já é possível que um carrinho com vários itens tenha mais de um endereço (um endereço para entrega e alguns de pickup).

__Novo formato:__
Dentro do `shippingData` agora existe o campo `selectedAddresses`, que contém uma lista de todos os endereços usados no carrinho. No `logisticsInfo` de cada item, há também o campo `addressId`, que informa qual é o endereço usado na compra deste item.

__Exemplo:__

```
"shippingData": {
			"logisticsInfo": [
			  {
				"itemIndex": 0,
				"addressId": "3064755158330",
				...
			  }
			],
			"selectedAddresses": [
			  {
				"addressType": "residential",
				"receiverName": "Gui****** ********",
				"addressId": "3064755158330",
				"postalCode": "******040",
				"city": "Rio ** *******",
				"state": "RJ",
				"country": "BRA",
				"street": "Pra** ** *****ogo",
				"number": "***",
				"neighborhood": "Bot*****",
				"complement": null,
				"reference": null,
				"geoCoordinates": []
			  }
			],
			...
		}
```
## Lista de pedidos do usuário

__O que vai ser descontinuado:__
Rota do Checkout (__GET__ `{host}/api/checkout/pub/orders`) para obter a lista de pedidos do usuário.

__Motivo:__
A nova rota permite paginação e filtros. Além disso, ela é mais rápida, já que usa a mesma indexação do sistema de pedidos.

__Novo formato:__
Use a rota __GET__ `{host}/api/oms/user/orders/?page=1` com os cookies de autenticação do usuário. A resposta contém uma lista de pedidos com informações resumidas, dados de paginação e sumarização.

__Exemplo:__

```
	{
	  "list": [
	    ...
	  ],
	  "facets": [],
	  "paging": {
		"total": 37,
		"pages": 3,
		"currentPage": 1,
		"perPage": 15
	  },
	  "stats": {
		"stats": {
		  "totalValue": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  },
		  "totalItems": {
			"Count": 37,
			"Max": 0,
			"Mean": 0,
			"Min": 0,
			"Missing": 0,
			"StdDev": 0,
			"Sum": 0,
			"SumOfSquares": 0,
			"Facets": {}
		  }
		}
	  }
	}
```

## Acesso ao carrinho utilizando cookie

__O que vai ser descontinuado:__
Cookie `aspxauth` para obter acesso ao carrinho de compras.

__Motivo:__
Hoje, a ferramenta do [carrinho compartilhado](/tutorial/o-que-e-o-carrinho-compartilhado--3oKJZfoAoUm8g0ukCIGsUu) permite que mais de um cliente adicione, retire ou atualize itens e informações de um mesmo carrinho, através de um parâmetro de identificação na sua URL. Com isso, o cookie `aspxauth` de acesso ao carrinho se tornou obsoleto na resposta da API, sendo mantido apenas por questões de compatibilidade.

__Novo formato:__
A próxima major da API do Checkout não traz o cookie em sua resposta.

## Acesso ao pedido na tela de fechamento de compra (Order Placed) utilizando cookie

__O que vai ser descontinuado:__
Cookie `Vtex_CHKO_Auth` para ter acesso à tela de __order placed__.

__Motivo:__
O cookie descontinuado não possuía um nome amigável, que informasse corretamente a sua função. O novo cookie agora possui um nome mais coerente.

__Novo formato:__
Para acessar os dados da tela de order placed via API, é necessária a leitura do cookie `CheckoutDataAccess`. Esse cookie vem na resposta da rota `/transaction`, que tem o dado do id do `order-group` e deve ser passado no header para API de `pub/orders/order-group/order-group-id` por um usuário anônimo.

__Exemplo:__
O cookie deve ser passado no header com o seguinte formato: `CheckoutDataAccess=VTEX_CHK_Order_Auth={{token}}`

## Múltiplas entregas

__O que vai ser descontinuado:__
Na versão atual, sem o recurso de **múltiplas entregas** habilitado, a API do Checkout disponibiliza somente as formas de entrega em comum para todos os itens de um carrinho. Quando não é possível criar nenhuma interseção de formas de entrega dos itens de um carrinho, para não impossibilitar a compra, a API converte as diferentes formas de entrega como se fossem as mesmas. Este comportamento será descontinuado.

__Motivo:__
Esse comportamento de forçar diferentes formas de entrega como se fossem as mesmas pode causar problemas na integração dos pedidos com os ERPs. Com a funcionalidade de múltiplas entregas, essa interseção forçada de formas de compras não se faz mais necessária.

__Novo formato:__
Quando não existe nenhuma interseção entre as formas de entrega dos itens,a API do Checkout escolhe as formas de entrega específicas para cada item,permitindo o fechamento da compra. Para que isso aconteça, é necessário solicitar a ativação das múltiplas entregas na API do Checkout.

## Lançamento da nova major da API do Checkout

O anúncio das melhorias será realizado em diversas etapas, já que outras novas funcionalidades estão a caminho. Quando tivermos uma data para o lançamento da nova major do Checkout, você será comunicado com a antecedência necessária.

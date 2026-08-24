---
title: 'Seller abrangente'
id: 5Qn4O2GpjUIzWTPpvLUfkI
status: PUBLISHED
createdAt: 2021-09-27T17:51:50.695Z
updatedAt: 2023-02-23T15:06:08.007Z
publishedAt: 2023-02-23T15:06:08.007Z
firstPublishedAt: 2021-09-27T19:07:23.186Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: comprehensive-seller
legacySlug: seller-abrangente
locale: pt
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

As lojas VTEX são preparadas para funcionar nativamente como marketplaces e com isso vender produtos de outras lojas: os sellers. Nesse modelo, produtos de diferentes vendedores são disponibilizados para os clientes da loja. Por isso a VTEX tem critérios definidos para disponibilizar na vitrine da sua loja produtos de múltiplos vendedores. 

Um dos critérios utilizados pela VTEX é a região atendida pelo seller e é chamado de seller abrangente. Nesse sentido, a configuração de sellers abrangentes contribui para uma melhor experiência de compra para os clientes de um marketplace.

Para entender os detalhes do seller abrangente, esse artigo abordará:

* [O que é o seller abrangente](#o-que-e-o-seller-abrangente);
* [Quando definir um seller abrangente](#quando-definir-um-seller-abrangente);
* [Como a plataforma VTEX utiliza essa informação](#como-a-plataforma-vtex-utiliza-essa-informacao).

## O que é o seller abrangente

Seller abrangente é a configuração que possibilita que itens de um seller fiquem disponíveis para os clientes que não utilizam navegação com localização definida. Essa configuração evita cenários em que produtos ficam disponíveis para clientes cuja localização o seller não atende.

Por exemplo, imagine que sua loja tem produtos de diferentes sellers. Alguns sellers entregam em qualquer lugar do país, outros em apenas uma cidade ou região. Se um cliente navega no site da sua loja sem fornecer nenhuma informação de localização, produtos que não podem ser entregues no CEP do cliente podem aparecer como disponíveis e ele só saberá que esses itens estão indisponíveis ao final da compra. 

## Quando definir um seller abrangente

Para definir um seller como abrangente, esse vendedor deve ter uma área de entrega significativa para a operação da sua loja. Isto é importante porque, quando o cliente navega na loja sem informar previamente sua localização, serão apresentados a ele produtos do  seller principal (seller 1) e dos sellers abrangentes. 

Assim, se sellers cadastrados como abrangentes não atenderem às condições de entregas de pelo menos a maioria dos clientes, estes não terão suas expectativas atendidas durante a compra.

Recomendamos utilizar a configuração de seller abrangente para sellers que realizam entregas em todo o país.

## Como a plataforma VTEX utiliza essa informação

Quando ainda não há informações de localização do cliente, a heurística de seleção de sellers mostra apenas os produtos do seller principal (seller 1) e dos sellers abrangentes.

Isso acontece tanto durante a navegação quanto no carrinho, com o objetivo de evitar que o cliente veja produtos de vendedores que não realizam entregas no seu endereço.

> ℹ️ Mesmo que durante a navegação as informações de localização do cliente tenham sido capturadas e armazenadas  no campo `regionId` da API de Sessão, a localização não é usada no carrinho. No carrinho só fica disponível para o cliente os produtos do seller principal e dos sellers abrangentes. Os produtos dos outros sellers só ficam disponíveis após o cliente informar o código postal de entrega no checkout.

Em casos de mais de um seller abrangente cadastrado, o checkout seleciona aquele que tem maior saldo em estoque para o item em questão, dentre todos os sellers abrangentes. Saiba mais em [Seleção de seller white label](/pt/docs/tutorials/selecao-de-sellers-white-label).

## Como habilitar um seller como abrangente

A habilitação da propriedade abrangente é feita via API:

* Ao criar o seller, pela [API de criação](https://developers.vtex.com/docs/api-reference/marketplace-apis#post-/seller-register/pvt/sellers);
* Ou ao atualizar um seller existente, pela [API de atualização](https://developers.vtex.com/docs/api-reference/marketplace-apis#patch-/seller-register/pvt/sellers/-sellerId-).

Em ambos os casos é preciso ativar a propriedade `isBetterScope`. Quando ativada a propriedade (`true`), a plataforma interpreta que o seller realiza entregas em toda a região de atendimento da loja, permitindo que os itens fiquem disponíveis mesmo sem a localização definida.


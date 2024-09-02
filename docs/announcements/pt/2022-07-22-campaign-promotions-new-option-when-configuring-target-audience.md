---
title: 'Promoções de campanha: nova opção ao configurar público-alvo'
id: UJOyf1nYJ0xHXl88RytJ5
status: PUBLISHED
createdAt: 2022-07-22T14:00:40.004Z
updatedAt: 2022-07-25T13:00:56.738Z
publishedAt: 2022-07-25T13:00:56.738Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promocoes-de-campanha-nova-opcao-ao-configurar-publico-alvo
locale: pt
legacySlug: promocoes-de-campanha-nova-opcao-ao-configurar-publico-alvo
announcementImageID: ''
announcementSynopsisPT: 'Utilize múltiplos públicos-alvo em uma audiência de campanha simultaneamente, em vez de aplicar um ou outro público.'
---

Promoções para públicos segmentados são ações estratégicas para atrair e reter clientes. Na VTEX, a [promoção de campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume) possibilita atingir públicos-alvo específicos definidos em uma [audiência de campanha](https://help.vtex.com/pt/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m).

Aprimoramos a configuração de audiência de campanha para permitir que você some públicos-alvo, em vez de utilizar apenas um público ou outro. Assim, é possível combinar critérios e ser ainda mais preciso na definição do público que será beneficiado por uma promoção.

## O que mudou?

No Admin VTEX, em **Produtos > Promoções e Taxas > Audiências de campanhas > Nova audiência de campanha**, nas configurações referentes ao **Público-alvo**, acrescentamos a opção “e”, onde antes havia apenas a opção “ou”.  Isso significa que agora você pode aplicar uma lógica de adição de critérios (“e”), além da lógica de alternativa (“ou”) que já existia antes. Veja a imagem a seguir:

![publico-alvo-e-ou-pt](//images.ctfassets.net/alneenqid6w5/2NrpuE4MN7q6qaHI6mkoCe/92a1ac37149d16f9b039cd1f024e6dff/image4.gif)

Com a nova opção, é possível criar promoções de campanha a partir da combinação de critérios de forma mais flexível.

No setor de alimentação, por exemplo, ao cadastrar uma audiência de campanha, é possível criar um público-alvo definido pela compra de um item da categoria **Pizza** e outro público-alvo definido pela compra de um item da categoria **Bebidas**. Ao selecionar a opção “e” para aplicar ambos os critérios e associar essa audiência de campanha a uma promoção de campanha, você pode oferecer um desconto ou um brinde exclusivo para clientes que atenderem aos dois critérios.

Além da mudança na interface de criação e edição de audiências de campanha, acrescentamos o parâmetro `isAndOperator` nas rotas de API referentes a Audiências de Campanha. Confira a documentação da [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration) para mais detalhes.

## Por que fizemos essa mudança?

Incluímos a nova opção no cadastro do público-alvo com os seguintes objetivos:

* Tornar a configuração mais flexível.
* Atender mais cenários de promoções de campanha.
* Possibilitar que as ações promocionais sejam mais precisas ao atingir o público desejado.

## O que precisa ser feito?

Nenhuma ação é necessária, pois a atualização será aplicada automaticamente em todas as lojas VTEX.

Para mais informações sobre promoções de campanha e audiências de campanha, consulte a nossa documentação:

* [Criar Audiência de campanha](https://help.vtex.com/pt/tutorial/criar-audiencia-de-campanha--6cnuDZJzIkIeocewAQQK4K)
* [Audiências de campanhas](https://help.vtex.com/pt/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m)
* [Criar promoção de campanha](https://help.vtex.com/pt/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume)
* [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration)

---
title: Criar ponto de retirada de contingência para garanti-lo como opção no checkout 
id: 3mowqWEfjyM2g6WoWgE0Ao
status: CHANGED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2020-06-20T04:56:48.306Z
publishedAt: 2020-06-14T22:20:33.622Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: criar-ponto-de-retirada-de-contingencia-para-garanti-lo-como-opcao-no
legacySlug: criar-ponto-de-retirada-de-contingencia-para-garanti-lo-como-opcao-no
subcategory: 8AGXmtpbTqUE2KQu0Swwk
---

Em um cenário de omnichannel no qual sua loja usa pontos de retirada configurados em contas franquias, pode ser útil criar pontos de retirada de contingência. Este artigo explica o que é essa configuração, para que serve e como implementá-la.

Se seu cliente final compra um produto em qualquer dos seus canais (online ou lojas físicas) e deseja retirá-lo em uma loja específica, por padrão essa loja só aparece como opção de ponto de retirada no checkout caso tenha estoque disponível do produto.

No entanto, você pode preferir que essa loja funcione como ponto de retirada __mesmo se ela não tiver estoque__. Para isso, sua logística precisa garantir que o produto chegará a essa loja a partir de outro estoque - por exemplo, a partir do estoque do e-commerce. Neste caso, você precisa ter uma política de envio no e-commerce em que esteja configurado o ponto de retirada da loja física.

![contingency pickup](https://images.ctfassets.net/alneenqid6w5/7sxWH5eDPpCmNlEPfHiZF1/7a10b60e1273d58d9c2ca7610a9ba888/contingency_pickup.png)

## Como implementar um ponto de retirada de contingência

Siga estes passos para implementar um estoque de contingência:
- No painel administrativo do e-commerce ou da loja que você deseja usar como fallback - ou seja, a loja de cujo estoque sairão os produtos para abastecer o ponto de retirada -, configure um novo ponto de retirada com as informações da loja física desejada.
- Ainda no e-commerce ou na loja de fallback, crie uma nova política de envio. Essa política de envio precisa ter exatamente o __mesmo tipo de entrega__ já configurado na logística de retirada que você utiliza na loja física onde os produtos serão retirados.
- Associe o novo ponto de retirada criado a essa política de envio.

<div class="alert alert-info">
Com isso, você terá duas rotas logísticas com o mesmo pickup point: uma delas, com estoque local da loja física; a outra com o estoque de outro canal (e-commerce ou outra loja física). Quando um cliente escolher esse ponto de retirada no checkout, as duas rotas vão competir. Sempre que houver estoque local, seu SLA será mais vantajoso e por isso ele vencerá. Quando não houver estoque local, o pedido vai cair na rota que você configurou a partir deste artigo.
</div>

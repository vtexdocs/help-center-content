---
title: 'Criar ponto de retirada de contingência para garanti-lo como opção no checkout '
id: 3mowqWEfjyM2g6WoWgE0Ao
status: PUBLISHED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2023-08-01T21:35:48.449Z
publishedAt: 2023-08-01T21:35:48.449Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
locale: pt
legacySlug: criar-ponto-de-retirada-de-contingencia-para-garanti-lo-como-opcao-no
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

Em um cenário de omnichannel no qual sua loja usa pontos de retirada configurados em contas franquias, pode ser útil criar pontos de retirada de contingência. Este artigo explica o que é essa configuração, para que serve e como implementá-la.

Se seu cliente final compra um produto em qualquer dos seus canais (online ou lojas físicas) e deseja retirá-lo em uma loja específica, por padrão essa loja só aparece como opção de ponto de retirada no checkout caso tenha estoque disponível do produto.

No entanto, você pode preferir que essa loja funcione como ponto de retirada __mesmo se ela não tiver estoque__. Para isso, sua logística precisa garantir que o produto chegará a essa loja a partir de outro estoque - por exemplo, a partir do estoque do e-commerce. Neste caso, você precisa ter uma política de envio no e-commerce em que esteja configurado o ponto de retirada da loja física.

![Criar ponto de retirada de contingência para garanti-lo como opção no checkout](//images.ctfassets.net/alneenqid6w5/38phAuzqPzQoBPy8811K3K/53b839763aa9f25178d599d78eb73203/diagrama-como-criar-um-ponto-de_contigencia-pt.jpg)

## Como implementar um ponto de retirada de contingência

Para implementar um ponto de retirada de contingência, é necessário configurar os seguintes passos:

1. No Admin VTEX, [cadastre um novo ponto de retirada](https://help.vtex.com/pt/tutorial/cadastro-de-pontos-de-retirada--2R5ClQiwe4KoSQgsuiOw4E) na loja, que possua o estoque de onde sairão os produtos, para abastecer esse ponto de retirada.
2. [Crie uma nova política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140#cadastrar-uma-politica-de-envio), cujo o tipo de envio tenha o mesmo nome do tipo de envio já configurado na polítca utilizado na loja física, onde os produtos serão retirados.
3. Associe esta nova política ao ponto de retirada recém-criado.

Dessa forma, você terá duas rotas de logística de entrega: uma logística com o estoque da loja física, e uma logística diferente com o estoque de outra loja.

Quando o cliente escolher esse ponto de retirada no checkout, o sistema irá proceder da seguinte forma:

- Se houver estoque local, o prazo de entrega será mais currto. Nesse caso, será selecionado o ponto de retirada principal.
- Caso não haja estoque local, a rota logística configurada como contingência será selecionada.


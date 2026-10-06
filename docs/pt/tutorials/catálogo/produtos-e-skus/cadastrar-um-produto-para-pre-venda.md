---
title: 'Cadastrar um produto para pré-venda'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2026-10-06T15:00:00.000Z
publishedAt: 2025-11-06T15:35:57.132Z
firstPublishedAt: 2021-09-14T16:54:57.039Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-a-product-for-presale
legacySlug: cadastrar-um-produto-para-pre-venda
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

Na plataforma VTEX, os lojistas podem vender um produto antes de ele chegar ao estoque, em modo de pré-venda. Nesse modo, o cliente compra e paga pelo item antecipadamente, e o prazo de entrega é calculado a partir da data prevista de chegada do item ao estoque.

Neste artigo iremos abordar os seguintes tópicos:

- [Criar produto para a pré-venda](#criar-produto-para-a-pre-venda)
- [Ordenar produtos por data de lançamento](#ordenar-produtos-por-data-de-lancamento)
- [Validar a configuração](#validar-a-configuracao)
- [Agendar preços](#agendar-precos)
- [Agendar conteúdo](#agendar-conteudo)

> ℹ️ O que ativa a pré-venda é o campo **Data de pré-venda**, configurado no SKU. O campo **Data de lançamento**, configurado no produto, não interfere na pré-venda nem na visibilidade do produto na frente de loja, que é determinada pelo campo **Mostrar no site**.

## Criar produto para a pré-venda

Para disponibilizar um produto para pré-venda, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique em `+ Adicionar produto`.
3. (Opcional) Na seção **Frente de loja**, no campo **Data de lançamento**, selecione a data em que lançará o produto.

  > ℹ️ Este campo não ativa a pré-venda nem altera o prazo de entrega. Ele é utilizado para ordenar os resultados de busca do site, conforme explicado em [Ordenar produtos por data de lançamento](#ordenar-produtos-por-data-de-lancamento). O valor deste campo também é considerado na criação de [coleções automáticas](/pt/docs/tutorials/cadastrar-colecoes-beta) e na data de [indexação](/pt/docs/tutorials/entendendo-o-funcionamento-da-indexacao) do produto.

4. Preencha os demais campos para a criação do produto. Saiba mais em [Adicionar ou editar produto](/pt/docs/tutorials/adicionar-ou-editar-produto).
5. Clique em `Salvar`.
6. Clique na aba `SKUs`.
7. Clique no sinal `+` **> Adicionar novo SKU**.
8. Na seção **Estratégia comercial**, no campo **Data de pré-venda**, selecione a data prevista de chegada do item ao estoque, ou seja, a data em que ele ficará disponível para envio. O SKU pode ser vendido antes dessa data, e a entrega é calculada a partir dela.

  > ℹ️ A data estimada de entrega exibida ao cliente é calculada somando o SLA de entrega à data de pré-venda: `data estimada de entrega = data de pré-venda + SLA de entrega`. Saiba mais em [Como funciona o cálculo de envio](/pt/docs/tutorials/como-funciona-o-calculo-de-envio).

9. Preencha os demais campos para a criação do SKU. Saiba mais em [Adicionar ou editar SKU](/pt/docs/tutorials/adicionar-ou-editar-sku).
10. Clique em `Salvar`.
11. Cadastre a quantidade disponível do SKU no estoque. Saiba mais em [Atualização da quantidade de itens em estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque).

  > ⚠️ A **Data de pré-venda** não torna o item vendável por si só. O cliente só consegue comprar o SKU em pré-venda se ele tiver quantidade disponível em estoque.

> ℹ️ O pedido do item em pré-venda só deverá ser faturado a partir da data de pré-venda, isto é, quando o item estiver disponível em estoque para envio.

## Ordenar produtos por data de lançamento

A data preenchida no campo **Data de lançamento** permite exibir os produtos do lançamento mais recente para o mais antigo. Para isso, adicione a querystring `O=OrderByReleaseDateDESC` ao final da URL de uma página de listagem de produtos, como no exemplo a seguir:

`https://www.{nomeDaLoja}.com.br/{departamento}/{categoria}?O=OrderByReleaseDateDESC`

Nesse exemplo, a página da categoria passa a exibir os produtos ordenados pela data de lançamento, em ordem decrescente. Confira os demais parâmetros de ordenação disponíveis em [Choosing the order of my products](https://developers.vtex.com/docs/guides/choosing-the-order-of-my-products).

A querystring funciona tanto em lojas que usam a [VTEX Search (Legado)](/pt/docs/tutorials/como-funciona-vtex-search-legado) quanto em lojas que usam o [VTEX Intelligent Search](/pt/docs/tutorials/intelligent-search-visao-geral). O que muda entre os dois buscadores é a ordenação aplicada quando a querystring não é utilizada:

- **VTEX Search (Legado):** os resultados seguem a pontuação (score) que o indexador calcula para o termo buscado. Saiba mais em [VTEX Search (Legado)](/pt/docs/tutorials/como-funciona-vtex-search-legado).
- **VTEX Intelligent Search:** os resultados seguem a ordenação por relevância, em que a data de lançamento também pode influenciar a ordem. Nas [Regras de relevância](/pt/docs/tutorials/regras-de-relevancia), o critério **Data de lançamento** atribui ao produto um valor decrescente entre 1 e 0 ao longo de 90 dias contados a partir da data cadastrada. Ao aplicar a querystring, as Regras de relevância deixam de ser consideradas na ordem dos resultados.

> ℹ️ Em lojas headless que consomem diretamente a [Intelligent Search API](https://developers.vtex.com/docs/api-reference/intelligent-search-api-v1), o parâmetro de ordenação equivalente é `sort=release:desc`.

## Validar a configuração

Para confirmar que o prazo de entrega do SKU está sendo calculado a partir da data de pré-venda sem precisar fazer um pedido real, simule a compra de uma das formas abaixo:

- **Na frente de loja:** adicione o SKU ao carrinho, avance até o checkout e informe um CEP de entrega. Confira se o prazo de entrega exibido é contado a partir da data de pré-venda. Não é necessário finalizar a compra.
- **Via API:** envie uma requisição para o endpoint [Cart simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) da Checkout API com o SKU e o CEP desejados. Confira o prazo de entrega retornado no objeto `logisticsInfo` da resposta.

> ⚠️ O [Simulador de envio](/pt/docs/tutorials/simulador-de-envio) do Admin VTEX não considera a **Data de pré-venda** no prazo de entrega total. Por isso, utilize uma das opções acima para validar a configuração.

## Agendar preços

Para agendar os preços fixos da sua loja para a pré-venda de um produto, siga os passos descritos em [Agendar preços](/pt/docs/tutorials/agendar-preco).

## Agendar conteúdo

Para aumentar o sucesso na etapa de pré-venda e obter um maior alcance de clientes, é importante potencializar a divulgação do produto que será lançado. Para isso, vale agendar conteúdo sobre o lançamento, conforme explicado no artigo [Agendamento para eventos especiais](/pt/docs/tutorials/agendamento-para-eventos-especiais#agendar-conteudo).

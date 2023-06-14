---
title: Configurar a regionalização de sellers
id: 32t6wLpQCEnumoh8TjT5fw
status: PUBLISHED
createdAt: 2022-08-26T13:58:10.648Z
updatedAt: 2022-08-26T18:34:14.924Z
publishedAt: 2022-08-26T18:34:14.924Z
firstPublishedAt: 2022-08-26T18:34:14.924Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-a-regionalizacao-de-sellers
legacySlug: configurar-a-regionalizacao-de-sellers
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

**Region** é a funcionalidade responsável por buscar os [sellers white labels](https://help.vtex.com/pt/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa?&utm_source=autocomplete#) de um marketplace conforme regiões de entrega e definir quais deles são capazes de atender ao pedido do cliente de acordo com a sua localização. Além disto, por meio dela também é possível filtrar preços e a disponibilidade dos items no estoque regionalmente.

Quando o cliente navega pela loja, a sua localização é registrada pelo [VTEX Session](https://help.vtex.com/pt/tutorial/vtex-session-visao-geral-do-sistema-de-sessoes--6C4Edou6bYqqEAOCAg2MQQ#). Estes dados são encaminhados para o Checkout, que por sua vez, gera uma lista de sellers habilitados para aquela região de entrega, denominada **regionId**.

Para verificar quais sellers foram considerados para uma determinada região em sua loja, acesse o endpoint [Get sellers by region](https://developers.vtex.com/vtex-rest-api/reference/getsellersbyregion).

## Divergências entre disponibilidade e preço

Os itens e preços mostrados na vitrine de uma loja são baseados no cadastro do [catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR#) realizado pelo lojista. Durante o processo de compra podem ocorrer situações nas quais um ou mais itens tenham divergências na disponibilidade de entrega e preços (incluindo promoções) entre a vitrine e o carrinho no Checkout.

Uma divergência de disponibilidade de entrega (item disponível na vitrine, mas indicado como “Esgotado” no carrinho), ocorre quando:

1. Não existem sellers que entregam o item naquela região.
2. Não existe estoque disponível do item nos sellers que atendem aquela região.

A divergência de preço/promoção (valores diferentes entre a vitrine e o carrinho) pode ocorrer quando os sellers selecionados para entrega (por maior quantidade de itens do carrinho no estoque ou por questões de otimização logística) possuem condições comerciais específicas diferentes (preço/promoção) do marketplace e dos sellers abrangentes.

Com a utilização do **Region**, caso o cliente realize o login na loja ainda durante o processo de seleção dos itens na vitrine, ocorrem a seguintes modificações:
- **Divergência na disponibilidade**: não haverá esta divergência. Somente serão exibidos como “Disponíveis” aqueles itens que tiverem disponibilidade de entrega (estoque) no seu endereço.
- **Divergência no preço**: diminuição ou eliminação da divergência. Somente ocorrerá diferença no preço/promoção caso o seller com melhor otimização logística seja escolhido em relação àquele que possui maior estoque do item.

## Ativar o Region

Para ativar o **Region** em sua loja, é necessário realizar os seguintes passos:

1. [Configurar preço e disponibilidade de SKUs por Region](https://help.vtex.com/pt/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc#)
2. [Habilitar a funcionalidade Region](https://developers.vtex.com/vtex-rest-api/docs/how-to-configure-region-feature-sku)

<div class="alert alert-info">
  Atualmente, o <b>Region</b> está disponível para utilização em todas as lojas VTEX na versão v2. Saiba mais em <a href="https://developers.vtex.com/vtex-developer-docs/changelog/region-v2-release">Region v2<a/>.
</div>

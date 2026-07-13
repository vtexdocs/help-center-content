---
title: 'Configurar acessórios, sugestões, produtos similares e mostrar junto'
id: tutorials_280
status: PUBLISHED
createdAt: 2017-04-27T22:10:17.727Z
updatedAt: 2026-07-13T00:00:00.000Z
publishedAt: 2024-10-30T18:49:41.924Z
firstPublishedAt: 2017-04-27T23:03:13.377Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: setting-up-accessories-suggestions-similar-products-and-show-together
legacySlug: configurando-produto-similar-sugestoes-acessorios-e-genericos
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Na VTEX, você pode destacar produtos relacionados na vitrine por meio de estratégias de cross-selling e upselling. Essas relações permitem sugerir itens complementares, alternativas de compra ou produtos de maior valor e são exibidas na loja com os controles e templates do CMS Portal (Legado).

Neste tutorial, você aprenderá o que são as relações de cross-selling e upselling, quais tipos de recomendação podem ser configurados e como cadastrá-las em lojas que utilizam o CMS Portal (Legado), tanto no Admin VTEX quanto via API.

## O que é cross-selling?

Consiste em oferecer um produto complementar ao que o usuário está adquirindo. Por exemplo, o visitante da sua loja está comprando um celular; ele poderá se interessar por um fone de ouvido ou por uma capa para o aparelho.

## O que é upselling?

Significa oferecer ao cliente uma versão superior do item adquirido. No caso do celular, seria apresentar outro aparelho com mais funcionalidades ou a opção de substituir um fone de ouvido por outro com Bluetooth.

## Cross-selling e upselling na plataforma VTEX

Veja a seguir quais relações de cross-selling e upselling os SKUs podem ter entre si:

- **Acessórios:** itens sugeridos como opções complementares à venda. Os itens de acessório podem ser selecionados pelo cliente na vitrine, marcando a caixa de seleção correspondente.
- **Sugestões:** itens apresentados como sugestões de compra. Um SKU só aparece como sugestão quando seu preço é superior ao do item à venda.
- **Produtos similares:** itens oferecidos como alternativa de compra ou simplesmente como similares.
- **Mostrar junto:** itens exibidos junto ao produto principal como sugestão para comprá-los em conjunto.

>ℹ️ Essas configurações de vitrine podem ser associadas à promoção [Compre Junto](https://help.vtex.com/pt/docs/tutorials/compre-junto).

## Configurar cross-selling e upselling

A configuração é feita em nível de SKU e pode ser realizada diretamente no [Admin VTEX](#via-admin-vtex) ou por meio de nossas [APIs](#via-api-reference).

- **Via Admin VTEX:** manualmente ao [adicionar ou editar um SKU](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-sku).
- **Via API Reference:** usando a API de complemento de SKU para criar ou atualizar relações e os endpoints públicos de cross-selling para consulta no storefront.

>ℹ️ A exibição na vitrine ocorre por meio dos controles e templates do CMS Portal (Legado), como `productsCrossSelling` e placeholders específicos. Saiba mais sobre controle para templates em [List of template controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).

### Via Admin VTEX

Para configurar cross-selling e upselling manualmente no Admin VTEX, siga as instruções abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs** ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique na linha do produto desejado.
3. Clique na aba **SKUs**.
4. Na seção **Recomendações de cross-sell e up-sell**, clique no ícone de adicionar `+`.
5. Selecione uma das opções: `Acessórios`, `Sugestões`, `Produtos similares` ou `Mostrar junto`.
6. Clique em `Adicionar SKUs`.
7. Selecione os SKUs desejados. Você pode usar a barra de busca para pesquisar SKUs.
8. Clique em `Aplicar`.

Saiba mais sobre as configurações de SKUs em [Adicionar ou editar SKU](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-sku).

### Via API Reference

Também é possível configurar relações de cross-selling e upselling via API. Essas relações são configuradas em nível de SKU e utilizam a mesma base de dados das recomendações cadastradas no Admin VTEX.

Para criação e atualização das relações, use a API de complemento de SKU (`/api/catalog/pvt/skucomplement`), que faz parte do conjunto de endpoints das APIs de Catálogo. Para mais detalhes, consulte [Catalog API](https://developers.vtex.com/docs/api-reference/catalog-api).

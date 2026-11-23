---
title: 'Configurar promoção com destaque/flag'
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2026-11-11T17:30:00.000Z
publishedAt: 2025-09-29T17:45:04.455Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-with-a-highlightflag
legacySlug: configurando-promocao-com-destaque-flag
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Configurar promoção com destaque / flag

O destaque de uma promoção é um aviso visual que pode ser inserido nas prateleiras e nas páginas de produtos, informando que o item é elegível para uma promoção. Um exemplo comum é a indicação de frete grátis abaixo da imagem do produto.

![ExemploPromocaoDestaque2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/promoções/regras-e-condições/configurando-promocao-com-destaque-flag_1.png)

Neste guia, você encontrará as seguintes seções:

- [Promoções elegíveis para destaque](#promocoes-elegiveis-para-destaque)
- [Restrições](#restricoes)
- [Configurar a promoção](#configurar-a-promocao)
- [Destaque de promoções no Store Framework](#destaque-de-promocoes-no-store-framework)
- [Destaque de promoções no CMS Portal (Legado)](#destaque-de-promocoes-no-cms-portal-legado)

## Promoções elegíveis para destaque

O destaque de promoção permite exibir uma indicação visual nas prateleiras e nas páginas de produto, informando que o item faz parte de uma promoção ativa.

Atualmente, a opção Destacar nos produtos está disponível em todos os tipos de promoção.

No entanto, a exibição desse destaque não depende do tipo de promoção configurada. Em casos em que a promoção depende de informações que ainda não estão disponíveis no momento em que as prateleiras ou páginas de produto são carregadas, o destaque não é exibido.

## Restrições

Não é possível configurar o destaque de promoções que possuem alguma restrição no carrinho, como:

- Faixa de CEP
- Valor acumulado em compras
- BIN
- Cluster de clientes
- Tipo de frete
- Forma de pagamento
- Número máximo de parcelas, apenas na primeira compra

Essas promoções não são aplicáveis a todos os consumidores, pois exigem informações adicionais (por exemplo, o CEP de entrega). Por isso, o destaque não pode ser configurado nesses casos.

## Configurar a promoção

Siga as instruções abaixo para configurar o destaque nas promoções de sua loja.

1.  No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2.  Busque pela promoção que deseja configurar.
3.  Na opção **Destaque nos produtos**, selecione **Com destaque**.
4.  Configure a promoção com as especificações desejadas.
5.  Clique em `Salvar`.
6. Prossiga para as instruções correspondentes à tecnologia de frontend utilizada por sua loja:

- [Store Framework](#destaque-de-promocoes-no-store-framework)
- [CMS Portal (Legado)](#destaque-de-promocoes-no-cms-portal-legado)

## Destaque de promoções no Store Framework

Para lojas desenvolvidas com Store Framework, após configurar o destaque da promoção, siga as instruções da documentação do componente [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights).

## Destaque de promoções no CMS Portal (Legado)

Para lojas CMS Portal (Legado), após configurar o destaque da promoção, é necessário adicionar o controle de destaque aos templates de página e de prateleira no módulo CMS e definir o estilo da flag com CSS. Para ver as instruções, consulte [Configurar destaque de promoção no CMS Portal (Legado)](/pt/docs/tutorials/configurar-destaque-de-promocao-no-cms-portal-legado).

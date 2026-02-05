---
title: 'Enviar ao Gateway ou ao ERP o preço do item já com o imposto separado'
id: 77O1rBSLHqW8eWWsE6IEii
status: PUBLISHED
createdAt: 2017-08-14T15:30:39.027Z
updatedAt: 2024-04-17T14:38:57.929Z
publishedAt: 2024-04-17T14:38:57.929Z
firstPublishedAt: 2017-08-16T17:43:33.301Z
contentType: tutorial
productTeam: Others
author: 5V92cmF9jG8KG600EwUgEg
slugEN: send-item-price-with-tax-shown-separately
legacySlug: enviar-preço-com-imposto-separado
locale: pt
subcategoryId: 18Gsips3u48UYCu0Ku2sWm
---

Muitas vezes é necessário enviar ao Gateway ou ao seu ERP o preço do item já com o imposto discriminado, ou seja, separado do preço do item.

Para isso, você pode utilizar a configuração de impostos em [__Pricing__](/pt/docs/tutorials/como-criar-taxaimposto).

Neste artigo, mostraremos como funciona o sistema para estes casos.
**Cenário 1**: Meu ERP envia o preço já com o IVA para a VTEX, portanto, não preciso fazer o cálculo.

1. Página de Categoria![CATEGORIASINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_1.png)
2. Página de Produto![PRODUTOSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_2.png)
3. Carrinho![CARRINHOSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_3.png)
4. Checkout![CHECKOUTSINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_4.png)

**Cenário 2**: Meu ERP envia o preço *sem* IVA para a VTEX.

Para indicar nas vitrines o preço somando as taxas aplicadas, utilize o atributo `$product.BestPricePlusTax`.

Ou, então, para criar um JS e somar o valor do imposto nas vitrines, também é possível utilizar o controle `$product.Tax` (Ele indica as taxas registradas referentes ao produto).

[Veja a documentação sobre controles aqui](https://developers.vtex.com/docs/guides/shelf-template-controls)

__Atenção__: Na página de produto é necessário colocar um JavaScript para fazer a soma do valor.

1. Página de Categoria![CATEGORIASINIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_5.png)
2. Página de Produto![PRODUTOCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_6.png)
3. Carrinho![CARRINHOCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_7.png)
4. Checkout![CHECKOUTCONIVA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/taxas/enviar-preco-com-imposto-separado_8.png)

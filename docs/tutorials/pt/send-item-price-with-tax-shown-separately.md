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
slug: enviar-preco-com-imposto-separado
locale: pt
legacySlug: enviar-preço-com-imposto-separado
subcategory: 18Gsips3u48UYCu0Ku2sWm
---

Muitas vezes é necessário enviar ao Gateway ou ao seu ERP o preço do item já com o imposto discriminado, ou seja, separado do preço do item.

Para isso, você pode utilizar a configuração de impostos em [__Pricing__](/pt/tutorial/como-criar-taxaimposto).

Neste artigo, mostraremos como funciona o sistema para estes casos.
**Cenário 1**: Meu ERP envia o preço já com o IVA para a VTEX, portanto, não preciso fazer o cálculo.

1. Página de Categoria![CATEGORIASINIVA](https://images.contentful.com/alneenqid6w5/OAT1GSzx4YUs4iuMKOsiE/61f68ef8a8f6ca0e52db228c53f0ede1/CATEGORIASINIVA.png)
2. Página de Produto![PRODUTOSINIVA](https://images.contentful.com/alneenqid6w5/2RW5XMDChOo2SaWWqcGGis/658b27601bff63231565921b5ccf9d48/PRODUCTOSINIVA.png)
3. Carrinho![CARRINHOSINIVA](https://images.contentful.com/alneenqid6w5/6aq95ChS2ke6yeqW8MKYWs/c6c3e4e8368a99a3ab65d0e4f8723fe3/CARRITOSINIVA.png)
4. Checkout![CHECKOUTSINIVA](https://images.contentful.com/alneenqid6w5/KD05AMNlKeEE2kMY2KsKw/e7d845e01d7e758da7395d3183e96461/CHECKOUTSINIVA.png)

**Cenário 2**: Meu ERP envia o preço *sem* IVA para a VTEX.

Para indicar nas vitrines o preço somando as taxas aplicadas, utilize o atributo `$product.BestPricePlusTax`.

Ou, então, para criar um JS e somar o valor do imposto nas vitrines, também é possível utilizar o controle `$product.Tax` (Ele indica as taxas registradas referentes ao produto).

[Veja a documentação sobre controles aqui](https://developers.vtex.com/docs/guides/shelf-template-controls)

__Atenção__: Na página de produto é necessário colocar um JavaScript para fazer a soma do valor.

1. Página de Categoria![CATEGORIASINIVA](https://images.contentful.com/alneenqid6w5/OAT1GSzx4YUs4iuMKOsiE/61f68ef8a8f6ca0e52db228c53f0ede1/CATEGORIASINIVA.png)
2. Página de Produto![PRODUTOCONIVA](https://images.contentful.com/alneenqid6w5/1PFWNiW4lK8ogIMKMu06Gy/d3ec875da04e52f971cac61f4b10d9b2/PRODUCTOCONIVA.png)
3. Carrinho![CARRINHOCONIVA](https://images.contentful.com/alneenqid6w5/52xSrXT1Pigoo4aAuwYq6A/7bdf52cfa0deb873fca1909592607fa9/CARRITOCONIVA.png)
4. Checkout![CHECKOUTCONIVA](https://images.contentful.com/alneenqid6w5/6Hbi6RI704AYM0GEUUO88A/4042846eac28ac9aafa6568a9f4adcf1/CHECKOUTCONIVA.png)

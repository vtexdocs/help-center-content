---
title: 'Configurar desconto de preço à vista'
id: 7Lfcj9Wb5dpYfA2gKkACIt
status: PUBLISHED
createdAt: 2020-12-18T19:16:46.225Z
updatedAt: 2024-11-01T13:37:19.588Z
publishedAt: 2024-11-01T13:37:19.588Z
firstPublishedAt: 2021-05-04T20:05:58.585Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-a-discount-for-orders-prepaid-in-full
locale: pt
legacySlug: configurar-desconto-de-preco-a-vista
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
---

Uma das estratégias de atração de clientes mais usadas no ecommerce é aplicar a meios de pagamento específicos um desconto no __preço à vista__. Esse preço promocional geralmente fica visível para o usuário apenas na etapa de pagamento do checkout após a seleção da forma de pagamento.

A maior vantagem dessa estratégia é o fato de o preço à vista ser calculado automaticamente, evitando inconsistências em canais de venda – como o Google Shopping – que comparam o preço enviado pela integração com o preço exibido na página de produto.

Para fazer uso dessa estratégia na plataforma VTEX, além de indicar o desconto de preço à vista, é preciso selecionar o meio de pagamento em que o desconto será aplicado. Portanto, é necessário:

1. Utilizar a Checkout API para determinar o desconto de preço à vista e vinculá-lo a um meio de pagamento (veja o tutorial [Set a discount using the Checkout API](https://developers.vtex.com/vtex-rest-api/docs/set-a-discount-using-the-checkout-api)).
2. Configure o layout tanto para lojas em CMS quanto para lojas em IO, garantindo que o desconto seja exibido no método de pagamento selecionado na página do produto (veja abaixo).

## CMS

Depois de determinar o desconto no Checkout, é preciso atrelar o SKU ao meio de pagamento para que o desconto do preço à vista esteja visível na página de produto. Veja os passos abaixo.

1. No Admin VTEX, acesse *Storefront > Layout*, ou digite *Layout* na barra de busca no topo da página.
2. Clique na pasta __CMS__ e, depois, em __HTML Templates__.
3. Clique no template da sua página de produto na lista de templates.
4. Na propriedade `skuPrice`, adicione a variável `paymentSystemId` com o ID do meio de pagamento desejado.

![Screenshot 2020-12-18 Criar preço à vista](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Integrations/Price/configurar-desconto-de-preco-a-vista_1.png)

6. Após a alteração, clique em __Save Template__ no campo superior para salvar.

Com essa configuração, o desconto de preço à vista estará ativo. 

## VTEX IO Store Framework
Para as lojas desenvolvidas com o VTEX IO, essa funcionalidade está disponível de forma nativa pelo componente `vtex.product-price` no bloco `product-spot-price`. Para configurá-la, acesse nossa [documentação do produto](https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-price#configuration).

## Artigos relacionados

[Configurar desconto de  preço à vista para Google Shopping](/pt/tutorial/configurar-desconto-de-preco-a-vista-para-google-shopping--40K3R5d4NogMvCzIWdWt3e#)

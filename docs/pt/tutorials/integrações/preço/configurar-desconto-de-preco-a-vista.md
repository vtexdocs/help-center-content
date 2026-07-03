---
title: 'Configurar desconto de preço à vista'
id: 7Lfcj9Wb5dpYfA2gKkACIt
status: PUBLISHED
createdAt: 2020-12-18T19:16:46.225Z
updatedAt: 2026-07-01T00:00:00.000Z
publishedAt: 2024-11-01T13:37:19.588Z
firstPublishedAt: 2021-05-04T20:05:58.585Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-a-discount-for-orders-prepaid-in-full
legacySlug: configurar-desconto-de-preco-a-vista
locale: pt
subcategoryId: 3pGCbMh80UueoeSqoAgSuS
seeAlso:
  - "/pt/docs/tutorials/configurar-desconto-de-preco-a-vista-para-google-shopping"
---

Uma das estratégias de atração de clientes mais usadas no ecommerce é aplicar, a meios de pagamento específicos, um desconto no **preço à vista**. Esse preço promocional normalmente é exibido ao cliente apenas na etapa de pagamento do checkout, após a seleção da forma de pagamento.

A principal vantagem dessa estratégia é que o preço à vista é calculado automaticamente, evitando inconsistências em canais de venda – como o Google Shopping – que comparam o preço enviado pela integração ao preço exibido na página de produto.

Este tutorial explica como configurar um desconto de preço à vista na VTEX, desde a definição do desconto e do meio de pagamento até a configuração do frontend da loja para exibir corretamente esse valor na página do produto.

## Antes de começar

Antes de configurar a exibição do preço à vista, crie ou valide a promoção responsável pelo desconto no Admin VTEX. É nessa promoção que você define:
- O meio de pagamento que receberá o desconto.
- O percentual ou valor do benefício.
- Os canais de venda.
- O escopo dos produtos elegíveis, como SKUs, coleções ou outros critérios da promoção.

Saiba mais em [Criar promoções](https://help.vtex.com/pt/docs/tutorials/criar-promocoes).

## Instruções

### 1 - Defina o meio de pagamento usado no cálculo do preço à vista

Use o endpoint de configuração do `orderForm` para preencher a propriedade `paymentSystemToCheckFirstInstallment` com o ID do meio de pagamento desejado.

Você pode obter esse ID no Admin VTEX, em **Configurações da loja > Pagamentos > Configurações > Condições de pagamento**.

![id-pagamentos](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/preço/id-pagamentos.png)

Depois de atualizar a configuração, [simule um carrinho](https://developers.vtex.com/docs/guides/simulate-a-shopping-cart) para verificar se o desconto foi aplicado à opção de pagamento à vista em `paymentData.installmentOptions`.

Saiba mais em [Set a discount using the Checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api).

>ℹ️ A Checkout API não cria regras de desconto permanentes; essas regras devem ser definidas por meio de promoções. Saiba mais em [Antes de começar](#antes-de-começar). Ela também não é responsável por exibir o preço à vista na página de produto; isso é feito na [próxima etapa](#2-configure-a-exibicao-do-preco-a-vista-na-pagina-do-produto). Sua função é apenas indicar qual meio de pagamento deve ser considerado e validar o resultado por meio de simulações.

### 2 - Configure a exibição do preço à vista na página do produto

Depois de definir o meio de pagamento no checkout, configure a loja para exibir o valor calculado para o preço à vista na página do produto.

#### Store Framework

Em lojas desenvolvidas com Store Framework, essa funcionalidade está disponível nativamente por meio do componente `vtex.product-price`, no bloco `product-spot-price`.

Para mais informações, consulte a documentação do componente [Product Price](https://developers.vtex.com/docs/apps/vtex.product-price).

## CMS Portal (Legado)

Em lojas CMS Portal (Legado), é necessário informar no template da página de produto qual o meio de pagamento deve ser considerado na renderização do preço à vista. Siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout** ou digite **Layout** na barra de busca no topo da página.
2. Clique na pasta **CMS** e, depois, em **HTML Templates**.
3. Clique no template da sua página de produto na lista de templates.
4. Na propriedade `skuPrice`, adicione a variável `paymentSystemId` com o ID do meio de pagamento desejado.

    ![Screenshot 2020-12-18 Criar preço à vista](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/preço/configurar-desconto-de-preco-a-vista_1.png)

5. Clique em **Save Template** no campo superior para salvar.

Com essa configuração, a página do produto exibirá o valor à vista calculado para o meio de pagamento selecionado.

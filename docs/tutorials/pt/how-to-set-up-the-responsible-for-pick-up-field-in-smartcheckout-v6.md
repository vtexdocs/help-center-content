---
title: 'Como configurar o campo "Responsável pela retirada" no SmartCheckout™ V6'
id: 2GsFnXUJxSOYEE6U2c4Syw
status: PUBLISHED
createdAt: 2018-11-09T12:18:14.596Z
updatedAt: 2023-07-27T17:07:55.563Z
publishedAt: 2023-07-27T17:07:55.563Z
firstPublishedAt: 2018-11-26T14:43:00.552Z
contentType: tutorial
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slug: como-configurar-o-campo-responsavel-pela-retirada-no-smartcheckout-tm-v6
locale: pt
legacySlug: como-configurar-o-campo-responsavel-pela-retirada-no-smartcheckout-tm-v6
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

>ℹ️ O campo **Responsável pela retirada** só está disponível para o **SmartCheckout™ V6**, versão compatível com a feature de Pontos de Retirada (Pickup Points).

Os [pontos de retirada](/pt/tutorial/configurar-pontos-de-retirada-pickup-points) dão mais uma opção aos seus clientes: ao invés de esperar a entrega, eles podem escolher ir até um ponto definido e buscar o item pessoalmente. Por default, essa ação está vinculada ao usuário cadastrado que efetuou a compra. No entanto, você pode habilitar o campo `Responsável pela retirada` no checkout da sua loja, para que seu cliente possa nomear outra pessoa para retirar o produto.

>⚠️ Caso você possua o app [Checkout UI Settings](https://developers.vtex.com/vtex-developer-docs/docs/vtex-checkout-ui-settings) instalado em sua loja, o código CSS descrito no procedimento abaixo deverá ser inserido somente via o app. Os scripts inseridos via interface do Admin VTEX (aba **Código > Files**) não são reproduzidos em lojas que possuem o aplicativo instalado.

Para configurar o campo (que vem desativado por padrão), siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__. 
4. No menu __Arquivos__, localizado no lado direito da página, clique em `checkout6-custom.css`.
5. No campo de edição do código _css_, adicione as informações de _css_ destacadas abaixo.
6. Clique em `Salvar`.

```
.vtex-omnishipping-1-x-container.shp-pickup-receiver{
    display: block !important;
}
```

Após concluir estes passos, o campo `Responsável pela retirada` será exibido no Checkout da sua loja.

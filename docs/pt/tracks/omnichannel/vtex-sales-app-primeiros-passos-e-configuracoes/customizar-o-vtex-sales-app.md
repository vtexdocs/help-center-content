---
title: 'Customizar o VTEX Sales App'
id: Rby973h1l9tEM4C1YrzwZ
status: PUBLISHED
createdAt: 2021-09-16T00:55:10.885Z
updatedAt: 2023-07-24T23:04:49.692Z
publishedAt: 2023-07-24T23:04:49.692Z
firstPublishedAt: 2021-09-16T01:00:39.153Z
contentType: trackArticle
productTeam: Shopping
slugEN: customizing-instore
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 5
---

A experiência do VTEX Sales App é customizável: você pode aplicar funcionalidades e configurações específicas de acordo com as necessidades do seu negócio, além de adaptar o layout do aplicativo de acordo com a identidade da sua marca.

Para isso, é necessário editar arquivos JavaScript e CSS, conforme descrito no guia para desenvolvedores [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app).

> ⚠️ Somente pessoas com experiência em programação devem customizar o VTEX Sales App, pois alterações incorretas nestes arquivos podem causar erros críticos.

Veja abaixo as customizações disponíveis para uso no VTEX Sales App. Você pode clicar no nome de cada uma para acessar seu respectivo guia de implementação.

* [Customizar opções de login no VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): permitir que usuários façam login no VTEX Sales App utilizando a conta do Google ou do Facebook. 
* [Alterar o idioma do VTEX Sales App](https://developers.vtex.com/docs/guides/change-vtex-sales-app-language): mudar o idioma do VTEX Sales App para inglês ou espanhol. O idioma padrão é português.
* [Habilitar o campo Observação na tela do pedido](https://developers.vtex.com/vtex-rest-api/docs/enable-the-remarks-field-in-the-order-screen): ativar um campo para armazenar uma informação adicional sobre o pedido. Os dados inseridos neste campo são enviados para o **Gerenciamento de pedidos**.
    * [Habilitar o código do vendedor](https://developers.vtex.com/vtex-rest-api/docs/sales-associate-code): ativar o código do vendedor, ou seja, uma customização adicional do campo **Observação** para transformá-lo em um campo obrigatório onde vendedores precisam inserir seus códigos pessoais durante o fluxo de compra.
* [Habilitar transferência e captura do carrinho entre dispositivos:](https://developers.vtex.com/vtex-rest-api/docs/enable-cart-transfer-between-devices) permitir que uma compra iniciada em um dispositivo possa ser finalizada em qualquer outro dispositivo presente no fluxo da compra, sem a necessidade de reinserir os produtos no carrinho. Para mais informações, acesse [este artigo](/pt/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/2hlBqxHlxgFo2o4R52pbsk).
* [Habilitar filtro de pedidos por vendedor:](https://developers.vtex.com/vtex-rest-api/docs/enable-order-filter-by-sales-associate) definir que cada vendedor(a) só pode visualizar os pedidos finalizados por ele(a), em vez de exibir todos os pedidos da loja por padrão.
* [Forçar disponibilidade de estoque](https://developers.vtex.com/vtex-rest-api/docs/force-stock-availability): permitir a venda de itens que estão indisponíveis no estoque do ecommerce. Por padrão, se um item tem estoque zerado no catálogo da loja, não é possível vendê-lo no VTEX Sales App. Porém, existem casos em que o item está disponível na loja física. Esta customização permite a venda nesses casos.
* [Configurar impressão de resumo do pedido](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app#list-of-customizations): habilitar a impressão de um resumo do pedido ao finalizar o pedido utilizando o VTEX Sales App.
    * [Adicionar texto extra à impressão do pedido](https://developers.vtex.com/vtex-rest-api/docs/add-extra-text-to-the-order-print): adicionar um texto personalizado à impressão do resumo do pedido.

## Saiba mais

* [How to customize VTEX Sales App](https://developers.vtex.com/docs/guides/how-to-customize-vtex-sales-app)

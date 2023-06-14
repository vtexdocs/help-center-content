---
title: 'Customizar as páginas do Checkout Confirmation'
id: 7CbAZNHGI8uUO8aSgWmcsS
status: DRAFT
createdAt: 2017-05-22T22:44:50.173Z
updatedAt: 2022-07-22T15:26:35.097Z
publishedAt: 
firstPublishedAt: 2017-05-23T12:17:01.180Z
contentType: tutorial
productTeam: Shopping
author: authors_6
slug: customizando-o-checkout-confirmation
legacySlug: customizando-o-checkout-confirmation
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

![Página de confirmação de pedido (Order Placed)](//images.contentful.com/alneenqid6w5/n7VvdVmseGQyGwCEQAIiW/90bd066111747fe05d722e6fad172d14/cconf-hml1.png) 

A nova seção de Meus Pedidos vem acompanhada de uma nova página de confirmação de pedido (Order Placed), agora parte do **Checkout Confirmation**, feature responsável pelas páginas de confirmação do Checkout.

Junto ao novo Order Placed, outra novidade é o Order Confirmation, que mostra a confirmação de pedidos alterados (parte do novo fluxo de alteração de pedidos).

### Templates de HTML

Assim como em versões anteriores, a página de Order Placed (assim como a de Order Changed) aceita **templates de HTML**:

![Página de confirmação de pedido com imports de HTML](//images.contentful.com/alneenqid6w5/2HXuJJE5yMCUIaeCMoOOa8/1e947bf46ec9202214867219ba36677a/cconf-html-2.png)
 
Para adicionar seu código nesses templates, basta acessar o módulo Portal e, na aba **Code**, editar os seguintes arquivos:

 - **checkout-confirmation-bottom**
 - **checkout-confirmation-footer**
 - **checkout-confirmation-header**
 - **checkout-confirmation-top**

É importante lembrar que a customização com templates é a mesma para Order Placed e Order Confirmation.

![Página do Portal v2 com arquivos de template corretos destacados](//images.contentful.com/alneenqid6w5/5jGk1WbMqkkggyAog66iAs/c1162190ef431b8c96462fb34355aa98/cconf-html3.png)

### Customização de estilos

<div class="alert alert-warning">Todas estas formas de customização podem ser alteradas no futuro. Ao usá-las, você entende que sua loja deve acompanhar atualizações da plataforma para que sua customização continue funcionando corretamente.</div>

Também é possível editar a interface do Checkout Confirmation via classes CSS. Seus estilos devem ser adicionados numa `<style>` tag em um dos templates HTML carregados na página.

![Página de OrderPlaced do Checkout Confirmation com classes de customização marcadas](//images.contentful.com/alneenqid6w5/OgLXDC0eyaOc4iKGmSkgS/a698e4da05726f33659d0ea88d0b1278/cconf-doc-2.png)

Para customizar os estilos do Checkout Confirmation, use as seguintes classes:

```
.cconf-alert // Alert de confirmação
.cconf-client-email // Elemento que possui email do cliente
.cconf-address // Card com endereço do pedido
.cconf-payment // Card com forma de pagamento do pedido
.cconf-summary // Card com sumário do pedido
.cconf-product-table // Tabela com pedidos do produto
.cconf-product // Linha da tabela com pedido
.cconf-continue-button // Botão para voltar à loja
```

### Customização de JS

A página também pode ser alterada por Javascript usando-se o arquivo **checkout-confirmation-custom.js** oferecido no módulo Portal.

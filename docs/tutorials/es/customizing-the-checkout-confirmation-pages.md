---
title: 'Personalizar las páginas del Checkout Confirmation'
id: 7CbAZNHGI8uUO8aSgWmcsS
status: DRAFT
createdAt: 2017-05-22T22:44:50.173Z
updatedAt: 2022-07-22T15:26:35.097Z
publishedAt: 
firstPublishedAt: 2017-05-23T12:17:01.180Z
contentType: tutorial
productTeam: Shopping
author: authors_6
slug: personalizando-las-paginas-del-checkout-confirmation
locale: es
legacySlug: personalizando-las-paginas-del-checkout-confirmation
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

![Página de confirmação de pedido (Order Placed)](//images.contentful.com/alneenqid6w5/n7VvdVmseGQyGwCEQAIiW/90bd066111747fe05d722e6fad172d14/cconf-hml1.png) 

Con la nueva sección de Mis Pedidos viene una nueva página de confirmación de pedido, que ahora es parte del **Checkout Confirmation**, feature responsable por las páginas de confirmación del Checkout.

Además de la orden colocada, otra página es el Order Changed, que muestra la confirmación de los pedidos modificados (parte del nuevo workflow de Sustitución de Pedidos).

### Templates de HTML

Al igual que en versiones anteriores, la página de Order Placed (y también la de Order Changed) acepta **templates de HTML**:

![Página de confirmação de pedido com imports de HTML](//images.contentful.com/alneenqid6w5/2HXuJJE5yMCUIaeCMoOOa8/1e947bf46ec9202214867219ba36677a/cconf-html-2.png)
 
Para añadir su código a estes templates, basta con acceder al módulo Portal y, en la pestaña **Code**, editar los siguientes archivos:

- **checkout-confirmation-bottom**
- **checkout-confirmation-footer**
- **checkout-confirmation-header**
- **checkout-confirmation-top**

![Página do Portal v2 com arquivos de template corretos destacados](//images.contentful.com/alneenqid6w5/5jGk1WbMqkkggyAog66iAs/c1162190ef431b8c96462fb34355aa98/cconf-html3.png)

Es importante recordar que los templates para personalización son los mismos para Order Placed y Order Confirmation.

### Personalización de estilos

<div class="alert alert-warning">Todas estas formas de personalización se pueden cambiar en el futuro. Al usarlas, usted entiende que su tienda debe seguir las actualizaciones de la plataforma para que su personalización siga funcionando correctamente.</div>

También se puede editar la interfaz del Checkout Confirmation mediante clases CSS. Sus estilos se deben agregar en una tag `<style>` en uno de los templates HTML cargadas en la página.

![Página de OrderPlaced do Checkout Confirmation com classes de customização marcadas](//images.contentful.com/alneenqid6w5/OgLXDC0eyaOc4iKGmSkgS/a698e4da05726f33659d0ea88d0b1278/cconf-doc-2.png)

Para personalizar los estilos del Checkout Confirmation, utilize las clases abajo:

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

### Personalización de JS

La página también se puede cambiar por Javascript. Para eso hay que utilizar el archivo **checkout-confirmation-custom.js** que se encuentra en el módulo Portal.

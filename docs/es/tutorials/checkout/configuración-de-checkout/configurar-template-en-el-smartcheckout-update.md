---
title: 'Configurar template en el SmartCheckout'
id: ToTE5XB39t0SwtHgpgwSv
status: PUBLISHED
createdAt: 2019-08-27T17:48:08.831Z
updatedAt: 2025-05-29T17:21:39.692Z
publishedAt: 2025-05-29T17:21:39.692Z
firstPublishedAt: 2019-10-28T16:39:00.190Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: configure-template-in-smartcheckout-update
legacySlug: configurar-template-en-el-smartcheckout-update
locale: es
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

El __portal__ es usado para renderizar las pantallas de __Checkout__ (carrito, datos personales, dirección, forma de pago) y __OrderPlaced__ (Pantalla de confirmación de compra). En este artículo se presentará cómo registrar y configurar los recursos del Portal.

El módulo __Checkout__ en Admin, muestra los sitios que están registrados para su cuenta. A través de él, también es posible crear un nuevo sitio, editar y configurar información sobre sitios existentes.

> ℹ️ Cada sitio registrado corresponde a un multidominio (si la cuenta tiene multidominios contratados). Para cuentas que no utilizan multidominios, no es necesario registrar más de un sitio en este módulo. Obtenga más información en [Crear multitienda/multidominio](/es/tutorial/como-criar-multiloja-multidominio--tutorials_510#).

## Crear un nuevo sitio web

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón `Nuevo sitio`.
3. Rellene los siguientes campos:
<ul>
<br>
  <li>**Nombre**: ingrese aquí el nombre deseado para el sitio.</li>
  <li>**Tienda**: complete con el nombre de la cuenta, que se puede encontrar en  **Configuraciones de la Cuenta > Gestión de la Cuenta > Cuentas  > Nombre de la Cuenta**.</li>
  </ul>
4. Haga clic en `Guardar`.

Creación del nuevo sitio web: 

![ses.smartchackout1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_1.png) 

Acceso a __Nombre de cuenta__:

![ses.smartchackout2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_2.png)

## Editar y configurar sitio

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. Al acceder al menú de opciones azul ubicado en la parte superior de la página, puede realizar las siguientes acciones:
   - __Sitios__: volver a la pantalla de inicio de los sitios registrados.
   - __Editar__: edite el "Nombre" y la "Tienda".
   - __Checkout__: realizar configuraciones básicas, como Cálculo de envío, Google Tag Manager, entre otras.
   - __Pedidos__: configurar los motivos de cancelación y sustitución del pedido.
   - __Código__: mostrar y crear templates relacionadas con el sitio.
   - __Páginas__: mostrar páginas existentes para el sitio. 

Ejemplo de sitios existentes en la misma cuenta:
![ES Cards Portal](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_3.png)

Si desea __eliminar__ un sitio web, haga clic en el botón Eliminar del sitio web deseado, como en el siguiente ejemplo:
![ses.smartchackout3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_4.png)

Si desea __eliminar__ una página existente, haga clic en el botón indicado en la imagen de abajo:

![ses.smartchackout5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_5.png)

A continuación, pasaremos a la configuración paso a paso de las opciones del menú: __Código__ y __Checkout__ - pues configuran las páginas de *Checkout* y *Order Placed*.

## Configurar Checkout

> ⚠️ Los usuarios que realizan configuraciones de checkout deben tener un rol con el [recurso de License Manager](/es/docs/tutorials/recursos-del-license-manager) **Manage portal**. A su vez, este nuevo rol deben crearlo usuarios que tengan acceso **Owner (Admin Super)**.

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__ y configure los campos a continuación según sea necesario:
<ul>
<br>
  <li>**Título del sitio web**: si se informa, se mostrará en el título del carrito, el pago y las páginas de pedido confirmado.</li>
  <li>**Google Tag Manager**: ingrese el ID (en formato `GTM-XXXX`) de su contenedor [Google Tag Manager](https://www.google.com/tagmanager/), si quieres usarlo automáticamente.</li>
  <li>**Google Maps API Key**: la tecla se utiliza en dos situaciones: cuando la función de Entrega basada en coordenadas geográficas está activa o si la opción de **Recogida en tienda** está disponible.</li>
  <li>**Cálculo de las Opciones de Entrega (Beta y Stable)**: seleccione si el cálculo del flete se hará desde la hoja de cálculo o por geolocalización.</li>
  </ul>

![ses.smartchackout6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_6.png)

## Configurar código

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Código__. A la derecha se mostrará un menú de __Archivos__ y __Templates__ con todos los templates de su sitio web, configurados por el sistema.

Ejemplo:

![ses.smartchackout7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_7.png)

### Configurar templates del menú "Código"

Es posible personalizar las páginas de su sitio, además de configurar otras funcionalidades HTML a través del menú __Archivos__ y __Templates__.

El código HTML completado en el template corresponde a lo que aparecerá en las páginas de __checkout__ y __order placed__ de su sitio.

De templates disponibles, los únicos que no se pueden cambiar son __vtex-checkout__ y __vtex-orderPlaced__. Estos corresponden al funcionamiento nativo de la plataforma, presentando el contenido principal de las páginas de __checkout__ y __order placed__.

> ⚠️ La plataforma ignorará los Javascripts incluidos directamente en cualquier template del Portal. Es decir, en el momento de renderizar la página, la plataforma la eliminará. Esto se debe a que [SmartCheckout](/es/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#) solo acepta scripts originados en Google Tag Manager. Por lo tanto, siempre que sea necesario realizar alguna personalización (o incluso la inserción de etiquetas específicas) a través de javascript, utilice [Google Tag Manager](/es/tutorial/integration-with-google-tag%20-%20gerente--frequentlyAskedQuestions_616#).

### Ejemplos de cómo rellenar templates 

A continuación se muestran ejemplos de cómo se pueden llenar los códigos presentes en los templates __checkout-header__, __checkout-footer__, __vtex-checkout__ y __vtex-orderPlaced__ y su visualización correspondiente en el sitio web:

- Template __checkout-header__ y la cabecera de página del sitio web:

![ses.smartchackout10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_8.png) 

![checkout-header-page-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_9.png)

- Template __checkout-footer__ y pie de página del sitio web:

![checkout-footer-codigo-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_10.png)

![checkout-footer-cesta-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_11.png)

- Template __vtex-checkout__ y página de carrito al finalizar la compra:

![smartcheckout16.pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_12.png) 

![vtex-checkout-pagina-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_13.png)

- Template __vtex-orderPlaced__ y página de pedido confirmado:

![ses.smartchackout18](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_14.png) 

![vtex-orderplaced-paginas-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_15.png)

### Cuentas con multidominio 

Las cuentas que tengan multidominio pueden usar apenas un sitio web, si no hay necesidad de configuraciones específicas. Esto porque, aunque exista apenas un sitio web, la plataforma incluye una clase en el tag "body" de acuerdo al dominio accedido. Así, es sencillo aplicar layouts diferentes para el mismo sitio web.

Clase insertada en el tag "body" de acuerdo al dominio accedido:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuración-de-checkout/configurar-template-en-el-smartcheckout-update_16.jpg)


---
title: 'Configurar template en el SmartCheckout'
id: ToTE5XB39t0SwtHgpgwSv
status: PUBLISHED
createdAt: 2019-08-27T17:48:08.831Z
updatedAt: 2023-03-24T19:06:08.064Z
publishedAt: 2023-03-24T19:06:08.064Z
firstPublishedAt: 2019-10-28T16:39:00.190Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slugEN: configure-template-in-smartcheckout-update
locale: es
legacySlug: configurar-template-en-el-smartcheckout-update
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

El __portal__ es usado para renderizar las pantallas de __Checkout__ (carrito, datos personales, dirección, forma de pago) y __OrderPlaced__ (Pantalla de confirmación de compra). En este artículo se presentará cómo registrar y configurar los recursos del Portal.

El módulo __Checkout__ en Admin, muestra los sitios que están registrados para su cuenta. A través de él, también es posible crear un nuevo sitio, editar y configurar información sobre sitios existentes.

>ℹ️ Cada sitio registrado corresponde a un multidominio (si la cuenta tiene multidominios contratados). Para cuentas que no utilizan multidominios, no es necesario registrar más de un sitio en este módulo. Obtenga más información en [Crear multitienda/multidominio](https://help.vtex.com/es/tutorial/como-criar-multiloja-multidominio--tutorials_510#).

## Crear un nuevo sitio web

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón `Nuevo sitio`.
3. Rellene los siguientes campos:
<ul>
<br>
  <li><b>Nombre</b>: ingrese aquí el nombre deseado para el sitio.</li>
  <li><b>Tienda</b>: complete con el nombre de la cuenta, que se puede encontrar en  <b>Configuraciones de la Cuenta > Gestión de la Cuenta > Cuentas  > Nombre de la Cuenta</b>.</li>
  </ul>
4. Haga clic en `Guardar`.

Creación del nuevo sitio web: 

![ses.smartchackout1](//images.ctfassets.net/alneenqid6w5/KyggI6FeMn1nhKkrKekDj/55be5d1156b71333e640f7c75c693045/ses.smartchackout1.png) 

Acceso a __Nombre de cuenta__:

![ses.smartchackout2](//images.ctfassets.net/alneenqid6w5/2NH2v4bG5DZZucsAYKLt3o/bf6bee1d305b72c30045e717d3d229aa/ses.smartchackout2.png)

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
![ES Cards Portal](//images.ctfassets.net/alneenqid6w5/lHivoZotqDLXjLShaqv2i/a60e8f0fba49b962fd33f6d56652bec7/ES_Cards_Portal.png)

Si desea __eliminar__ un sitio web, haga clic en el botón Eliminar del sitio web deseado, como en el siguiente ejemplo:
![ses.smartchackout3](//images.ctfassets.net/alneenqid6w5/6PIZEMRdKproPnIFvHaNcG/d116b65f10aba502d0a9e21fee41cbfb/ses.smartchackout3.png)

Si desea __eliminar__ una página existente, haga clic en el botón indicado en la imagen de abajo:

![ses.smartchackout5](//images.ctfassets.net/alneenqid6w5/6ruS0mUjxfgB9AdoXsucCh/72bf1ed75dde2ffa0bfe2558fdf41734/ses.smartchackout5.png)

A continuación, pasaremos a la configuración paso a paso de las opciones del menú: __Código__ y __Checkout__ - pues configuran las páginas de *Checkout* y *Order Placed*.

## Configurar Checkout

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__ y configure los campos a continuación según sea necesario:
<ul>
<br>
  <li><b>Título del sitio web</b>: si se informa, se mostrará en el título del carrito, el pago y las páginas de pedido confirmado.</li>
  <li><b>Google Tag Manager</b>: ingrese el ID (en formato `GTM-XXXX`) de su contenedor <a href="https://www.google.com/tagmanager/">Google Tag Manager</a>, si quieres usarlo automáticamente.</li>
  <li><b>Google Maps API Key</b>: la tecla se utiliza en dos situaciones: cuando la función de Entrega basada en coordenadas geográficas está activa o si la opción de <b>Recogida en tienda</b> está disponible.</li>
  <li><b>Cálculo de las Opciones de Entrega (Beta y Stable)</b>: seleccione si el cálculo del flete se hará desde la hoja de cálculo o por geolocalización.</li>
  </ul>

![ses.smartchackout6](//images.ctfassets.net/alneenqid6w5/5sUaemiWXUvCQ7nLeWyvE2/4c30814fa4d2db0360bb83ee2c124ef5/ses.smartchackout6.png)

## Configurar código

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Código__. A la derecha se mostrará un menú de __Archivos__ y __Templates__ con todos los templates de su sitio web, configurados por el sistema.

Ejemplo:

![ses.smartchackout7](//images.ctfassets.net/alneenqid6w5/1PD1qlTDCj1Ckdp1BukJDf/1b5cdeabc1ff8fce27a5a4ff64cd39da/ses.smartchackout7.png)

### Configurar templates del menú "Código"

Es posible personalizar las páginas de su sitio, además de configurar otras funcionalidades HTML a través del menú __Archivos__ y __Templates__.

El código HTML completado en el template corresponde a lo que aparecerá en las páginas de __checkout__ y __order placed__ de su sitio.

De templates disponibles, los únicos que no se pueden cambiar son __vtex-checkout__ y __vtex-orderPlaced__. Estos corresponden al funcionamiento nativo de la plataforma, presentando el contenido principal de las páginas de __checkout__ y __order placed__.

>⚠️ La plataforma ignorará los Javascripts incluidos directamente en cualquier template del Portal. Es decir, en el momento de renderizar la página, la plataforma la eliminará. Esto se debe a que [SmartCheckout](https://help.vtex.com/es/tutorial/smartcheckout-preenchimento-automatico-de-dados-do-cliente--2Nuu3xAFzdhIzJIldAdtan#) solo acepta scripts originados en Google Tag Manager. Por lo tanto, siempre que sea necesario realizar alguna personalización (o incluso la inserción de etiquetas específicas) a través de javascript, utilice [Google Tag Manager](https://help.vtex.com/es/tutorial/integration-with-google-tag%20-%20gerente--frequentlyAskedQuestions_616#).

### Ejemplos de cómo rellenar templates 

A continuación se muestran ejemplos de cómo se pueden llenar los códigos presentes en los templates __checkout-header__, __checkout-footer__, __vtex-checkout__ y __vtex-orderPlaced__ y su visualización correspondiente en el sitio web:

- Template __checkout-header__ y la cabecera de página del sitio web:

![ses.smartchackout10](//images.ctfassets.net/alneenqid6w5/5laYto6t3IYF5YjJNmlo7t/457f048f5b8450cf5b3e925f72e9e971/ses.smartchackout10.png) 

![checkout-header-page-es](//images.ctfassets.net/alneenqid6w5/4jO17CaVCHEn2mFRUu4smR/d98e30e3889f5c94d509c6c3cf4c586e/smartcheckout11.pt.png)

- Template __checkout-footer__ y pie de página del sitio web:

![checkout-footer-codigo-pt](//images.ctfassets.net/alneenqid6w5/h9oan75Htfkd7JCIReZQx/65cb5c227d520f6a6ff3e4e732a920c5/PT_C__digo_Checkout_Footer_preenchido.png)

![checkout-footer-cesta-es](//images.ctfassets.net/alneenqid6w5/4P9DSkLsgPN8F2x5JM1dQM/b71853e444095cbacba1b45a6f6110b6/checkout_footer_cesta.es.png)

- Template __vtex-checkout__ y página de carrito al finalizar la compra:

![smartcheckout16.pt](//images.ctfassets.net/alneenqid6w5/syu2Ul4PbhWNaCWbLQY84/a49ebebfaa7fd9df54cf6b2e757ffb9b/smartcheckout16.pt.png) 

![vtex-checkout-pagina-es](//images.ctfassets.net/alneenqid6w5/6yT3yPkqatyVRLQ4Cn0TVb/643e0bc15c803d5d50053e7eabc2fb29/ses.smartchackout17.png)

- Template __vtex-orderPlaced__ y página de pedido confirmado:

![ses.smartchackout18](//images.ctfassets.net/alneenqid6w5/7v3DAlrUo8B4uFwn8G0NI8/b2859b32f480e91e8142969e6975cb43/ses.smartchackout18.png) 

![vtex-orderplaced-paginas-es](//images.ctfassets.net/alneenqid6w5/2gFpnjs8tsTfOvmAgKQ3hh/8adc2c384b5ed34fbc5b02a82850c03e/ses.smartchackout19.png)

### Cuentas con multidominio 

Las cuentas que tengan multidominio pueden usar apenas un sitio web, si no hay necesidad de configuraciones específicas. Esto porque, aunque exista apenas un sitio web, la plataforma incluye una clase en el tag "body" de acuerdo al dominio accedido. Así, es sencillo aplicar layouts diferentes para el mismo sitio web.

Clase insertada en el tag "body" de acuerdo al dominio accedido:

![](//images.contentful.com/alneenqid6w5/4YAbMPcyqA8eqMM8ycokoU/836778d23afee9b0e793b27d9ab8cc0c/Portal16.jpg)


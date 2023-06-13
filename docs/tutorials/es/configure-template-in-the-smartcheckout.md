---
title: Configurar template en el SmartCheckout
id: frequentlyAskedQuestions_599
status: DRAFT
createdAt: 2019-01-24T20:45:56.190Z
updatedAt: 2022-07-18T12:13:15.246Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:05:13.787Z
contentType: tutorial
productTeam: Shopping
author: authors_84
slug: configurar-template-en-el-smartcheckout
legacySlug: configurar-template-en-el-smartcheckout
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

El nuevo portal es usado hoy para renderizar las pantallas de Checkout (Cesta de la compra -&gt; Datos personales -&gt; Dirección -&gt; Forma de pago)  y OrderPlaced (Pantalla de confirmación de compra). Aquí aprenderemos como registrar y configurar sus recursos. Veamos.

Primero, acceda al módulo Portal.

Ya en el módulo Portal, la primera pantalla exhibirá los Sitios que están registrados para la cuenta. Cada sitio registrado corresponde a un multi dominio, si la cuenta posee multi dominio contratado. Para las cuentas que no utilizan multi dominio, el registro de más de un Sitio es ese módulo, no hará sentido. Para más informacion, visite [crear multitienda / multidominio](https://help.vtex.com/es/tutorial/como-criar-multiloja-multidominio#).

Como se indica en la imagen, en esta pantalla es posible **Crear**  un nuevo sitio, **Editar** datos básicos de sitios que ya existen o **Configurarlos**.

Para crear un nuevo sitio haga clic em “Novo Site”.

Ahora, rellene los campos abajo siguiendo las instrucciones:

- **Nombre**: Campo libre
- **Tienda**: Este campo debe ser rellenado con un valor que corresponda a algún host de la tienda deseada. Es imposible registrar dos (o más) Sitios con este campo rellenado con el mismo valor.

Vea imagen abajo:

![ses.smartchackout1](//images.ctfassets.net/alneenqid6w5/KyggI6FeMn1nhKkrKekDj/55be5d1156b71333e640f7c75c693045/ses.smartchackout1.png) ![ses.smartchackout2](//images.ctfassets.net/alneenqid6w5/2NH2v4bG5DZZucsAYKLt3o/bf6bee1d305b72c30045e717d3d229aa/ses.smartchackout2.png)

Haga clic em Salvar para concluir el registro del nuevo sitio.

Es posible modificar esa información. Las reglas son las mismas.

Como se indica en la próxima imagen, al hacer clic en el nombre del Sitio, el sistema exhibe toda la información de configuración y permite navegar por las siguientes opciones de menu:

- Sitios: Vuelve a la pantalla inicial
- Editar: Permite configuraciones del nombre de la tienda
- Checkout: Permite configuraciones básicas (veremos más adelante)
- Pedidos
- Código: Templates relacionados al sitio
- Páginas: Exhibe las páginas que existen para el sitio: De modo estándar, se crean dos páginas, **checkout **y **checkout/orderPlaced**. Como fue dicho, al inicio de este post, la página** checkout **corresponde a las páginas de carrito, datos personales, dirección y forma de pago. La página **checkout/orderPlaced** corresponde a la página de Confirmación de Compra

![ses.smartchackout3](//images.ctfassets.net/alneenqid6w5/6PIZEMRdKproPnIFvHaNcG/d116b65f10aba502d0a9e21fee41cbfb/ses.smartchackout3.png)

En** Páginas** es posible **Crear** nuevas páginas, **Editar** y **Excluir** páginas existentes. Vea las dos imágenes siguientes demostrando **Edición** y **Exclusión**. La creación sigue las mismas reglas de edición.

Edición de página:

![ses.smartchackout4](//images.ctfassets.net/alneenqid6w5/RtUdwXSva1HNq5LO4MMxN/726dacd630de7e3ec6372238b020b0a8/ses.smartchackout4.png)

Exclusión de Página:

![ses.smartchackout5](//images.ctfassets.net/alneenqid6w5/6ruS0mUjxfgB9AdoXsucCh/72bf1ed75dde2ffa0bfe2558fdf41734/ses.smartchackout5.png)

En **Checkout** podemos editar los campos abajo:

- Título: Si se informa, se exhibirá en el título de las páginas de carrito, finalización de compra y pedido confirmado.
- Google Tag Manager: Informe el ID (GTM-XXXX) de su conteiner de [Google Tag Manager](https://www.google.com/tagmanager/ "Google Tag Manager") si desea usarlo automáticamente
- Google Maps API Key: La clave se utiliza en dos casos: si la función de Entrega basada en la coordenada geográfica está conectada y si la tienda trabaja con la opción de Retirada en un punto.
- Cálculo de las operaciones de entrega y retiro (Beta y Stable)

Sigue imagen con ejemplos de cómo rellenar este formulário:

![ses.smartchackout6](//images.ctfassets.net/alneenqid6w5/5sUaemiWXUvCQ7nLeWyvE2/4c30814fa4d2db0360bb83ee2c124ef5/ses.smartchackout6.png)

En **Código**, se exhibirán a la derecha todos los templates relacionados al Sitio. Como estándar, el sistema configura los templates que figuran como ejemplo en la imagen abajo:

![ses.smartchackout7](//images.ctfassets.net/alneenqid6w5/1PD1qlTDCj1Ckdp1BukJDf/1b5cdeabc1ff8fce27a5a4ff64cd39da/ses.smartchackout7.png)

De esos templates, los únicos que no pueden modificarse son **vtex-checkout **e **vtex-orderPlaced**. Esos templates corresponden al funcionamiento nativo de la plataforma, o sea, son los que renderizan el contenido principal de esas páginas, tanto el checkout como el orderPlaced.

En la siguiente imagen, demostramos el área afatada en el checkout por la configuración del template **checkout-footer**. Este es sólo un ejemplo de template vacío.

![ses.smartchackout8](//images.ctfassets.net/alneenqid6w5/5xl9GdBzkLtWnJJXurEDuF/9c3d6c2c0499727c315aff8e085481d1/ses.smartchackout8.png) ![ses.smartchackout9](//images.ctfassets.net/alneenqid6w5/4bcDYXgUTPhSTEs98ptJe1/b807afcb4bf3eeb63d754646f074b321/ses.smartchackout9.png)

En la próxima imagen, tenemos un ejemplo equivalente al anterior, pero, esta vez, con código HTML rellenado. Note que el código rellenado a la izquierda corresponde al área superior de la derecha. Ese es el template** checkout-header**.

![ses.smartchackout10](//images.ctfassets.net/alneenqid6w5/5laYto6t3IYF5YjJNmlo7t/457f048f5b8450cf5b3e925f72e9e971/ses.smartchackout10.png) ![ses.smartchackout11](//images.ctfassets.net/alneenqid6w5/3rQkwWZiERd3L9Js6DqHoj/5f724a23f6951f069f368b346ff7c206/ses.smartchackout11.png)

Como podemos ver en la próxima imagen, todos los templates que tengan el prefijo** checkout **se usarán en todas las páginas del Checkout. En este ejemplo ya estamos en la página Forma de Pagamento y note que el header cargado es el mismo del ejemplo anterior.

![ses.smartchackout12](//images.ctfassets.net/alneenqid6w5/3xZgBYnuTjYcwQDop5eYxT/f2120bdf05a5883ee11d91f7c308a41e/ses.smartchackout12.png) ![ses.smartchackout13](//images.ctfassets.net/alneenqid6w5/2PZAzsLIwAp1wL6YiXuidN/913d83cb447406bd2597029808818880/ses.smartchackout13.png)

Como en los templates del **checkout**, lo mismo ocurre con los templates de orderPlaced. O sea, los templates con prefijo **orderPlaced** corresponden solamente a la página OrderPlaced (Confirmación de Compra).

![ses.smartchackout14](//images.ctfassets.net/alneenqid6w5/4EfbPzpvD6Buwn71HNchoC/7437e0cf4506f83c59587511f78f6d39/ses.smartchackout14.png) ![ses.smartchackout15](//images.ctfassets.net/alneenqid6w5/5XEhlCcJKuXETy1z5P2cMu/aa70c832db354d9f4060e0771efeafcc/ses.smartchackout15.png)

Como se ha explicado arriba, los únicos templates en que no se permiten modificaciones son **vtex-checkout** y **vtex-orderPlaced**. Esos templates renderizan al contenido básico de las páginas Checkout y OrderPlaced. A continuación, ejemplos del contenido renderizado por los templates.

Template **vtex-checkout**:

![ses.smartchackout16](//images.ctfassets.net/alneenqid6w5/6YRb9FuRRmLJStVlx6giuY/40569c34738b82ccf51296f6dbf92272/ses.smartchackout16.png) ![ses.smartchackout17](//images.ctfassets.net/alneenqid6w5/4vYztmiow2QijU3rPh9tET/77bfd5e4bea43fc71657f44b3cbb46bf/ses.smartchackout17.png)

Template **vtex-orderPlaced**:

![ses.smartchackout18](//images.ctfassets.net/alneenqid6w5/7v3DAlrUo8B4uFwn8G0NI8/b2859b32f480e91e8142969e6975cb43/ses.smartchackout18.png) ![ses.smartchackout19](//images.ctfassets.net/alneenqid6w5/1Atqv6If7ZP9N5PgrYZlMH/8f38382856a04c34d6cc6570e7f55797/ses.smartchackout19.png)

Las cuentas que tengan multi dominio pueden usar sólo un sitio, si no hay necesidad de configuraciones específicas. Esto porque, aunque existe sólo un Sitio, la plataforma incluye una clase en la tag "body" de acuerdo al dominio accedido. Así, es sencillo aplicar layouts diferentes para el mismo sitio.

Clase insertada en la tag &lt;body&gt; de acuerdo al dominio accedido:

![](//images.contentful.com/alneenqid6w5/4YAbMPcyqA8eqMM8ycokoU/836778d23afee9b0e793b27d9ab8cc0c/Portal16.jpg)

Importante: Todo javascript que se incluya directamente en cualquier template del Portal será ignorado por la plataforma, o sea, al renderizar la página, la plataforma lo removerá. Esto porque el SmartCheckout sólo acepta scripts originados en el Google Tag Manager. Entonces, siempre que sea necesario realizar alguna personalización (o aun inserción de tags específicas) vía javascript, haga esa inclusión vía Google Tag Manager.

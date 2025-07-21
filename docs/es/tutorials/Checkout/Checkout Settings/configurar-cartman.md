---
title: 'Configurar Cartman'
id: 1ACMTStZYkMqB0lTgwg451
status: PUBLISHED
createdAt: 2019-09-03T15:02:48.303Z
updatedAt: 2024-03-13T18:18:17.017Z
publishedAt: 2024-03-13T18:18:17.017Z
firstPublishedAt: 2019-09-09T18:28:20.208Z
contentType: tutorial
productTeam: Shopping
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configure-cartman
locale: es
legacySlug: configurar-cartman
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Cartman es una herramienta creada para auxiliar al comerciante en el análisis de posibles escenarios en el Checkout, simulando, compartiendo e investigando carritos en tiendas VTEX. Por defecto, esta herramienta está disponible y activada automáticamente para los siguientes dominios VTEX:

- `{accountname}.myvtex.com`
- `{accountname}.vtexcommercebeta.com`
- `{accountname}.vtexcommercestable.com`

Para dominios oficiales de la tienda (`www.{sutienda}.com`), debe activar [activar Cartman manualmente](configurar-cartman#activar-cartman-manualmente).

Este artículo cubrirá los siguientes temas:

- [Activar Cartman manualmente](#activar-cartman-manualmente)
- [Funciones Cartman](#funciones-cartman)
  - [Simulador de promociones](#simulador-de-promociones)
  - [Obtener información sobre los ítems en el carrito](#obtener-informacion-sobre-los-items-en-el-carrito)
  - [Agregar ítems específicos al carrito](#agregar-items-especificos-al-carrito)
  - [Agregar ítems aleatorios al carrito](#agregar-items-aleatorios-al-carrito)
  - [Establecer datos de marketing](#establecer-datos-de-marketing)
- [Deshabilitar Cartman](#deshabilitar-cartman) 

<div class="alert alert-warning">
  Solo el comerciante tiene acceso a <b>Cartman</b>. Sus funciones no están disponibles para el uso de los usuarios en una tienda.
</div>

## Activar Cartman manualmente

Para activar Cartman manualmente, siga los pasos a continuación:

1. Acceda a cualquier página de Checkout de su tienda (`https://{accountname}.myvtex.com/checkout/`).
2. Inserte la query string `?cartman=on` al final de la URL (`https://accountname.myvtex.com/checkout?cartman=on`).
3. En la esquina inferior derecha de la pantalla, haga clic en el botón <img src="//images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/> para acceder a Cartman.

## Funciones Cartman

### Simulador de promociones

Al acceder al **Simulador de promociones**, puedes ver las promociones creadas en tu tienda que se aplicaron al carrito y por qué se activaron. También puedes probar aplicar promociones antes de activarlas, incluyendo promociones inactivas y programadas.

Para más información sobre esta herramienta, consulta el artículo [Simulador de promociones](/es/tutorial/simulador-de-promociones-beta--4zc8SNqjqeIJ0ZRMhjlnvy).

### Obtener información sobre los ítems en el carrito

Accediendo al **Ver detalles del carrito**, es posible consultar la información específica de cada uno de los productos seleccionados en el carrito.

![Detalles del ítem](https://images.ctfassets.net/alneenqid6w5/1EH9jYZZwOSTcCDKqoQocj/a643ad49b22b39430ab5b671288c4f7f/Detalles_del___tem.PNG)

### Agregar ítems específicos al carrito

En **Agregar ítems por ID de SKU**, se pueden agregar nuevos ítems al carrito de acuerdo con su código de identificación (ID de SKU). Se pueden utilizar los siguientes campos:

- **IDs de SKU**: número de identificación de un ítem en particular (SKU). Campo obligatorio.
- **Cantidad de cada ítem**: indicación de cuántas unidades SKU se agregarán al carrito.
- **ID do seller**: indicación de cuántas unidades SKU se agregarán al carrito. 

![Agregar ítems por ID de SKU](https://images.ctfassets.net/alneenqid6w5/3HfuNsrFblpnncoUW2UQl2/784f07a4ade0a1cc3ac1f2bc2e5face2/Agregar___tems_por_ID_de_SKU.PNG)

### Agregar ítems aleatorios al carrito

En **Agregar ítems al azar**, nuevos ítems del catálogo de la tienda se pueden agregar al carrito al azar (sin especificar qué ítem se agregará). Para agregar nuevos ítems, se pueden seleccionar uno o más de los siguientes criterios:

- Numero de ítems
- Cantidad de cada ítem
- ID da categoría
- ID da marca
- ID da colección
- ID do seller
- Gama de precios (Precio desde / Precio hasta)

![Agregar ítems al azar](https://images.ctfassets.net/alneenqid6w5/3vHoO3Pm1Vnsc2QXYOJMQW/06250c93160b6506a130e4e7f34c3f9f/Agregar___tems_al_azar.PNG)

### Establecer datos de marketing

En la opción **Establecer datos de marketing**, puede aplicar cupones de descuento a ítems y promociones específicos en función de la información de marketing. Se pueden utilizar los siguientes campos:

- **utm_source**: el origen del tráfico, es decir, a través de qué sitio web, anunciante o publicación, el usuario llegó a la tienda.
- **utm_medium**:los medios publicitarios o de marketing utilizados para acceder al sitio web de la tienda (banner, newsletter).
- **utm_campaign**: el nombre de la campaña utilizada para determinar el contexto de marketing (Navidad, lanzamiento).
- **utmi_cp**: utm interna utilizada para definir cuándo se aplicará una determinada promoción, según la utm descrita en la URL del pedido.  
- **Cupón**: código de cupón de descuento para agregar al carrito.

![Establecer datos de marketing](https://images.ctfassets.net/alneenqid6w5/5jutuQsztAkNGjFHdPk27a/77827b5abd6f7cddb1c431468317589c/Establecer_datos_de_marketing.PNG)

Para obtener más información sobre UTMs y UTMIs, vaya a [Qué son utm_source, utm_campaign y utm_medium](/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii#) y [Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p](/es/tutorial/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p#).

## Deshabilitar Cartman ##

Cartman se puede desactivar en cualquier momento según lo requiera el lojista. Para deshabilitarlo, siga los pasos a continuación:

1. Acceda a cualquier página de Checkout de su tienda   (`https://{accountname}.myvtex.com/checkout/`).
2. En la esquina inferior derecha de la pantalla, haga clic en el botón <img src="//images.ctfassets.net/alneenqid6w5/2Z1d5lHtVM7E7SvL58C8UW/acc0fa24cc8ae2e008d4a8d0f466b035/cartman-removebg-preview.png" alt="cartman-icon" width="25"/>.
3. En la parte inferior del menú de Cartman, haz clic en `Deshabilitar Cartman`.

<div class="alert alert-info">
  Si desea reactivar <b>Cartman</b>, vuelva a agregar la query string <code>?cartman=on</code> en una de las páginas de pago de su tienda. De esta forma, el icono azul volverá a estar disponible en la esquina inferior derecha de la página.
</div>


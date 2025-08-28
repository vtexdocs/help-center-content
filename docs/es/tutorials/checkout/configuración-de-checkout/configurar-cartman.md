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
legacySlug: configurar-cartman
locale: es
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

> ⚠️ Solo el comerciante tiene acceso a **Cartman**. Sus funciones no están disponibles para el uso de los usuarios en una tienda.

## Activar Cartman manualmente

Para activar Cartman manualmente, siga los pasos a continuación:

1. Acceda a cualquier página de Checkout de su tienda (`https://{accountname}.myvtex.com/checkout/`).
2. Inserte la query string `?cartman=on` al final de la URL (`https://accountname.myvtex.com/checkout?cartman=on`).
3. En la esquina inferior derecha de la pantalla, haga clic en el botón <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_5.png" alt="cartman-icon" width="25"/> para acceder a Cartman.

## Funciones Cartman

### Simulador de promociones

Al acceder al **Simulador de promociones**, puedes ver las promociones creadas en tu tienda que se aplicaron al carrito y por qué se activaron. También puedes probar aplicar promociones antes de activarlas, incluyendo promociones inactivas y programadas.

Para más información sobre esta herramienta, consulta el artículo [Simulador de promociones](https://help.vtex.com/es/tutorial/simulador-de-promociones-beta--4zc8SNqjqeIJ0ZRMhjlnvy).

### Obtener información sobre los ítems en el carrito

Accediendo al **Ver detalles del carrito**, es posible consultar la información específica de cada uno de los productos seleccionados en el carrito.

![Detalles del ítem](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_1.PNG)

### Agregar ítems específicos al carrito

En **Agregar ítems por ID de SKU**, se pueden agregar nuevos ítems al carrito de acuerdo con su código de identificación (ID de SKU). Se pueden utilizar los siguientes campos:

- **IDs de SKU**: número de identificación de un ítem en particular (SKU). Campo obligatorio.
- **Cantidad de cada ítem**: indicación de cuántas unidades SKU se agregarán al carrito.
- **ID do seller**: indicación de cuántas unidades SKU se agregarán al carrito. 

![Agregar ítems por ID de SKU](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_2.PNG)

### Agregar ítems aleatorios al carrito

En **Agregar ítems al azar**, nuevos ítems del catálogo de la tienda se pueden agregar al carrito al azar (sin especificar qué ítem se agregará). Para agregar nuevos ítems, se pueden seleccionar uno o más de los siguientes criterios:

- Numero de ítems
- Cantidad de cada ítem
- ID da categoría
- ID da marca
- ID da colección
- ID do seller
- Gama de precios (Precio desde / Precio hasta)

![Agregar ítems al azar](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_3.PNG)

### Establecer datos de marketing

En la opción **Establecer datos de marketing**, puede aplicar cupones de descuento a ítems y promociones específicos en función de la información de marketing. Se pueden utilizar los siguientes campos:

- **utm_source**: el origen del tráfico, es decir, a través de qué sitio web, anunciante o publicación, el usuario llegó a la tienda.
- **utm_medium**:los medios publicitarios o de marketing utilizados para acceder al sitio web de la tienda (banner, newsletter).
- **utm_campaign**: el nombre de la campaña utilizada para determinar el contexto de marketing (Navidad, lanzamiento).
- **utmi_cp**: utm interna utilizada para definir cuándo se aplicará una determinada promoción, según la utm descrita en la URL del pedido.  
- **Cupón**: código de cupón de descuento para agregar al carrito.

![Establecer datos de marketing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_4.PNG)

Para obtener más información sobre UTMs y UTMIs, vaya a [Qué son utm_source, utm_campaign y utm_medium](https://help.vtex.com/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii#) y [Qué son las UTMs internas utmi_cp, utmi_pc y utmi_p](https://help.vtex.com/es/tutorial/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p#).

## Deshabilitar Cartman ##

Cartman se puede desactivar en cualquier momento según lo requiera el lojista. Para deshabilitarlo, siga los pasos a continuación:

1. Acceda a cualquier página de Checkout de su tienda   (`https://{accountname}.myvtex.com/checkout/`).
2. En la esquina inferior derecha de la pantalla, haga clic en el botón <img src="https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/configuraci%C3%B3n-de-checkout/configurar-cartman_6.png" alt="cartman-icon" width="25"/>.
3. En la parte inferior del menú de Cartman, haz clic en `Deshabilitar Cartman`.

> ℹ️ Si desea reactivar **Cartman**, vuelva a agregar la query string `?cartman=on` en una de las páginas de pago de su tienda. De esta forma, el icono azul volverá a estar disponible en la esquina inferior derecha de la página.


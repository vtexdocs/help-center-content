---
title: 'Anunciar con VTEX Ad Network (Beta)'
id: 5WoXcJzHc7EQElpPjziqse
status: PUBLISHED
createdAt: 2024-04-23T18:57:14.559Z
updatedAt: 2024-08-05T22:33:07.827Z
publishedAt: 2024-08-05T22:33:07.827Z
firstPublishedAt: 2024-04-23T19:16:43.333Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: anunciar-con-vtex-ad-network-beta
locale: es
legacySlug: anunciar-con-vtex-ad-network-beta
subcategoryId: 2AksvvAtAsbAfE7HsBIVDU
---

>ℹ️ VTEX Ad Network se encuentra en fase beta, lo que significa que estamos trabajando para mejorarlo. Si ya eres cliente de VTEX y deseas adoptar esta funcionalidad para tu negocio, por favor, póngate en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Si aún no es cliente pero estás interesado(a) en esta solución, por favor, completa el [formulario de contacto](https://vtex.com/co-es/contacto/).

[VTEX Ad Network (Beta)](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur) te permite anunciar productos de tu marca en storefronts de retailers VTEX que tengan tu producto en su catálogo.

Para comenzar a anunciarte en VTEX Ad Network, debes ponerte en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar la instalación de la aplicación __VTEX Ad Network__ en tu cuenta VTEX.

Si ya eres un anunciante de **VTEX Ad Network**, en este artículo puedes ver detalles sobre cómo gestionar y monitorear tus campañas.

- [Crear campaña](#crear-campana)
- [Editar campaña](#editar-campana)
- [Pausar campaña](#pausar-campana)
- [Monitorear campañas](#monitorear-campanas)
- [Ver más detalles por campaña y producto](#ver-mas-detalles-por-campana-y-producto)

>ℹ️ Ad Network proporciona registros de los cambios realizados en las campañas en el <a
> href="https://help.vtex.com/es/tutorial/audit--5RXf9WJ5YLFBcS8q8KcxTA">
> Audit</a>. Para más detalles, consulte la <a
> href="https://help.vtex.com/es/tutorial/eventos-disponibles-en-audit--6r1Mzcu5NmkmmDLJlz9CCZ#ad-network">
> lista de los eventos disponibles en Audit</a>.

## Crear campaña

Para crear una [campaña de VTEX Ad Network](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#campanas), sigue los pasos a continuación:

>ℹ️ Actualmente, VTEX cuenta con un único formato de anuncio: resultados de búsqueda. Consulta más información sobre este [formato de anuncio](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#formato-de-anuncio).

1. En el Admin VTEX, accede a __Storefront > Ad Network > Campañas__.
2. Haz clic en `Crear campaña`.
3. En la sección **Nombre de la campaña**, haz clic en el botón de editar <i class="fas fa-pencil-alt"></i>.
4. Ingresa el nombre que deseas utilizar para tu campaña y haz clic en `Guardar`.
5. En la sección **Productos**, haz clic en el botón de editar <i class="fas fa-pencil-alt"></i>.
6. Selecciona los productos que deseas anunciar utilizando una de las siguientes opciones:

   * __Buscar productos por EAN:__ buscar productos de tu catálogo por EAN.
   * __Cargar archivo:__ enviar un archivo CSV con una lista de códigos EAN y ofertas, según [este ejemplo](https://assets.ctfassets.net/alneenqid6w5/37tlx8GVGFxhOS48l73Ehz/c61c4a27f462bb3fa85457eed1bad0b8/teste-ads.csv). Los EAN son obligatorios y las ofertas son opcionales en el archivo.

7. En la sección **Presupuesto, oferta y cronograma**, haz clic en el botón de editar <i class="fas fa-pencil-alt"></i>.
8. Define los valores de las ofertas para cada producto. Puedes definir cada valor individualmente.
	>ℹ️ La oferta de un producto es el costo por clic (CPC), el valor gastado cuando un usuario hace clic en el anuncio. Más información sobre [campañas](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#campanas) y cómo funciona la [subasta](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#priorizacion-de-anuncios).
9. Haz clic en `Siguiente`.
10. Define el presupuesto diario de la campaña.
11. Define la duración de la campaña seleccionando la fecha de fin.
12. En la sección **Cobertura de anuncios**, haz clic en el botón de editar <i class="fas fa-pencil-alt"></i>.
13. Selecciona las tiendas en que deseas mostrar esta campaña.

   De forma predeterminada, VTEX muestra los anuncios en todas las tiendas de retailers participantes de VTEX Network que venden los productos seleccionados en tu campaña.

   Si no deseas mostrar tus anuncios en todas las tiendas, marca la opción **O escoge tus retailers** y selecciona las tiendas de retailers en que deseas mostrar los anuncios de esta campaña.

14. Haz clic en `Guardar`.
15. Haz clic en `Publicar`.

En unos minutos, los productos seleccionados comenzarán a anunciarse en lugares destacados de tiendas VTEX.

## Editar campaña

Después de crear una campaña, puedes editar cualquiera de sus características. Para editar, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Ad Network > Campañas__.
2. Haz clic en la fila de la tabla correspondiente a la campaña que deseas editar.
3. Haz clic en el ícono <i class="fas fa-pencil-alt"></i>.
4. Cambia la información que desees.
5. Haz clic en el ícono <i class="fa-solid fa-check"></i>.

## Pausar campaña

Puedes pausar campañas para que sus anuncios dejen de mostrarse. Si deseas pausar una de tus campañas, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Ad Network > Campañas__.
2. En la fila correspondiente a la campaña que deseas pausar, haz clic en <i class="fas fa-ellipsis-v"></i>.
3. Haz clic en `Pausar`.

## Pausar producto

Puedes pausar un producto específico de tu campaña para que el anuncio correspondiente deje de mostrarse. Si deseas pausar un producto específico dentro de una de tus campañas, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Storefront > Ad Network > Campañas__.
2. Haz clic en la fila correspondiente a la campaña que contiene el producto que deseas pausar.
3. En la fila correspondiente al producto que deseas pausar, haz clic en <i class="fas fa-ellipsis-v"></i>.
4. Haz clic en `Pausar`.

## Monitorear campañas

En la pantalla de inicio de la aplicación [VTEX Ad Network](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur), también encontrarás información sobre tus campañas en curso.

![vtex_ad_network_create_campaign_ES](https://images.ctfassets.net/alneenqid6w5/3b6zZAI4R3cC9Jd1rGPwtn/1d60c965f3c6e4cf92a2f7487e938cb9/vtex_ad_network_create_campaign.png)

En la parte superior se muestran los datos agregados:

- **Presupuesto total:** presupuesto total designado para tus campañas.
- **Presupuesto gastado:** valor gastado hasta la fecha.
- **ROAS promedio:** promedio del retorno de inversión publicitaria.
- **Ventas por anuncios:** ingresos totales de ventas derivadas de anuncios.

A continuación, se muestra una tabla con la información de cada campaña:

- **Duración:** duración de la campaña hasta la fecha.
- **Impresiones:** número de veces que los anuncios recibieron impresiones en la página.
- **Vistas:** número de veces que los anuncios fueron realmente vistos. VTEX Ad Network cuenta una vista cuando se produce una impresión de anuncio y, si es necesario, el usuario desplaza la página lo suficiente como para visualizar al menos el 50 % del área del anuncio durante un segundo.
- **Clics:** número de clics en anuncios. VTEX Ad Network descarta clics en el mismo producto que ocurran en menos de un minuto entre sí.
- **CTR:** tasa de clics, calculada dividiendo el número de clics entre el número de vistas.
- **Pedidos:** número de pedidos derivados de clics en anuncios.
- **Unidades vendidas:** número de unidades de productos vendidas a partir de anuncios de esa campaña.
- **Ventas:** ingresos totales de ventas.
- **ROAS:** retorno de inversión publicitaria.
- **Presupuesto:** presupuesto total.
- **Presupuesto restante:** presupuesto que aún está disponible.

>ℹ️ Consulta más información sobre [atribución de ventas a anuncios](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#ventana-de-atribucion).

Puedes filtrar los datos de la tabla utilizando las siguientes opciones:

- **Buscar campaña:** filtra las campañas por nombre.
- **Status:** selecciona si deseas ver solo las campañas activas o inactivas.

### Ver más detalles por campaña y producto

En la tabla de la pantalla de inicio de la aplicación [VTEX Ad Network](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur) también puedes hacer clic en las filas de tus campañas para ver detalles más específicos.

- **Vistas/Clics:** vistas y clics en anuncios.
- **CTR:** tasa de clics, calculada dividiendo el número de clics entre el número de vistas.
- **Presupuesto gastado:** valor gastado hasta la fecha.
- **ROAS:** retorno de inversión publicitaria.
- **Ingresos:** ingresos por ventas derivadas de anuncios.

Debajo de los datos agregados, se muestra una tabla con la información del desempeño de cada producto de esa campaña:

- **CPC:** valor gastado cuando un usuario hace clic en un anuncio.
- **Impresiones:** número de veces que los anuncios recibieron impresiones en la página.
- **Vistas:** número de veces que los anuncios fueron realmente vistos. VTEX Ad Network cuenta una vista cuando hay una impresión del anuncio y, de ser necesario, el usuario desliza la página lo suficiente para verlo.
- **Clics:** número de clics en anuncios.
- **CTR:** tasa de clics, calculada dividiendo el número de clics entre el número de vistas.
- **Pedidos:** número de pedidos derivados de clics en anuncios.
- **Unidades vendidas:** número de unidades del producto vendidas a partir de anuncios de esta campaña.
- **Ventas:** ingresos totales de ventas.
- **ROAS:** retorno de inversión publicitaria.
- **Presupuesto restante:** presupuesto que aún está disponible actualmente.

>ℹ️ Consulta más información sobre [atribución de ventas a anuncios](https://help.vtex.com/es/tutorial/vtex-ad-network-beta--2cgqXcBuJmXN2livQvClur#ventana-de-atribucion).


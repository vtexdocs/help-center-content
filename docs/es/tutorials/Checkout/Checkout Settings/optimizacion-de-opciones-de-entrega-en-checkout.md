---
title: 'Optimización de opciones de entrega en Checkout'
id: 6DeGO9eBSFWe4XkoS0SxAB
status: PUBLISHED
createdAt: 2022-05-25T19:12:15.339Z
updatedAt: 2023-03-23T17:31:59.995Z
publishedAt: 2023-03-23T17:31:59.995Z
firstPublishedAt: 2022-05-27T12:33:12.618Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: optimization-of-shipping-options-at-checkout
locale: es
legacySlug: optimizacion-de-opciones-de-entrega-en-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

Cuando el cliente realiza un pedido, el carrito puede contener productos que se encuentran en una de las siguientes configuraciones:
- Almacenamiento en múltiples locales ([almacén](/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb#) o [muelles](/es/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj#)).
- Vendedores específicos para cada producto seleccionado, incluidos [sellers white label](/es/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa).
- Envíos realizados por diferentes [transportadoras](/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE#).

En este contexto, Checkout v6 de VTEX le permite procesar diferentes opciones de entrega y combinar productos seleccionados en paquetes. Esta optimización de opciones de entrega (también conocida como **Lean Shipping**) mejora la experiencia de compra del cliente a través de las siguientes acciones:
- **Reducción de información en Checkout**:
  - No se muestran al cliente opciones de envío más caras y más lentas.
  - Los productos con diferentes opciones de entrega se organizan automáticamente en [múltiples paquetes](/es/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV#), sin necesidad de revisión por parte del cliente.

- **Checkout más rápido**: procesamiento interno de las opciones de entrega disponibles, reduciendo el número de opciones que tienen costos y tiempos de entrega similares.

## Opciones de entrega optimizadas

Checkout v6 de VTEX combina información como el código postal del cliente, la localización de los productos, las transportadoras disponibles en la región y pone a disposición en la pantalla de Checkout las opciones de entrega **Más económica** y **Más rápida**.

- **Más económica**: opción con el menor costo para el cliente.
- **Más rápida**: opción con el tiempo de entrega más corto.

<div class="alert alert-warning">
Cuando solo se encuentra disponible un tipo de opción de entrega para un pedido determinado, las opciones <b>Más económica</b> y <b>Más rápida</b> no se mostrarán al finalizar la compra.
</div>

## Deshabilitar la función Opciones de entrega optimizadas

La funcionalidad **Opciones de entrega optimizadas** está habilitada de forma predeterminada en Checkout v6. Sin embargo, en algunas regiones puede haber escenarios que contribuyan a que esta función no se utilice. En países como España o Estados Unidos, donde las opciones de envío disponibles son similares, los consumidores prefieren elegir una transportadora en función de su nivel de confianza en la empresa.

<div class="alert alert-warning">
Al deshabilitar esta función en Admin VTEX, todas las opciones de entrega disponibles se mostrarán en el proceso de Checkout. Sin embargo, si la funcionalidad de <a href="https://help.vtex.com/es/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV#">Entregas Múltiples</a> está habilitada en la tienda y hay diferentes opciones de entrega entre los artículos seleccionados en el carrito, las <b>Opciones de entrega optimizadas</b> seguirán mostrándose. Es decir, se necesitará optimizar la entrega para manejar múltiples paquetes (artículos con diferentes opciones de entrega).
</div>

Para deshabilitar la función __Opciones de entrega optimizadas__, siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Storefront > Checkout__, o escribe __Checkout__ en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono <i class="fas fa-cog" alt="blue gear"></i> del sitio deseado.
3. En el menú de opciones azul ubicado en la parte superior de la página, haga clic en __Checkout__.
4. En __Opciones de entrega optimizadas__, haga clic en el botón <i class="fas fa-toggle-off"></i> para deshabilitar la opción de visualización de las __Opciones de entrega optimizadas__.

![Opciones de entrega optimizadas](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Checkout/Checkout%20Settings/optimizacion-de-opciones-de-entrega-en-checkout_1.PNG)

<ul>
  5. Haga clic en <b>Guardar</b>.
  </ul>

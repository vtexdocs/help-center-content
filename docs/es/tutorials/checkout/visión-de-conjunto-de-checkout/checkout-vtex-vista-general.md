---
title: 'Checkout VTEX - Vista general'
id: 7wcprkM7yZUflOqbzAN5SI
status: PUBLISHED
createdAt: 2022-07-06T12:13:18.284Z
updatedAt: 2022-07-13T18:53:14.222Z
publishedAt: 2022-07-13T18:53:14.222Z
firstPublishedAt: 2022-07-13T18:28:12.662Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: checkout-vtex-overview
legacySlug: checkout-vtex-vista-general
locale: es
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

El checkout es la etapa final del proceso de compras online. También se lo considera una de las etapas más importantes para la tasa de conversión de ventas en una tienda. En VTEX, el módulo Checkout se encarga de:
- Brindar información sobre el precio y la disponibilidad de los ítems en la vitrina de la tienda, de acuerdo con los sellers registrados.
- Agregar ítems y procesar el carrito de compras.
- Recabar los datos de la compra y finalizarla.

Para realizar todas estas acciones se usa una serie de datos compartidos con otros módulos de la plataforma VTEX, por ejemplo, [Catálogo](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR#), [Inventario & envío](https://help.vtex.com/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx#), [Precios](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Pagos](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#) y [Gestión de pedidos](https://help.vtex.com/es/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O#). Todos estos datos compartidos permiten el procesamiento de información sobre disponibilidad, precios, promociones aplicables, métodos de envío y de pago.

## Operación del módulo Checkout de VTEX

A continuación, se describe la experiencia de compra de un cliente, además de la función del módulo Checkout y de los otros módulos relacionados con este proceso.

1. **Selección de ítems**: el cliente selecciona los ítems que se mostrarán en la vitrina según los sellers registrados en la tienda. Los ítems se muestran según la ubicación del cliente en las tiendas que tienen restricciones geográficas con respecto a las entregas. Para más información sobre la disponibilidad de ítems de los sellers, accede a [Configurar el precio y la disponibilidad de SKU por región](https://help.vtex.com/es/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc#) y [Seller de extensa cobertura](https://help.vtex.com/es/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI#).
2. **Agregado de ítems al carrito y finalización de la compra**: el cliente agrega uno o más ítems al carrito, selecciona las cantidades y hace clic en el botón `Fechar Pedido`. La información de cada ítem (cantidad, precio, promociones, disponibilidad del seller) se obtiene de los módulos **Catálogo**, **Inventario & envío**, **Precios** y **Promociones** y se envían al módulo **Checkout**.
3. **Identificación del cliente**: el cliente ingresa su email. El checkout recibe información del [Master Data](https://help.vtex.com/es/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#) y verifica si el email ingresado está registrado en la tienda. Si lo está, los datos del cliente aparecerán parcialmente rellenados ([SmartCheckout](https://help.vtex.com/es/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#)) den la pantalla del checkout.
4. **Rellenado de datos personales**: en la pantalla del checkout, el cliente revisa e ingresa sus datos personales y de entrega. El módulo Checkout calcula el [tiempo](https://developers.vtex.com/vtex-rest-api/reference/calculatesla) y las [opciones](https://help.vtex.com/es/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) de entrega para el cliente. La información fluye del mismo modo que en el paso número 2.
5. **Selección del método de pago**: el cliente selecciona el método de pago, ingresa una tarjeta de regalo (si corresponde) y finaliza la compra. El checkout recibe y envía información hacia el módulo de **Pagos**.
6. **Finalización del pedido**: el cliente ve la información relacionada con la creación del pedido de compra. El módulo Checkout envía la información sobre la creación del pedido a través de la [Place order from an existing cart API](https://developers.vtex.com/vtex-rest-api/reference/placeorderfromexistingorderform). Obtén más información en [Using APIs to place a regular order](https://developers.vtex.com/vtex-rest-api/docs/using-apis-to-place-a-regular-order).

Siempre que el cliente realiza un cambio en el carrito (agrega o elimina ítems), o cuando se actualiza la pantalla del checkout, se ejecuta la siguiente cadena de procesos internos en el módulo Checkout.

![Checkout overview](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/checkout/visi%C3%B3n-de-conjunto-de-checkout/checkout-vtex-vista-general_1.png)

> ℹ️ Si un [Seller white label](https://help.vtex.com/es/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#), puede entregar uno o más ítems de los que eligió el cliente, se realizarán simulaciones (tal como se muestra a la derecha de la imagen) para determinar qué sellers serán los responsables de entregar los ítems. Obtén más información en [Selección de sellers white label](https://help.vtex.com/es/tutorial/white-label-sellers-selection--3MemNQ4pKkWCpMdzI27AHa#).

## Funcionalidades del módulo Checkout de VTEX

Entre las principales funcionalidades disponibles en el módulo Checkout de VTEX, podemos destacar: 

- [SmartCheckout](https://help.vtex.com/es/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#): solución de VTEX que elimina la utilización del proceso de autenticación del cliente (usuario y contraseña) para completar los datos de manera automática en la pantalla del checkout. El cliente solo debe informar el email que registró en la tienda.
- [Optimización de las opciones de entrega](https://help.vtex.com/es/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) (lean shipping): combina información de los clientes y de los ítems para crear opciones de entrega más económicas y rápidas.
- [Puntos de recogida](https://help.vtex.com/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#): permite verificar información sobre los puntos de recogida disponibles para cada ítem, por ejemplo, domicilios y mapas de localización. Obtén más información en [Gestionar geolocalización](https://help.vtex.com/es/tutorial/gerenciar-geolocalizacao--tutorials_138).
- [Manual Price](https://help.vtex.com/es/tutorial/modificar-o-preco-de-um-item-no-carrinho-de-compras--7Cd37aCAmtL1qmoZJJvjNf#): le permite al retailer modificar el precio de un ítem disponible en el carrito.
- [reCAPTCHA](https://help.vtex.com/es/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP): herramienta usada para validar al usuario real en pedidos que se pagarán con tarjeta de crédito o débito con el fin de evitar accesos de usuarios falsos que pueden simularse a través de programas maliciosos.

## Versiones del módulo Checkout de VTEX

Actualmente, hay dos versiones operativas del módulo Checkout de VTEX: **Checkout v5** y **Checkout v6**.

> ℹ️ La versión **Checkout v5** ya no recibe actualizaciones ni soporte operativo directo. Es precisamente por esto que te recomendamos usar la versión **Checkout v6** en tu tienda.

Para más información sobre las configuraciones y las API del módulo Checkout, accede a [Checkout Overview no Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/checkout-overview).

---
title: 'Pasillo Infinito'
id: 40KMlmGI5tN0r0KPCDWgGn
status: PUBLISHED
createdAt: 2020-06-30T21:32:21.143Z
updatedAt: 2023-05-31T15:34:48.839Z
publishedAt: 2023-05-31T15:34:48.839Z
firstPublishedAt: 2020-06-30T21:36:39.077Z
contentType: trackArticle
productTeam: Shopping
slug: pasillo-infinito
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugES: estrategias-de-comercio-unificado
---

El Pasillo Infinito es la feature que posibilita al cliente final comprar productos en un canal (generalmente una tienda física) incluso si estos productos no existen en el stock de ese canal. El pedido puede cerrarse porque la tienda puede acceder al catálogo compartido por todos los inventarios y tiendas físicas de la marca, y la entrega se puede realizar desde cualquier de estes sctocks.

Este es un concepto básico de las estrategias omnichannel, y es esencial para una experiencia real de Comercio Unificado, ya que la disponibilidad en stock local ya no es un impedimento para cerrar la compra, eliminando barreras en la interacción con el cliente final, elevando su tasa de conversión, y unificando toda la gestión de este proceso en un solo sistema.

## Prerrequisitos

En primer lugar, consideremos los requisitos previos que su tienda necesita para asegurarse de comenzar a implementar una estrategia de Pasillo Infinito. Consulte nuestro artículo sobre [Requisitos previos para utilizar VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeros-pasos-y-configuracion--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u "Requisitos previos para utilizar VTEX Sales App").

## Agregar tiendas físicas al VTEX Sales App

Para implementar una estrategia de Pasillo Infinito, usted debe agregar sus tiendas físicas en la plataforma VTEX.

Para hacer esto, siga los pasos en el artículo [Agregar nuevos vendedores y tiendas al VTEX Sales App](https://help.vtex.com/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

Un punto importante de atención al registrar una nueva tienda es la [Política Comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) aplicada a esa tienda. Ella define qué variedad de productos será válida para la tienda.

Si la Política Comercial principal de la tienda también se utiliza para vender en marketplaces, usted debe usar una Política Comercial diferente para VTEX Sales App. Si no lo hace, los métodos de pago `Débito Venta Directa` y `Crédito Venta Directa`, configurados para el VTEX Sales App, también se mostrarán en el proceso de pago de los marketplaces.

Si, por otro lado, su tienda usa una Política Comercial dedicada al VTEX Sales App, asegúrese de que:
- Sus productos tienen un precio de acuerdo con esta Política Comercial dedicada.
- La Política Comercial dedicada se encuentra en el registro de productos que deben servir a la tienda donde se utilizará VTEX Sales App.

Los campos Cuenta-franquicia y Punto de Recogida, en el registro de la tienda, solo deben completarse si desea trabajar con la recogida de productos en tiendas físicas. Si este es su caso, lea también la guía [Configuración de Puntos de Recogida](https://help.vtex.com/es/tutorial/configurar-seller-white-label-como-punto-de-retirada-pickup-point--6fSUE2O0taaoKieAaiuc4e).

Cuando termine de completar los detalles de la tienda, haga clic en el botón `Guardar`.

---
title: 'VTEX lanza nueva feature de Puntos de Recogida (Pickup Points)'
id: 3Nba5qVpEsmQKwu82Ao4s
status: PUBLISHED
createdAt: 2017-10-30T20:47:42.057Z
updatedAt: 2019-12-31T15:12:52.626Z
publishedAt: 2019-12-31T15:12:52.626Z
contentType: updates
productTeam: Post-purchase
author: authors_59
slugEN: 2017-10-30-vtex-releases-new-pickup-points-feature
locale: es
legacySlug: vtex-lanza-nueva-feature-de-puntos-de-recogida-pickup-points
announcementImageID: ''
announcementSynopsisES: 'Utilizando el concepto de Delivery Channels, cambiamos la forma de registro y administración de los puntos de recogida.'
---

Teniendo en cuenta las necesidades de innovación de nuestros clientes, VTEX lanza su nueva feature de Pickup Points. 

Utilizando el concepto de Delivery Channels, cambiamos la forma de registro y de administración de los puntos de recogida de pedidos. Anteriormente, la configuración de los puntos de recogida se realizaba en la Muelle. Ahora, incluimos una nueva pestaña de puntos de recogida en el módulo Logistics, donde se deben registrar los lugares de retirada.

En esta versión, los Puntos de Recogida deben estar asociados a alguna Transportista en el módulo Logistics. De esta forma, el minorista podrá configurar en la tabla de flete cuáles CEPs van a ser atendidos por los Puntos de Recogida vinculados a una transportista.

## ¿Por qué lo hicimos?

Esta feature se basó en un nuevo concepto, que llamamos Delivery Channel. Antes, todas las entregas eran vistas en nuestra API como del tipo "delivery" (entrega en domicilio), incluyendo los Pickup Points registrados en las Muelles. Ahora, estamos creando el tipo "pick-up-point". De esta forma, ahora pasan a existir dos Delivery Channels: "delivery", para entregas en domicilio y "pick-up-point", para retirada.

Decidimos separar las informaciones de canales de entrega porque eso nos da más flexibilidad, con mayores oportunidades de evolucionar nuestro producto, creando una mejor experiencia de compra para el cliente final, impulsando las ventas. Además, esta organización en canales de entrega crea mayor facilidad en la administración y en el registro de los Puntos de Recogida.


## Acciones necesarias

Esta actualización no rompe ninguna configuración actual de logística.

Sin embargo, cabe resaltar que, en el nuevo criterio, los puntos de recogida antiguos serán considerados como "delivery". Los nuevos puntos de retirada se crearán con el canal de entrega "pick-up-point". Así, para tener acceso a nuevos releases que contemplen puntos de recogida nativamente, el minorista deberá configurar sus pickup points de esta nueva manera.

Además, en relación a la API, la diferencia entre la versión nueva y la antigua es que, en la versión anterior, la entrega era identificada sólo por la variable sla\_Id. En la actualidad, la entrega será identificada por el sla\_Id y el Delivery Channel.

Para saber cómo registrar los nuevos Pickup Points, acceda a nuestro [tutorial](/es/tutorial/configurar-puntos-de-recogida-pickup-points).

---
title: 'Promociones de campaña: nueva opción al configurar el público objetivo'
id: UJOyf1nYJ0xHXl88RytJ5
status: PUBLISHED
createdAt: 2022-07-22T14:00:40.004Z
updatedAt: 2022-07-25T13:00:56.738Z
publishedAt: 2022-07-25T13:00:56.738Z
contentType: updates
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: promociones-de-campana-nueva-opcion-al-configurar-el-publico-objetivo
locale: es
legacySlug: promociones-de-campana-nueva-opcion-al-configurar-el-publico-objetivo
announcementImageID: ''
announcementSynopsisES: 'Usar varios públicos objetivo en simultáneo en una audiencia de campaña en lugar de usar solo un público u otro.'
---

Las promociones para públicos segmentados son acciones estratégicas destinadas a atraer y retener clientes. En VTEX, la [promoción de campaña](https://help.vtex.com/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume) permite alcanzar públicos objetivo específicos definidos en una [audiencia de campaña](https://help.vtex.com/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m).

Mejoramos la configuración de Audiencia de campañas para permitirte sumar públicos objetivo en lugar de que solo puedas usar un público u otro. De esta manera, puedes combinar criterios y definir incluso con más precisión al público que se verá beneficiado con una promoción.

## ¿Qué cambió?

En el Admin VTEX, en **Productos > Promociones y Tasas > Audiencia de campañas > Nueva audiencia de campaña**, en las configuraciones referidas al **Público objetivo**, agregamos la opción «y», donde antes solo estaba la opción «o».  Esto significa que ahora puedes aplicar una lógica de adición de criterios («y»), además de la lógica de alternativa («o») que ya existía. Observa la imagen a continuación:

![publico-alvo-e-ou-es](//images.ctfassets.net/alneenqid6w5/2NrpuE4MN7q6qaHI6mkoCe/a3b67e255c3d65380455c6baeae20ad8/es-publico-alvo.gif)

Con la nueva opción, puedes crear promociones de campaña a partir de una combinación de criterios de una manera más flexible.

Por ejemplo, en el sector alimenticio, al registrar una audiencia de campaña, puedes crear un público objetivo definido por la compra de un ítem de la categoría **Pizza**, y otro público objetivo definido por la compra de un ítem de la categoría **Bebidas**. Al seleccionar la opción «**y**» para aplicar ambos criterios y asociar esa audiencia de campaña a una promoción de campaña, puedes ofrecer un descuento o un regalo exclusivo a los clientes que cumplen con los dos criterios.

Además del cambio en la creación y edición de audiencia de campañas de la interfaz, sumamos el parámetro `isAndOperator` en las rutas de la API referidas a Audiencia de campañas. Para más información, consulta [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration) (Promociones y Tasas - API).

## ¿Por qué realizamos este cambio?

Incluimos la nueva opción de registro de público objetivo con los fines indicados a continuación:

* Hacer más flexible la configuración.
* Cubrir más escenarios de promociones de campaña.
* Permitir que las acciones promocionales sean más precisas al momento de alcanzar al público deseado.

## ¿Qué se necesita hacer?

No es necesario hacer nada, ya que la actualización se aplicará automáticamente en todas las tiendas VTEX.

Para más información sobre promociones de campaña y audiencias de campaña, consulta nuestros documentos:

- [Crear audiencia de campaña](https://help.vtex.com/es/tutorial/crear-audiencia-de-campanas--6cnuDZJzIkIeocewAQQK4K)
- [Audiencias de campañas](https://help.vtex.com/es/tutorial/audiencias-de-campanas--3o7lhpNseXY2WmjZO0gQ6m)
- [Crear promoción de campaña](https://help.vtex.com/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume)
* [Promotions & Taxes API](https://developers.vtex.com/vtex-rest-api/reference/setcampaignconfiguration)

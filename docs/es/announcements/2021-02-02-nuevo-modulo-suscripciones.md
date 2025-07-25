---
title: 'Nuevo módulo de Suscripciones'
id: 6PfEmqovkZF97AZUp1owdf
status: PUBLISHED
createdAt: 2021-02-02T15:31:07.376Z
updatedAt: 2022-01-03T16:06:38.858Z
publishedAt: 2022-01-03T16:06:38.858Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2021-02-02-new-subscriptions-module
locale: es
legacySlug: nuevo-modulo-de-suscripciones
announcementImageID: ''
announcementSynopsisES: 'El módulo Suscripciones es una solución de VTEX para pedidos recurrentes en su tienda, y está en constante evolución'
---

<div class="alert alert-info">
  <p>La actualización solo afectará a las tiendas que poseen el módulo Suscripciones. Para las tiendas que no tienen esta funcionalidad, nada cambiará.</p>
</div>

El módulo Suscripciones es una solución de VTEX para pedidos recurrentes en su tienda, y está en constante evolución. Mejoramos el módulo para agilizar el desempeño del sistema y entregar nuevas funcionalidades que mejoran la experiencia del consumidor de su tienda. Este artículo detalla todos los cambios del módulo y lo que se necesita realizar en su tienda. 

## ¿Qué cambió?

La evolución en el módulo incluye:
-  Mejoras en la visualización y gestión de suscripciones en la cuenta de su consumidor.
-  Cambios en el cálculo de la fecha de ciclo del pedido por suscripción.
-  Cambios en las rutas de API utilizadas en las integraciones externas de su tienda.

Los administradores de tiendas que no utilizan nuestras APIs en sus integraciones, no necesitarán realizar ninguna configuración desde el inicio o adaptación, ya que nuestro sistema implementará el nuevo módulo de forma automática.  

Por otro lado, los administradores de tiendas o partners que utilizan nuestra API de Suscripciones, necesitarán implementar las nuevas rutas para que sus integraciones operen con el nuevo módulo. Todo el proceso de migración será apoyado por el equipo de VTEX, garantizando una transición sin problemas al nuevo módulo. Para saber más sobre la migración, [vea nuestra documentación en el Portal del Desarrollador](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide).

### Nuevas funcionalidades para su cliente

La mejora del sistema de suscripciones también trajo nuevas funcionalidades para el consumidor de su tienda. La interfaz de la página __Mi cuenta__ a la que ellos acceden en el sitio web de su tienda también evolucionó para abarcar las siguientes funcionalidades:  

#### Nueva página de detalles de suscripción 
Nuestra página de detalles de suscripción fue rediseñada con el fin de mejorar la experiencia del consumidor al reducir el tiempo para encontrar información y realizar tareas.  Además, contamos con una nueva funcionalidad de agregar ítems a una suscripción existente. 

![img1 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_1.png)

#### Barra de acciones
Añadimos una barra de acciones para mejorar la comunicación con el usuario sobre lo que se necesita realizar o comunicar eventos importantes sobre su suscripción. 

![img2 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_2.png)

#### Agregar productos a su suscripción 
Ahora se puede agregar nuevos ítems a su suscripción a través de la búsqueda de los productos disponibles en su tienda.
![img3 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_3.png)

#### Crear una nueva suscripción
Añadimos una funcionalidad muy esperada: la pantalla de creación de suscripciones. La misma permite configurar una nueva suscripción sin tener que pasar por el checkout y ejecutar un pedido en ese momento. Para realizar esta acción, basta hacer clic en el botón __Nueva suscripción__, en la lista de suscripciones. 

![img4 subscriptions PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_4.png)

### Nuevo concepto de suscripción para el sistema 
Antes, para el sistema de VTEX, una suscripción estaba compuesta por un SKU asociado a una configuración de compra. Eso permitía que el consumidor de la tienda suscriba SKUs con direcciones de entrega e, incluso, con formas de pago diferentes —una evolución en comparación con la primera versión del sistema.

#### Antes:
![img5 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_5.png)

![img6 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_6.png)

![img7 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_7.png)

La suscripción ahora consiste en una lista de SKUs y una configuración de compra determinada. Esto significa que eliminamos el concepto de «Grupos de suscripción» de nuestro sistema. Vea más información en nuestro artículo [Cómo funciona la suscripción](/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453). El siguiente diagrama muestra el nuevo concepto de suscripción:  

#### Ahora:
![img8 subscriptions ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2021-02-02-nuevo-modulo-suscripciones_8.png)

### Fecha de ciclo de la suscripción
El cálculo de la próxima fecha del pedido por suscripción cambió. Esta alteración permite que el usuario modifique la fecha de su pedido con mayor facilidad. Para acompañar el cambio, desarrollamos una [API](https://developers.vtex.com/vtex-developer-docs/reference/cycles) que permite elegir con exactitud la próxima fecha, sin tener que modificar la frecuencia de la suscripción para que se adecue a la fecha deseada.

## ¿Qué debo hacer?
Recordamos que, si su tienda no utiliza nuestras APIs en integraciones, no se necesita realizar ninguna adaptación, la evolución será implementada de forma automática por el sistema de VTEX. 
Para los administradores de tiendas o partners que utilizan nuestra API de Suscripciones, cabe señalar que todas las anteriores rutas de la API de Suscripciones se sustituirán por nuevas, para reflejar la evolución del módulo. Todo el proceso de migración será apoyado por el equipo de VTEX, garantizando una transición sin problemas al nuevo módulo. Vea nuestra [guía de integración con el nuevo módulo de Suscripciones](https://developers.vtex.com/vtex-developer-docs/docs/subscriptions-v3-migration-guide).

<div class="alert alert-info">
  Solicita la nueva interfaz de Suscripciones a nuestro <a href="https://help.vtex.com/es/tutorial/abrir-tickets-para-el-soporte-vtex--16yOEqpO32UQYygSmMSSAM">soporte</a>. La tienda debe contar con la instalación de Search of Biggy (<a href="https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG">Intelligent Search</a>) para activar la nueva interfaz.
  </div>
